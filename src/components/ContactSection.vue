<script setup>
import { ref } from 'vue'
import { LINKS } from '../data.js'

const name = ref('')
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
          name: name.value,
          email: email.value,
          message: message.value,
          _subject: 'OwpenGram site — contact form',
          _template: 'table',
        }),
      },
    )

    if (!response.ok) throw new Error('send failed')

    status.value = 'success'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Contact</span>
        <h2>Get in touch</h2>
        <p>
          Questions about self-hosting, partnerships, or the project —
          send a message or email us directly.
        </p>
      </div>

      <div class="contact-grid">
        <aside class="aside" v-reveal>
          <p class="lead">
            We read every message. For faster community help, you can also
            use the Telegram chat.
          </p>
          <a :href="mailto" class="mail">{{ LINKS.contactEmail }}</a>
          <a
            :href="LINKS.telegramChat"
            target="_blank"
            rel="noopener"
            class="chat"
          >
            Telegram chat →
          </a>
        </aside>

        <form class="form card" v-reveal="60" @submit="submit">
          <label class="field">
            <span>Name</span>
            <input
              v-model="name"
              type="text"
              name="name"
              autocomplete="name"
              required
              :disabled="status === 'sending'"
            />
          </label>

          <label class="field">
            <span>Email</span>
            <input
              v-model="email"
              type="email"
              name="email"
              autocomplete="email"
              required
              :disabled="status === 'sending'"
            />
          </label>

          <label class="field">
            <span>Message</span>
            <textarea
              v-model="message"
              name="message"
              rows="5"
              required
              :disabled="status === 'sending'"
            />
          </label>

          <input
            v-model="honeypot"
            type="text"
            name="_honey"
            class="honeypot"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <div class="actions">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="status === 'sending'"
            >
              {{ status === 'sending' ? 'Sending…' : 'Send message' }}
            </button>
          </div>

          <p v-if="status === 'success'" class="feedback feedback--ok" role="status">
            Message sent. We will get back to you at the email you provided.
          </p>
          <p v-else-if="status === 'error'" class="feedback feedback--err" role="alert">
            Could not send right now. Please email
            <a :href="mailto">{{ LINKS.contactEmail }}</a>
            directly.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-top: 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 28px;
  align-items: start;
}

.aside {
  padding: 8px 4px 0;
}

.lead {
  color: var(--muted);
  margin: 0 0 18px;
  line-height: 1.75;
  max-width: 36ch;
}

.mail {
  display: block;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 14px;
  word-break: break-all;
}

.mail:hover {
  color: var(--accent-bright);
}

.chat {
  display: inline-block;
  font-weight: 600;
  font-size: 0.92rem;
}

.form {
  display: grid;
  gap: 16px;
}

.field {
  display: grid;
  gap: 8px;
}

.field span {
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--ink);
}

.field input,
.field textarea {
  width: 100%;
  font: inherit;
  color: var(--ink);
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  resize: vertical;
  min-height: 0;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.field input:disabled,
.field textarea:disabled {
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

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.feedback {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.6;
}

.feedback--ok {
  color: var(--accent);
}

.feedback--err {
  color: #f87171;
}

.feedback--err a {
  color: inherit;
  text-decoration: underline;
}

@media (max-width: 820px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
