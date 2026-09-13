import { ref, onMounted } from 'vue'
import { LINKS, RELEASE } from '../data.js'

// Four unauthenticated calls, cached together for an hour. GitHub allows 60 an
// hour per IP and that budget is per visitor, so this is nowhere near it -- but
// someone who reloads a lot should not spend it either.
const CACHE_KEY = 'owpengram-gh-v2'
const TTL = 60 * 60 * 1000
const OWNER = 'https://api.github.com/repos/owpengram'
const SERVER = `${OWNER}/owpengram-server`
const CLIENT_REPOS = ['owpengram-desktop-client', 'owpengram-android-client']

// Module-level so several components share one fetch instead of one each.
const state = {
  tag: ref(RELEASE.tag),
  releasedAt: ref(RELEASE.date),
  lastCommitAt: ref(null),
  /** { 'owpengram-desktop-client': { 'OwpenGram.exe': { size, url } } } */
  assets: ref({}),
}
let started = false

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
    /* private mode, quota, disabled storage -- next load just refetches. */
  }
}

function apply(data) {
  if (data.tag) state.tag.value = data.tag
  if (data.releasedAt) state.releasedAt.value = data.releasedAt
  if (data.lastCommitAt) state.lastCommitAt.value = data.lastCommitAt
  if (data.assets) state.assets.value = data.assets
}

const json = (url) => fetch(url).then((r) => (r.ok ? r.json() : null)).catch(() => null)

async function load() {
  const cached = readCache()
  if (cached) {
    apply(cached)
    return
  }

  const [release, repo, ...clients] = await Promise.all([
    json(`${SERVER}/releases/latest`),
    json(SERVER),
    ...CLIENT_REPOS.map((r) => json(`${OWNER}/${r}/releases/latest`)),
  ])

  const assets = {}
  CLIENT_REPOS.forEach((repoName, i) => {
    const list = clients[i]?.assets
    if (!Array.isArray(list)) return
    assets[repoName] = Object.fromEntries(
      list.map((a) => [a.name, { size: a.size, url: a.browser_download_url }]),
    )
  })

  const data = {
    tag: release?.tag_name,
    releasedAt: release?.published_at,
    lastCommitAt: repo?.pushed_at,
    assets,
  }

  if (data.tag || data.lastCommitAt || Object.keys(assets).length) {
    apply(data)
    writeCache(data)
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

/** Bytes to the "218 MB" a download button should show. */
export function formatSize(bytes) {
  if (!bytes) return ''
  const mb = bytes / 1048576
  return mb >= 1000 ? `${(mb / 1024).toFixed(1)} GB` : `${Math.round(mb)} MB`
}

export function useGithubRelease() {
  // Seeded from data.js so everything renders complete on the first frame and
  // never flashes a skeleton; live values replace the seeds when they arrive.
  onMounted(() => {
    if (started) return
    started = true
    load()
  })

  return {
    ...state,
    releasesUrl: `${LINKS.server}/releases`,
  }
}
