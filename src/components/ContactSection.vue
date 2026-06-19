<script setup>
import { ref } from 'vue'
import { LINKS } from '../data.js'

const email = ref('')
const message = ref('')
const honeypot = ref('')
const status = ref('idle')

const mailto = `mailto:${LINKS.contactEmail}`

async function submit(event) {
  event.preventDefault()
  if (honeypot.value) return

  status.value = 'sending'

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(LINKS.contactEmail)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          message: message.value,
          _subject: 'OwpenGram site — contact form',
          _template: 'table',
        }),
      },
    )

    if (!response.ok) throw new Error('send failed')

    status.value = 'success'
    email.value = ''
    message.value = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="contact-card panel" v-reveal>
        <div class="card-copy">
          <span class="eyebrow eyebrow--panel">Contact</span>
          <h2>Get in touch</h2>
          <p>
            Write to <a :href="mailto" class="card-mail">{{ LINKS.contactEmail }}</a>
            or join the <a :href="LINKS.telegramChat" target="_blank" rel="noopener">Telegram chat</a>.
          </p>
        </div>

        <form class="card-form" @submit="submit">
          <div class="row">
            <input
              v-model="email"
              type="email"
              placeholder="Your email"
              autocomplete="email"
              required
              :disabled="status === 'sending'"
            />
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="status === 'sending'"
            >
              {{ status === 'sending' ? 'Sending…' : 'Send' }}
            </button>
            <a :href="mailto" class="btn btn-ghost card-mailto">Email</a>
          </div>

          <textarea
            v-model="message"
            placeholder="Message (optional)"
            rows="2"
            :disabled="status === 'sending'"
          />

          <input
            v-model="honeypot"
            type="text"
            name="_honey"
            class="honeypot"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <p v-if="status === 'success'" class="feedback feedback--ok" role="status">
            Sent. We'll reply to your email.
          </p>
          <p v-else-if="status === 'error'" class="feedback feedback--err" role="alert">
            Failed. Email <a :href="mailto">{{ LINKS.contactEmail }}</a> directly.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: center;
  padding: 40px 44px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--panel-line);
}

h2 {
  color: var(--panel-ink);
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  margin-bottom: 10px;
}

.card-copy p {
  color: var(--panel-body);
  line-height: 1.7;
}

.card-mail {
  color: var(--accent-bright);
  font-weight: 600;
}

.card-mail:hover {
  opacity: 0.85;
}

.card-copy a[href*="t.me"] {
  color: var(--accent-bright);
  font-weight: 600;
}

.card-form {
  display: grid;
  gap: 10px;
}

.row {
  display: flex;
  gap: 10px;
}

.row input {
  flex: 1;
  font: inherit;
  color: var(--panel-ink);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--panel-line);
  border-radius: var(--radius-sm);
  padding: 11px 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.row input:focus {
  outline: none;
  border-color: var(--accent-bright);
  box-shadow: 0 0 0 3px rgba(125, 211, 252, 0.15);
}

.row input:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.row .btn {
  flex: none;
  white-space: nowrap;
}

.card-mailto {
  font-size: 0.86rem;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
}

textarea {
  width: 100%;
  font: inherit;
  color: var(--panel-ink);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--panel-line);
  border-radius: var(--radius-sm);
  padding: 11px 14px;
  resize: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

textarea:focus {
  outline: none;
  border-color: var(--accent-bright);
  box-shadow: 0 0 0 3px rgba(125, 211, 252, 0.15);
}

textarea:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.feedback {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
}

.feedback--ok {
  color: var(--accent-bright);
}

.feedback--err {
  color: #f87171;
}

.feedback--err a {
  color: inherit;
  text-decoration: underline;
}

@media (max-width: 820px) {
section { scroll-margin-top: 80px; }

.contact-card {
    grid-template-columns: 1fr;
    padding: 32px;
  }
}
</style>
