<script setup>
import { LINKS, SITE } from '../data.js'
import IconSvg from './IconSvg.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot panel">
    <div class="container foot-inner">
      <div class="brand-col">
        <span class="f-logo">
          <img src="/logo.png" alt="" width="28" height="28" />
          <strong>{{ SITE.name }}</strong>
        </span>
        <p class="pitch">{{ SITE.tagline }}</p>
        <p class="pitch small">
          Open source, self-hosted, MTProto-compatible. Built and maintained in
          the open.
        </p>
      </div>

      <div class="foot-cols">
        <div class="fcol">
          <h4>Download</h4>
          <a href="#download">All downloads</a>
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener">
            <IconSvg name="desktop" /> Windows &amp; Linux
          </a>
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener">
            <IconSvg name="phone" /> Android
          </a>
          <a :href="LINKS.server" target="_blank" rel="noopener">
            <IconSvg name="server" /> Server
          </a>
        </div>

        <!-- Internal anchors, so the sections are reachable from the bottom of
             a long page without scrolling back up to the navbar. -->
        <div class="fcol">
          <h4>Learn</h4>
          <a href="#available">What works today</a>
          <a href="#security">Security &amp; privacy</a>
          <a href="#compare">How it compares</a>
          <a href="#faq">FAQ</a>
        </div>

        <div class="fcol">
          <h4>Community</h4>
          <a :href="LINKS.telegramChannel" target="_blank" rel="noopener">
            <IconSvg name="telegram" /> Channel
          </a>
          <a :href="LINKS.telegramChat" target="_blank" rel="noopener">
            <IconSvg name="telegram" /> Chat
          </a>
          <a :href="LINKS.org" target="_blank" rel="noopener">
            <IconSvg name="github" /> GitHub
          </a>
          <a :href="`${LINKS.org}/owpengram-site/issues`" target="_blank" rel="noopener">
            Report a bug
          </a>
        </div>

        <div class="fcol">
          <h4>Work with us</h4>
          <a href="#services">Setup &amp; support</a>
          <a :href="`mailto:${LINKS.contactEmail}`">
            <IconSvg name="mail" /> {{ LINKS.contactEmail }}
          </a>
          <a :href="LINKS.patreon" target="_blank" rel="noopener">
            <IconSvg name="patreon" /> Patreon
          </a>
        </div>
      </div>
    </div>

    <div class="container bottom">
      <span>© {{ year }} {{ SITE.name }} · {{ SITE.domain }}</span>
      <span class="licences">Server Apache-2.0 · Clients GPL</span>
    </div>

    <!-- Says the quiet part out loud. The clients are forks of Telegram's open
         source apps, which makes this the honest and the safe thing to print. -->
    <div class="container disclaimer">
      <p>
        OwpenGram is an independent project and is not affiliated with,
        endorsed by, or connected to Telegram Messenger Inc. The clients are
        forks of Telegram's open-source apps; “Telegram” is a trademark of its
        respective owner.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding: 64px 0 24px;
  border-top: 1px solid var(--panel-line);
}

.foot-inner {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) 2.4fr;
  gap: 48px;
  align-items: start;
}

.f-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.f-logo img { width: 28px; height: 28px; }

.f-logo strong {
  color: var(--panel-ink);
  font-size: 1.05rem;
}

.pitch {
  margin: 14px 0 0;
  color: var(--panel-body);
  font-size: 0.92rem;
  line-height: 1.6;
  max-width: 34ch;
}

.pitch.small {
  margin-top: 8px;
  font-size: 0.84rem;
  opacity: 0.75;
}

.foot-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.fcol h4 {
  color: var(--panel-ink);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 12px;
  opacity: 0.55;
}

.fcol a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--panel-body);
  padding: 6px 0;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.4;
  transition: color 0.15s ease;
  overflow-wrap: anywhere;
}

.fcol a:hover {
  color: var(--panel-accent);
}

.fcol :deep(svg) {
  width: 16px;
  height: 16px;
  flex: none;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 44px;
  padding-top: 20px;
  border-top: 1px solid var(--panel-line);
  font-size: 0.82rem;
  color: var(--panel-body);
}

.licences { opacity: 0.8; }

.disclaimer p {
  margin: 14px 0 0;
  font-size: 0.76rem;
  line-height: 1.65;
  color: var(--panel-body);
  opacity: 0.6;
  max-width: 90ch;
}

@media (max-width: 1000px) {
  .foot-inner { grid-template-columns: 1fr; gap: 36px; }
}

@media (max-width: 760px) {
  .foot-cols { grid-template-columns: 1fr 1fr; gap: 24px 20px; }
}

@media (max-width: 420px) {
  .foot-cols { grid-template-columns: 1fr; }
  .foot { padding: 44px 0 20px; }
}
</style>
