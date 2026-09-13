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
  { icon: '💬', text: 'Private chats, groups, supergroups, channels & forum topics' },
  { icon: '📞', text: 'Voice & video calls — 1-to-1 and group, with screen sharing' },
  { icon: '📡', text: 'Live streaming into channels — RTMP ingest from OBS' },
  { icon: '🖼️', text: 'Media & files — photos, videos, documents, stickers, reactions' },
  { icon: '💾', text: 'Media on local disk or S3/MinIO object storage' },
  { icon: '✉️', text: 'Email login & email-only sign-up — no phone number needed' },
  { icon: '🔐', text: 'Passkey sign-in and a self-hosted Log in with Telegram provider' },
  { icon: '🤖', text: 'Bots, mini apps and a Bot API gateway' },
  { icon: '🌐', text: 'Message translation and AI-assisted compose' },
  { icon: '📇', text: 'Contacts sync, chat folders, public links' },
  { icon: '🏷️', text: 'Collectible usernames and account verification' },
  { icon: '📢', text: 'Broadcasts — announce to every user, or a picked list' },
  { icon: '🚀', text: 'A public OwpenGram server, ready in every client — nothing to set up' },
  { icon: '🔀', text: 'Multi-server accounts in one app' },
  { icon: '🔎', text: 'Add a server by typing its address — the client fetches the rest' },
  { icon: '🔑', text: 'Per-server encryption keys' },
  { icon: '🖥️', text: 'Self-hosted Go server — one command to install, then a browser wizard' },
  { icon: '👥', text: 'Admin panel with named operators and scoped permissions' },
  { icon: '🗄️', text: 'Storage management — usage breakdown and retention rules' },
  { icon: '💻', text: 'Windows, Linux & Android clients' },
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
  serverAdminPanel: {
    src: `${S}/server_admin_panel.png`,
    alt: 'OwpenGram server — admin panel overview with accounts, content and server health',
    caption: 'Admin panel',
    aspect: '1920 / 927',
    variant: 'wide',
  },
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ = [
  {
    q: 'What is OwpenGram?',
    a: 'OwpenGram is an open-source, self-hosted MTProto-compatible messenger. It includes Windows, Linux and Android clients, plus a self-hosted Go server you run on your own hardware.',
  },
  {
    q: 'Is it compatible with Telegram?',
    a: 'Yes. OwpenGram uses the MTProto protocol, so you can connect to the official Telegram network, your own OwpenGram server, or any compatible third-party node — all from the same app. The server speaks API layers 225 through 229 and admits each client on the exact layer it announces, so an older build keeps working after the server moves forward.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Native clients for Windows, Linux and Android; macOS and a web client are planned. The server is a single Go binary that runs directly on Linux, Windows, or macOS — it only uses Docker to run its PostgreSQL and Redis dependencies, not the server itself.',
  },
  {
    q: 'How do I install the Linux client?',
    a: 'Two files in the desktop Releases tab, both from the same portable build. The .deb package installs OwpenGram as a normal app on Ubuntu 18.04+ and Debian 10+. The other is the OwpenGram binary itself, not an installer: make it executable and run it on any modern distro, since everything it needs is bundled. An install-linux.sh script in the repo adds the menu entry and icons under your home directory if you want them.',
  },
  {
    q: 'Can I try it without setting up a server?',
    a: 'Yes — that is the fastest way in. We run a public OwpenGram server, and it is already built into both clients: install the app, pick OwpenGram on the server-selection screen, and sign in. No address to type, no key to paste, no Docker. When you want your own server later, you add it in the same app and keep both accounts side by side.',
  },
  {
    q: 'Can I run my own server?',
    a: 'Yes, and it takes one command. Clone the repository and run owpengram-server.sh, or owpengram-server.bat on Windows. The launcher installs whatever is missing — Go, Python, Docker, OpenSSL — brings up the database, builds and starts everything, then hands you a browser setup wizard for the server name, public address and your admin account. Nothing has to be edited by hand.',
  },
  {
    q: 'How do I connect the app to my server?',
    a: 'Type its address. On the server-selection screen choose Add server and enter host:port — the client asks the server for its public key, data-centre id, name and icon, and fills in the rest by itself. No key files to copy around. Operators can also hand out a link that pre-fills the address.',
  },
  {
    q: 'Do I need a phone number to sign up?',
    a: 'Not necessarily. Self-hosted servers can enable email-only sign-up: you register and log in with just an email address, no phone number at all. Regular phone-number sign-up works too.',
  },
  {
    q: 'Is it really free and open source?',
    a: 'Yes. All OwpenGram code is published on GitHub — the server under Apache-2.0, the clients under the GPL they inherit from the apps they are forked from. You can audit, modify, and redistribute it. There are no paid tiers or hidden features.',
  },
  {
    q: 'How is this different from Telegram?',
    a: 'Telegram is a centralized service. OwpenGram gives you the same protocol and a compatible client, but you control the server. You can run it privately, modify it, and stay independent of any third party.',
  },
  {
    q: 'Can I use multiple servers at once?',
    a: 'Yes. The OwpenGram clients let you add multiple accounts, each connected to a different server — official Telegram, your own instance, or a friend\'s node — all in one app, up to 50 accounts in total. Data for each account is scoped to the server it came from, so two servers never bleed into each other.',
  },
  {
    q: 'How do I get help or report a bug?',
    a: 'Join our Telegram chat or channel. For bug reports, open an issue on the relevant GitHub repository. You can also email us directly.',
  },
]

export const SHOWCASE = [
  {
    id: 'messaging',
    eyebrow: 'Product',
    title: 'Everything a modern messenger does',
    text: 'Private chats, groups, supergroups, channels and forum topics — with media, replies, reactions, folders, bots and translation. Voice and video calls too, one-to-one or group, with screen sharing and live streams. The same app on Windows, Linux and Android.',
    points: [
      'Chats, groups, channels & topics',
      'Media, files, stickers & reactions',
      'Voice, video & group calls',
    ],
    pairs: [
      { desktop: 'desktopChat1', phone: 'androidChat1' },
      { desktop: 'desktopCall', phone: 'androidCall' },
    ],
  },
]
