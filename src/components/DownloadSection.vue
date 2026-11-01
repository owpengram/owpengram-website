<script setup>
import { computed } from 'vue'
import { DOWNLOADS, SERVER_INSTALL, SERVER_ARCHIVES, LINKS } from '../data.js'
import { useGithubRelease, formatSize, formatDay } from '../composables/useGithubRelease.js'
import IconSvg from './IconSvg.vue'

const { tag, releasedAt, assets } = useGithubRelease()

const released = computed(() => formatDay(releasedAt.value))

const SERVER_RELEASE = 'https://github.com/owpengram/owpengram-server/releases/latest'

function archiveUrl(archive) {
  return `${SERVER_RELEASE}/download/owpengram-server-${tag.value}-${archive.file}`
}

/** Live asset if GitHub answered, otherwise the fallback size from data.js. */
function resolve(platform, file) {
  const live = assets.value[platform.repo]?.[file.asset]
  return {
    size: formatSize(live?.size ?? file.size),
    url:
      live?.url ??
      `https://github.com/owpengram/${platform.repo}/releases/latest/download/${file.asset}`,
  }
}
</script>

<template>
  <section class="section download" id="download">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Download</span>
        <h2>Get OwpenGram</h2>
        <p>
          Version <strong>{{ tag }}</strong
          ><template v-if="released">, released {{ released }}</template
          >. Every file below is built from the source in the same repository.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(platform, i) in DOWNLOADS"
          :key="platform.id"
          class="card plat"
          v-reveal="i * 60"
        >
          <header>
            <IconSvg :name="platform.icon" />
            <h3>{{ platform.title }}</h3>
          </header>

          <div class="body">
            <a
              v-for="file in platform.files"
              :key="file.asset"
              :href="resolve(platform, file).url"
              class="btn btn-primary dl"
              :aria-label="`Download ${file.label} — ${file.asset}`"
            >
              <IconSvg :name="file.icon" class="dl-mark" />
              <span class="dl-label">{{ file.label }}</span>
              <span class="dl-size">{{ resolve(platform, file).size }}</span>
            </a>
          </div>
        </article>

        <!-- Nothing to download: the web client is opened, not installed. -->
        <article class="card plat plat--wide" v-reveal="100">
          <header>
            <IconSvg name="globe" />
            <h3>Web</h3>
          </header>
          <p class="web-text">
            Runs in any modern browser. Every OwpenGram server serves its own
            copy at its own address; ours is open to everyone.
          </p>
          <div class="web-actions">
            <a :href="LINKS.webApp" target="_blank" rel="noopener" class="btn btn-primary dl">
              <IconSvg name="globe" class="dl-mark" />
              <span class="dl-label">Open web.owpengram.org</span>
            </a>
            <a :href="LINKS.web" target="_blank" rel="noopener" class="btn btn-ghost dl">
              <IconSvg name="github" class="dl-mark" />
              <span class="dl-label">Source on GitHub</span>
            </a>
          </div>
        </article>

        <!-- Full width: the ready-to-run archives first, then building it from
             a clone of the repository. -->
        <article class="card plat plat--server" v-reveal="140">
          <header>
            <IconSvg name="server" />
            <h3>{{ SERVER_INSTALL.title }}</h3>
          </header>

          <h4 class="sub">Ready-to-run archive</h4>
          <p class="web-text">
            Unpack, run <code>start.sh</code> (<code>start.bat</code> on Windows) and
            finish the setup in the browser. The server, admin panel and a
            built-in PostgreSQL are all inside.
            <a :href="SERVER_RELEASE" target="_blank" rel="noopener">Release notes</a>
          </p>
          <div class="archives">
            <a
              v-for="archive in SERVER_ARCHIVES"
              :key="archive.file"
              :href="archiveUrl(archive)"
              class="btn btn-primary dl"
              :aria-label="`Download the server for ${archive.label}`"
            >
              <IconSvg :name="archive.icon" class="dl-mark" />
              <span class="dl-label">{{ archive.label }}</span>
            </a>
          </div>

          <h4 class="sub">From source</h4>
          <div class="blocks">
            <div v-for="block in SERVER_INSTALL.blocks" :key="block.label" class="block">
              <span class="block-head">
                <IconSvg :name="block.icon" /> {{ block.label }}
              </span>
              <pre class="cmd"><code v-for="line in block.commands" :key="line">{{ line }}</code></pre>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download {
  background: var(--surface-2);
  border-block: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.section-head strong { color: var(--ink); }

/* Desktop and Mobile square and side by side, the server spanning both below
   them. Four narrow columns left every card ragged inside -- one button and a
   line of text cannot fill a tall thin box. */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  align-items: stretch;
  max-width: 900px;
  margin: 0 auto;
}

.plat {
  display: flex;
  flex-direction: column;
  padding: 30px;
  /* Grid items default to min-width:auto, so an un-wrappable command would
     widen its column and push the page sideways. min-height keeps the square
     from clipping if the copy ever outgrows it. */
  min-width: 0;
  min-height: min-content;
}

.plat--server,
.plat--wide {
  grid-column: 1 / -1;
  aspect-ratio: auto;
}

.web-text {
  margin: 0 0 18px;
  color: var(--muted);
}

.web-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.web-text a { color: var(--accent-icon); }

.sub {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.archives {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 26px;
}

header {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 20px;
}

header > :deep(svg) {
  width: 22px;
  height: 22px;
  color: var(--accent-icon);
}

h3 {
  margin: 0;
  font-size: 1.1rem;
}

/* Takes the slack between the heading and the requirement line, so the buttons
   land in the middle of the tile rather than hugging the top. */
.body {
  flex: 1;
  display: grid;
  align-content: center;
  gap: 12px;
  min-width: 0;
}

/* Size sits inside the button, the way ubuntu.com does it: the number a
   visitor wants is the one they are about to commit to. */
.dl {
  width: 100%;
  justify-content: flex-start;
  gap: 12px;
  padding: 14px 16px;
}

.dl-mark {
  width: 20px;
  height: 20px;
  flex: none;
}

.dl-label { flex: 1; text-align: left; }

.dl-size {
  font-weight: 600;
  font-size: 0.82rem;
  opacity: 0.85;
  white-space: nowrap;
}

.blocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  min-width: 0;
}

.block { min-width: 0; }

.block-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.block-head :deep(svg) {
  width: 15px;
  height: 15px;
  color: var(--accent-icon);
}

.cmd {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 15px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--line);
  background: var(--surface-2);
  overflow-x: auto;
  min-width: 0;
}

.cmd code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  /* Sized so the 54-character clone URL fits in half the server card without
     a scrollbar, at the narrowest width where the two blocks sit side by side. */
  font-size: 0.76rem;
  line-height: 1.65;
  color: var(--ink);
  white-space: pre;
}

/* One column below the point where a square tile would be too small to hold
   its own copy -- and the square goes with it. */
@media (max-width: 720px) {
  .grid { grid-template-columns: 1fr; max-width: 440px; }
  .plat { aspect-ratio: auto; padding: 24px; }
  .blocks { grid-template-columns: 1fr; }
  .web-actions { grid-template-columns: 1fr; }
  .archives { grid-template-columns: 1fr; }
}
</style>
