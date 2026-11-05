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
  web: 'https://github.com/owpengram/owpengram-web-client',
  // Our public server's own copy of the web client: nothing to install.
  webApp: 'https://web.owpengram.org',
  giftPacks: 'https://github.com/owpengram/owpengram-giftpacks',
  giftPacksRelease: 'https://github.com/owpengram/owpengram-giftpacks/releases/latest',
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
  desktopChat: {
    src: `${S}/desktop_chat.webp`,
    alt: 'OwpenGram Windows client — chat list and a conversation',
    caption: 'Windows',
    aspect: '1169 / 756',
    variant: 'desktop',
  },
  androidChats: {
    src: `${S}/android_chats.webp`,
    alt: 'OwpenGram Android — chat list',
    caption: 'Android',
    aspect: '591 / 1280',
    variant: 'phone',
  },
  webChat: {
    src: `${S}/web_chat.webp`,
    alt: 'OwpenGram web client in the browser — chat list and a group',
    caption: 'Web',
    aspect: '1279 / 756',
    variant: 'desktop',
  },
  desktopCall: {
    src: `${S}/desktop_call.webp`,
    alt: 'OwpenGram Windows — voice call with screencast, video and add-people controls',
    caption: 'Voice and video calls',
    aspect: '1019 / 784',
    variant: 'desktop',
  },
  desktopServers: {
    src: `${S}/desktop_servers.webp`,
    alt: 'OwpenGram Windows — server selection with Telegram, OwpenGram and a home server',
    caption: 'Windows',
    aspect: '1051 / 756',
    variant: 'desktop',
  },
  androidServers: {
    src: `${S}/android_servers.webp`,
    alt: 'OwpenGram Android — choose a server',
    caption: 'Android',
    aspect: '591 / 1280',
    variant: 'phone',
  },
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ = [
  {
    q: 'What is OwpenGram?',
    a: 'OwpenGram is an open-source, self-hosted alternative to Telegram: a Telegram-compatible (MTProto) messenger server you run on your own hardware, plus Windows, Linux, Android and web clients. The name is Own + Open + Gram.',
  },
  {
    q: 'Is it compatible with Telegram?',
    a: 'Yes. OwpenGram uses the MTProto protocol, so you can connect to the official Telegram network, your own OwpenGram server, or any compatible third-party node — all from the same app. The server speaks API layers 225 through 232 and admits each client on the exact layer it announces, so an older build keeps working after the server moves forward.',
  },
  {
    q: 'What platforms are supported?',
    a: 'Native clients for Windows, Linux and Android 6.0+, and a web client that runs in any browser (ours is at web.owpengram.org); macOS is planned. The server ships as ready-to-run archives for Linux, Windows and macOS, on x64 and ARM, with PostgreSQL built in. It does not use Docker.',
  },
  {
    q: 'Is there a web version?',
    a: 'Yes. The OwpenGram web client runs in any modern browser with nothing to install. Our public server’s copy is at web.owpengram.org, and every OwpenGram server carries its own copy and serves it at its own address. Unlike the desktop and Android apps it talks to one server: the one it was opened from. The source is in the owpengram-web-client repository.',
  },
  {
    q: 'Can I try it without setting up a server?',
    a: 'Yes — that is the fastest way in. We run a public OwpenGram server, and it is already built into both clients: install the app, pick OwpenGram on the server-selection screen, and sign in. No address to type, no key to paste, no Docker. When you want your own server later, you add it in the same app and keep both accounts side by side.',
  },
  {
    q: 'Can I run my own server?',
    a: 'Yes. Download the server archive for your system from the latest GitHub release, unpack it and run start.sh, or start.bat on Windows. No Docker, no separate database and no compilers: PostgreSQL is built in. The script prints an address, and a setup wizard in your browser asks where to keep data (built-in PostgreSQL or your own, local disk or S3 storage), then sets up the server name, public address and your admin account. To build from source instead, clone the repository and run owpengram-server.sh or owpengram-server.bat (needs Go 1.25+).',
  },
  {
    q: 'Is OwpenGram the same as OpenGram?',
    a: 'No. OwpenGram, spelled with "Owp" (Own + Open + Gram), is its own independent project and is not related to similarly named projects. Its code lives at github.com/owpengram and its site is owpengram.org.',
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
    text: 'Private chats, groups, supergroups, channels and forum topics — with media, replies, reactions, folders, bots and translation. Voice and video calls too, one-to-one or group, with screen sharing and live streams. The same app on Windows, Linux, Android and the web.',
    pairs: [
      { desktop: 'webChat' },
      { desktop: 'desktopCall' },
    ],
  },
  {
    id: 'economy',
    eyebrow: 'Economy',
    title: 'Stars, gifts and collectibles on your own server',
    text: 'Users send gifts, upgrade them with Stars into unique collectibles and show them on their profile. Each server runs its own small economy, and its admin decides which gifts exist: import a ready pack or build your own. The gifts here are from the Grind Pack, playing exactly as they do in the apps.',
    gifts: true,
  },
]

