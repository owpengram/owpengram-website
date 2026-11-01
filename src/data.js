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

// ─── Paid services ───────────────────────────────────────────────────
// Only time is for sale here, never features. Everything the software can do
// stays in the free build -- see the note rendered under the packages.

export const SERVICES = {
  setup: {
    name: 'Setup',
    price: '$550',
    unit: 'one-time',
    lead: 'A production-ready server on infrastructure you own.',
    items: [
      'Install, domain, TLS and firewall',
      'Server identity and public address configured',
      'Operator accounts with scoped permissions',
      'Media retention policies',
      'Backups, with a restore that gets tested',
      'A handover document written for your install, plus a walkthrough call',
      '14 days of support for setup questions',
    ],
    note: 'Chats, groups, channels, calls, bots and live streams work out of the box. Those are defaults, not extras.',
  },

  addons: [
    {
      name: 'Email sign-in and sign-up',
      price: '$150',
      text: 'SMTP wired up, and delivery verified end to end.',
    },
    {
      name: 'Real phone codes',
      price: '$350',
      text: 'A bridge to your SMS provider, so the login code stops being the development one.',
    },
    {
      name: 'Server migration',
      price: '$350',
      text: 'Database, media, RSA key and identity moved across without your users noticing.',
    },
  ],

  support: [
    {
      name: 'Office hours',
      price: '$99',
      unit: '/mo',
      text: 'Email or Telegram, answered within a business day. Updates applied on request.',
    },
    {
      name: 'Priority',
      price: '$349',
      unit: '/mo',
      text: 'Two business hours to first response, 9:00\u201319:00 Mon\u2013Fri. Proactive updates and monitoring.',
      featured: true,
    },
    {
      name: 'Critical',
      price: 'from $900',
      unit: '/mo',
      text: 'Adds out-of-hours escalation for outages, and a named contact.',
    },
  ],

  // The Patreon ask lives inside the services block rather than in a section
  // of its own: two requests for money back to back read badly, and side by
  // side they become a fork -- hire me, or support the work.
  patreon: {
    title: 'Not looking to hire anyone?',
    text: 'OwpenGram is free and always will be, built in personal time. If it is useful to you, a pledge buys more of it.',
  },

  custom: {
    price: 'from $2500',
    text: 'Branded clients, or feature work on the server and the apps. Keeping a branded fork current on new upstream releases starts at $300 a month.',
  },
};

// ─── Capabilities, grouped ───────────────────────────────────────────────────
// The single source of truth for "does the product do X". Deliberately one
// list and not two: a flat duplicate of this used to live above it, and two
// feature lists always drift apart.

export const CAPABILITY_GROUPS = [
  {
    icon: 'chat',
    title: 'Messaging',
    text: 'Everything you expect from a modern messenger, on every client.',
    items: [
      'Private chats, groups, supergroups, channels and forum topics',
      'Photos, video, documents, stickers, reactions and replies',
      'Chat folders, contact sync, public links',
      'Message translation and AI-assisted compose',
      'Collectible usernames and account verification',
    ],
  },
  {
    icon: 'call',
    title: 'Voice, video and live',
    text: 'Calls and broadcasts run on the server you choose, not a third party.',
    items: [
      'One-to-one voice and video calls',
      'Group calls with screen sharing',
      'Live streaming into channels, over RTMP from OBS',
      'Bots, mini apps and a Bot API gateway',
    ],
  },
  {
    icon: 'network',
    title: 'Accounts and networks',
    text: 'One app, as many networks as you need — kept strictly apart.',
    items: [
      'A public OwpenGram server, already in every client',
      'Up to 50 accounts, each on its own server',
      'Add a server by typing its address — the client fetches the rest',
      'Per-server encryption keys and per-server data',
      'Email login, email-only sign-up, and passkeys',
      'A self-hosted "Log in with Telegram" provider',
    ],
  },
  {
    icon: 'server',
    title: 'Run it yourself',
    text: 'One command to install, then a browser panel for everything after.',
    items: [
      'A single Go binary — Linux, Windows or macOS',
      'Browser setup wizard on first run',
      'Admin panel with named operators and scoped permissions',
      'Media on local disk or S3/MinIO, with retention rules',
      'Broadcasts to every user or a picked list',
    ],
  },
]

// ─── Security ────────────────────────────────────────────────────────────────
// Every claim here is checkable in the repositories. Keep it that way: if a
// line cannot be pointed at a file, it does not belong on this list.

