import { ref, onMounted } from 'vue'
import { LINKS, RELEASE } from '../data.js'

// Two unauthenticated calls, cached for an hour. GitHub allows 60 per hour per
// IP, and that budget is per visitor, so this is nowhere near it -- but a
// visitor who reloads a lot should not spend it either.
const CACHE_KEY = 'owpengram-gh-v1'
const TTL = 60 * 60 * 1000
const API = 'https://api.github.com/repos/owpengram/owpengram-server'

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || Date.now() - parsed.at > TTL) return null
    return parsed.data
  } catch {
    return null
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }))
  } catch {
    /* private mode, quota, disabled storage -- the strip just goes back to
       the static fallback next load. */
  }
}

/** "3 days ago", "today" -- undefined for anything we cannot parse. */
export function relativeDay(iso) {
  if (!iso) return undefined
  const then = new Date(iso)
  if (Number.isNaN(then.getTime())) return undefined

  const days = Math.round((Date.now() - then.getTime()) / 86400000)
  if (days <= 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} days ago`

  const fmt = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  if (days < 365) return fmt.format(-Math.round(days / 30), 'month')
  return fmt.format(-Math.round(days / 365), 'year')
}

export function formatDay(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function useGithubRelease() {
  // Seeded from data.js so the strip renders complete on the first frame and
  // never flashes a skeleton; live values replace these when they arrive.
  const tag = ref(RELEASE.tag)
  const releasedAt = ref(RELEASE.date)
  const lastCommitAt = ref(null)
  const live = ref(false)

  function apply(data) {
    if (data.tag) tag.value = data.tag
    if (data.releasedAt) releasedAt.value = data.releasedAt
    if (data.lastCommitAt) lastCommitAt.value = data.lastCommitAt
    live.value = true
  }

  onMounted(async () => {
    const cached = readCache()
    if (cached) {
      apply(cached)
      return
    }

    try {
      const [release, repo] = await Promise.all([
        fetch(`${API}/releases/latest`).then((r) => (r.ok ? r.json() : null)),
        fetch(API).then((r) => (r.ok ? r.json() : null)),
      ])

      const data = {
        tag: release?.tag_name,
        releasedAt: release?.published_at,
        lastCommitAt: repo?.pushed_at,
      }
      if (data.tag || data.lastCommitAt) {
        apply(data)
        writeCache(data)
      }
    } catch {
      /* Offline, rate-limited, blocked -- the seeded values stand. */
    }
  })

  return { tag, releasedAt, lastCommitAt, live, releasesUrl: `${LINKS.server}/releases` }
}
