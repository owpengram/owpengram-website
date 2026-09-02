// ─── Site copy & links ───────────────────────────────────────────────────────

export const SITE = {
  name: 'OwpenGram',
  domain: 'owpengram.org',
  tagline: 'Your messenger. Your server. Your rules.',
}

export const LINKS = {
  org: 'https://github.com/owpengram',
  server: 'https://github.com/owpengram/owpengram-server',
  android: 'https://github.com/owpengram/owpengram-android-client',
  desktop: 'https://github.com/owpengram/owpengram-desktop-client',
  androidRelease: 'https://github.com/owpengram/owpengram-android-client/releases/latest',
  desktopRelease: 'https://github.com/owpengram/owpengram-desktop-client/releases/latest',
  telegramChannel: 'https://t.me/owpengram',
  telegramChat: 'https://t.me/+nO84bf4m2-9lYzky',
  patreon: 'https://www.patreon.com/cw/owpengram',
  contactEmail: 'owpengram@gmail.com',
}

// ─── What works today — edit here when shipping new capabilities ─────────────

export const AVAILABLE = [
  { icon: '💬', text: 'Private chats, groups, supergroups & channels' },
  { icon: '📞', text: 'Voice & video calls (1-to-1)' },
  { icon: '🖼️', text: 'Media & files — photos, videos, documents, stickers, reactions' },
  { icon: '✉️', text: 'Email login & email-only sign-up — no phone number needed' },
  { icon: '🤖', text: 'Bots and mini apps' },
  { icon: '📇', text: 'Contacts sync, chat folders, public links' },
  { icon: '🔀', text: 'Multi-server accounts in one app' },
  { icon: '🖥️', text: 'Self-hosted Go server — one binary, your database' },
  { icon: '🔑', text: 'Per-server encryption keys' },
  { icon: '🌐', text: 'Windows & Android clients' },
]

// ─── Screenshots ─────────────────────────────────────────────────────────────

const S = '/screenshots'

export const SCREENSHOTS = {
  desktopChatList: {
    src: `${S}/desktop_chat_list.png`,
    alt: 'OwpenGram Windows client — chat list',
    caption: 'Windows',
    aspect: '827 / 756',
    variant: 'desktop',
  },
  androidChatList: {
    src: `${S}/android_chat_list.jpg`,
    alt: 'OwpenGram Android — chat list',
    caption: 'Android',
    aspect: '572 / 1280',
    variant: 'phone',
  },
  desktopChat1: {
    src: `${S}/desktop_chat_window_1.png`,
    alt: 'OwpenGram Windows — conversation',
    caption: 'Windows',
    aspect: '827 / 756',
    variant: 'desktop',
  },
  androidChat1: {
    src: `${S}/android_chat_window_1.jpg`,
    alt: 'OwpenGram Android — conversation',
    caption: 'Android',
    aspect: '572 / 1280',
    variant: 'phone',
  },
  desktopChat2: {
    src: `${S}/desktop_chat_window_2.png`,
    alt: 'OwpenGram Windows — media in chat',
    caption: 'Windows',
    aspect: '827 / 756',
    variant: 'desktop',
  },
  androidChat2: {
    src: `${S}/android_chat_window_2.jpg`,
    alt: 'OwpenGram Android — media in chat',
    caption: 'Android',
    aspect: '572 / 1280',
    variant: 'phone',
  },
  desktopChooseServer: {
    src: `${S}/desktop_choose_server.png`,
    alt: 'OwpenGram Windows — choose server at sign-in',
    caption: 'Windows',
    aspect: '827 / 756',
    variant: 'desktop',
  },
  androidChooseServer: {
    src: `${S}/android_choose_server.jpg`,
    alt: 'OwpenGram Android — choose server',
    caption: 'Android',
    aspect: '591 / 1280',
    variant: 'phone',
  },
  desktopMultiserver: {
    src: `${S}/desktop_multiserver_accounts.png`,
    alt: 'OwpenGram Windows — multiple accounts on different servers',
    caption: 'Windows',
    aspect: '827 / 756',
    variant: 'desktop',
  },
  androidMultiserver: {
    src: `${S}/android_multiserver_accounts.jpg`,
    alt: 'OwpenGram Android — multiple accounts',
    caption: 'Android',
    aspect: '591 / 1280',
    variant: 'phone',
  },
  desktopCall: {
    src: `${S}/desktop_call.png`,
    alt: 'OwpenGram Windows — voice call',
    caption: 'Windows',
    aspect: '712 / 780',
    variant: 'desktop',
  },
  androidCall: {
    src: `${S}/android_call.jpg`,
    alt: 'OwpenGram Android — voice call',
    caption: 'Android',
    aspect: '591 / 1280',
    variant: 'phone',
  },
  serverDocker: {
    src: `${S}/server_docker_and_build_script.png`,
    alt: 'OwpenGram server — Docker deployment',
    caption: 'Self-hosted server',
    aspect: '1618 / 884',
    variant: 'wide',
  },
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ = [
  {
    q: 'What is OwpenGram?',
    a: 'OwpenGram is an open-source, self-hosted MTProto-compatible messenger. It includes Windows and Android clients, plus a self-hosted Go server you run on your own hardware.',
  },
  {
    q: 'Is it compatible with Telegram?',
    a: 'Yes. OwpenGram uses the MTProto protocol, so you can connect to the official Telegram network, your own OwpenGram server, or any compatible third-party node — all from the same app.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Currently we ship native clients for Windows and Android. The server is a single Go binary that runs directly on Linux, Windows, or macOS — it only uses Docker to run its PostgreSQL and Redis dependencies, not the server itself.',
  },
  {
    q: 'Can I run my own server?',
    a: 'Absolutely. Clone the repository, start PostgreSQL and Redis with one Docker Compose command, then build and run the server binary — you will have your own private messaging server on your hardware in a few minutes.',
  },
  {
    q: 'Do I need a phone number to sign up?',
    a: 'Not necessarily. Self-hosted servers can enable email-only sign-up: you register and log in with just an email address, no phone number at all. Regular phone-number sign-up works too.',
  },
  {
    q: 'Is it really free and open source?',
    a: 'Yes. All OwpenGram code is published on GitHub under permissive licenses. You can audit, modify, and redistribute it. There are no paid tiers or hidden features.',
  },
  {
    q: 'How is this different from Telegram?',
    a: 'Telegram is a centralized service. OwpenGram gives you the same protocol and a compatible client, but you control the server. You can run it privately, modify it, and stay independent of any third party.',
  },
  {
    q: 'Can I use multiple servers at once?',
    a: 'Yes. The OwpenGram clients let you add multiple accounts, each connected to a different server — official Telegram, your own instance, or a friend\'s node — all in one app.',
  },
  {
    q: 'How do I get help or report a bug?',
    a: 'Join our Telegram chat or channel. For bug reports, open an issue on the relevant GitHub repository. You can also email us directly.',
  },
]

export const SHOWCASE = [
  {
    id: 'messaging',
    eyebrow: 'Messaging',
    title: 'Chats, groups and media — already shipping',
    text: 'Full conversations on Windows and Android with the same flows you expect from a modern messenger.',
    points: ['Private chats & groups', 'Photos, video & files', 'Contacts sync'],
    desktop: 'desktopChat1',
    phone: 'androidChat1',
  },
  {
    id: 'calls',
    eyebrow: 'Real-time',
    title: 'Voice & video calls',
    text: '1-to-1 calls on Windows and Android — works globally.',
    points: ['Windows & Android', 'Voice & video', 'Works globally'],
    desktop: 'desktopCall',
    phone: 'androidCall',
  },
]