export const SECURITY = [
  {
    icon: 'lock',
    title: 'MTProto 2.0 on the wire',
    text: 'Every client-to-server connection is encrypted with MTProto 2.0 — the same transport the official apps use, because the clients are forks of them.',
  },
  {
    icon: 'shield',
    title: 'Secret chats stay end-to-end',
    text: 'Secret chats are encrypted between the two devices. The server passes the ciphertext along and cannot read it, whether that server is ours or yours.',
  },
  {
    icon: 'call',
    title: 'Calls key themselves',
    text: 'One-to-one voice and video agree their key with a Diffie-Hellman exchange between the two devices, and verify it with the usual emoji fingerprint.',
  },
  {
    icon: 'server',
    title: 'Your data sits on your hardware',
    text: 'Messages, media and accounts live in your PostgreSQL and your storage — local disk or an S3 bucket you own. No copy goes anywhere else.',
  },
  {
    icon: 'key',
    title: 'A key per server',
    text: 'Each server has its own RSA identity, which the client fetches when you add it. Accounts are scoped to the server they came from, so two servers never share state.',
  },
  {
    icon: 'code',
    title: 'Auditable, all of it',
    text: 'Apache-2.0 for the server, GPL for the clients, every line on GitHub. Nothing is withheld for a paid build, so there is no closed part left to trust.',
  },
]

// ─── How it compares ─────────────────────────────────────────────────────────
// Written to be fair rather than flattering: Matrix and Rocket.Chat are good
// software aimed at a different problem, and the note under the table says so.
// If a cell is arguable, it is marked partial with the reason, never a bare no.

export const COMPARE = {
  columns: ['OwpenGram', 'Telegram', 'Matrix + Element', 'Rocket.Chat'],
  rows: [
    {
      label: 'Run the server yourself',
      values: ['yes', 'no', 'yes', 'yes'],
    },
    {
      label: 'Reach the official Telegram network from the same app',
      values: ['yes', 'yes', 'no', 'no'],
    },
    {
      label: 'Interface of the official Telegram apps',
      values: ['yes', 'yes', 'no', 'no'],
      note: 'The OwpenGram clients are forks of Telegram Desktop and Telegram for Android.',
    },
    {
      label: 'Accounts on several different servers, side by side',
      values: ['yes', 'no', 'partial', 'partial'],
      note: 'Element and the Rocket.Chat desktop app can hold several workspaces; support varies by client.',
    },
    {
      label: 'Group calls with screen sharing',
      values: ['yes', 'yes', 'yes', 'yes'],
    },
    {
      label: 'Live streaming into channels over RTMP',
      values: ['yes', 'yes', 'no', 'no'],
    },
    {
      label: 'Telegram Bot API',
      values: ['yes', 'yes', 'no', 'no'],
      note: 'Matrix and Rocket.Chat have their own bot interfaces, not this one.',
    },
    {
      label: 'Sign up without a phone number',
      values: ['yes', 'no', 'yes', 'yes'],
    },
    {
      label: 'Open source, server included',
      values: ['yes', 'no', 'yes', 'partial'],
      note: 'Telegram publishes its clients but not its server. Rocket.Chat keeps part of its feature set for paid editions.',
    },
  ],
}

// ─── Release facts ───────────────────────────────────────────────────────────
// Fallback for the strip under the hero when GitHub cannot be reached. Update
// when a release goes out; the live numbers overwrite these when the API
// answers.

export const RELEASE = {
  tag: 'O8',
  date: '2026-11-01',
  repos: ['owpengram-server', 'owpengram-desktop-client', 'owpengram-android-client'],
}

// ─── Downloads ───────────────────────────────────────────────────────────────
// Shape borrowed from ubuntu.com's download page: name the file and print its
// size next to the button. `asset` matches the file name on the GitHub release,
// which is where the live size comes from -- `size` here is only the fallback
// for when the API cannot be reached.

export const DOWNLOADS = [
  {
    id: 'desktop',
    icon: 'desktop',
    title: 'Desktop',
    repo: 'owpengram-desktop-client',
    files: [
      { asset: 'OwpenGram.exe', label: 'Windows', icon: 'windows', size: 228_500_000 },
      // Linux (OwpenGram, OwpenGram.deb) is back once the current release ships a Linux build
    ],
  },
  {
    id: 'mobile',
    icon: 'phone',
    title: 'Mobile',
    repo: 'owpengram-android-client',
    files: [
      { asset: 'OwpenGram.apk', label: 'Android', icon: 'android', size: 73_300_000 },
    ],
  },
]

// Not a download: the server is cloned and launched, so it gets the commands
// for each host instead of a button.
export const SERVER_INSTALL = {
  title: 'Server',
  blocks: [
    {
      label: 'Linux',
      icon: 'linux',
      commands: [
        'git clone https://github.com/owpengram/owpengram-server',
        'cd owpengram-server',
        './owpengram-server.sh',
      ],
    },
    {
      label: 'Windows',
      icon: 'windows',
      commands: [
        'git clone https://github.com/owpengram/owpengram-server',
        'cd owpengram-server',
        'owpengram-server.bat',
      ],
    },
  ],
}