// Grind Pack gifts shown live in the economy row. Plain entries are the gift
// as bought, with its price in Stars; entries with a backdrop are upgraded
// collectibles, drawn on that backdrop with their model. The colours and
// models are the pack's own; the numbers are only examples.
export const GIFT_SHOWCASE = [
  { anim: 'coffee', title: 'Morning Coffee', stars: 15 },
  { anim: 'cake', title: 'Birthday Cake', stars: 30 },
  { anim: 'giftbox', title: 'Gift Box', stars: 20 },
  {
    anim: 'm-bear-panda',
    title: 'Teddy Bear',
    model: 'Panda',
    number: 4211,
    backdrop: { center: '#C9A8FF', edge: '#5E2FB8', text: '#FFFFFF' },
  },
  { anim: 'phone', title: 'Smartphone', stars: 25 },
  {
    anim: 'm-desktop-rgb',
    title: 'Desktop PC',
    model: 'RGB',
    number: 777,
    backdrop: { center: '#8A5CFF', edge: '#2A1566', text: '#FFFFFF' },
  },
  { anim: 'server', title: 'Data Server', stars: 55 },
  {
    anim: 'm-coin-gold',
    title: 'Lucky Coin',
    model: 'Gold',
    number: 1024,
    backdrop: { center: '#FFD24A', edge: '#B8801A', text: '#3A2A00' },
  },
  { anim: 'safe', title: 'Money Safe', stars: 250 },
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
    text: 'Unpack, run one script, then a browser panel for everything after.',
    items: [
      'A single Go binary — Linux, Windows or macOS',
      'PostgreSQL built in: no Docker, no separate database',
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
  tag: 'O9',
  date: '2026-11-05',
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
      { asset: 'OwpenGram.exe', label: 'Windows', icon: 'windows', size: 263_000_000 },
      // Linux (OwpenGram, OwpenGram.deb) is back once the current release ships a Linux build
    ],
  },
  {
    id: 'mobile',
    icon: 'phone',
    title: 'Mobile',
    repo: 'owpengram-android-client',
    files: [
      { asset: 'OwpenGram.apk', label: 'Android', icon: 'android', size: 71_100_000 },
    ],
  },
]

// Gift packs an operator imports in the admin panel (StarGift Catalog -> Import
// Pack). `file` is the asset name on the gift-packs repo's latest release.
export const GIFT_PACKS = [
  {
    name: 'Grind Pack',
    file: 'grind-pack.zip',
    text: 'Desk gear and coffee: twelve gifts that between them use every Star Gift mechanic, from limited supply to upgrades into collectibles.',
  },
  {
    name: 'Energy Pack',
    file: 'energy-pack.zip',
    text: 'One strictly limited, craftable energy can with a fifty-strong pool of collectible flavours.',
  },
]

// Ready-to-run server archives on the server repo's latest release. The file
// name carries the release ("owpengram-server-O8-linux-amd64.tar.gz"), so the
// link is built from the live tag.
export const SERVER_ARCHIVES = [
  { label: 'Linux x64', icon: 'linux', file: 'linux-amd64.tar.gz' },
  { label: 'Linux ARM64', icon: 'linux', file: 'linux-arm64.tar.gz' },
  { label: 'Windows x64', icon: 'windows', file: 'windows-amd64.zip' },
  { label: 'Windows ARM64', icon: 'windows', file: 'windows-arm64.zip' },
  { label: 'macOS Intel', icon: 'desktop', file: 'darwin-amd64.tar.gz' },
  { label: 'macOS Apple Silicon', icon: 'desktop', file: 'darwin-arm64.tar.gz' },
]

// The other way in: clone the repository and let the launcher build it.
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
