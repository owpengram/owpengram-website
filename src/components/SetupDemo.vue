<script setup>
// The launcher's real first-run output, drawn as text rather than
// screenshotted. The password is masked as it would be in a screenshot.
</script>

<template>
  <div class="term">
    <div class="bar">
      <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="name">owpengram-server</span>
    </div>
    <pre class="out"><span class="prompt">$</span> <b>./start.sh</b>
<span class="t">05:35:36</span> owpengram-server: waiting for first-run setup
<span class="t">05:35:36</span> owpengram-admin-panel started

  <span class="ok">Ready.</span>
  Admin panel:  <span class="link">http://127.0.0.1:2600</span>
  Login:        owpengram
  Password:     <span class="t">••••••••••</span>

<span class="t">Press Ctrl+C to stop the server and the admin panel.</span>
<span class="t">05:37:56</span> starting the embedded PostgreSQL on port 15433
<span class="t">05:38:06</span> embedded PostgreSQL is ready
<span class="t">05:38:06</span> <span class="ok">owpengram-server started</span><span class="cursor" aria-hidden="true"></span></pre>
  </div>
</template>

<style scoped>
/* Dark in both themes, like a real terminal. */
.term {
  min-width: 0;
  border-radius: var(--radius);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #070c16;
  box-shadow: var(--shot-shadow);
  overflow: hidden;
}

.bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d1526;
}

.dots {
  display: flex;
  gap: 7px;
}

.dots i {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
}

.name {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6f82a3;
}

.out {
  margin: 0;
  padding: 22px 24px 26px;
  font-family: ui-monospace, 'Cascadia Code', 'JetBrains Mono', Consolas, monospace;
  font-size: 0.86rem;
  line-height: 1.75;
  color: #c9d5e6;
  overflow-x: auto;
}

.out b { color: #eef3fa; font-weight: 600; }
.prompt { color: #38bdf8; }
.t { color: #5d6f8f; }
.ok { color: #4ade80; font-weight: 700; }
.link { color: #38bdf8; }

.cursor {
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  margin-left: 6px;
  vertical-align: -0.2em;
  background: #c9d5e6;
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .cursor { animation: none; }
}

@media (max-width: 480px) {
  .out { font-size: 0.72rem; padding: 16px; }
}
</style>
