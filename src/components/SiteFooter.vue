<script setup>
import { LINKS, SITE } from '../data.js'
import IconSvg from './IconSvg.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot panel">
    <div class="container foot-inner">
      <div class="top">
        <span class="f-logo">
          <img src="/logo.png" alt="OwpenGram" />
          <strong>{{ SITE.name }}</strong>
        </span>
      </div>
      <div class="foot-cols">
        <div class="fcol">
          <h4>Contact</h4>
          <a :href="`mailto:${LINKS.contactEmail}`">
            <IconSvg name="mail" /> Email
          </a>
          <a :href="LINKS.telegramChannel" target="_blank" rel="noopener">
            <IconSvg name="telegram" /> Telegram
          </a>
          <a :href="LINKS.org" target="_blank" rel="noopener">
            <IconSvg name="github" /> GitHub
          </a>
        </div>
        <div class="fcol">
          <h4>Products</h4>
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener">
            <IconSvg name="desktop" /> Desktop client
          </a>
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener">
            <IconSvg name="phone" /> Android client
          </a>
          <a :href="LINKS.server" target="_blank" rel="noopener">
            <IconSvg name="server" /> Server
          </a>
        </div>
        <div class="fcol">
          <h4>Support us</h4>
          <a :href="LINKS.patreon" target="_blank" rel="noopener">
            <IconSvg name="patreon" /> Patreon
          </a>
        </div>
      </div>
    </div>

    <div class="container bottom">
      <span>© {{ year }} {{ SITE.name }} · {{ SITE.domain }}</span>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding: 60px 0 24px;
  border-top: 1px solid var(--panel-line);
}

.top {
  margin-bottom: 18px;
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

.foot-cols {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
}

.fcol h4 {
  color: var(--panel-ink);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 14px;
  opacity: 0.6;
}

.fcol a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--panel-body);
  padding: 6px 0;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.15s ease;
}

.fcol a:hover {
  color: var(--panel-accent);
}

.fcol :deep(svg) {
  width: 17px;
  height: 17px;
  flex: none;
}

@media (max-width: 660px) {
  .foot-cols { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 420px) {
  .foot-cols { grid-template-columns: 1fr; }
  .foot { padding: 40px 0 20px; }
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--panel-line);
  font-size: 0.82rem;
  color: var(--panel-body);
}

</style>
