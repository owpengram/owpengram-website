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
}

// ─── What works today — edit here when shipping new capabilities ─────────────

export const AVAILABLE = {
  clients: {
    title: 'Clients',
    note: 'Windows & Android · release builds',
    items: [
      { icon: '💬', text: 'Private chats' },
      { icon: '👥', text: 'Groups' },
      { icon: '📞', text: 'Voice & video calls (1-to-1, built-in TURN relay — works globally)' },
      { icon: '🖼️', text: 'Media & files — photos, videos, documents' },
      { icon: '📇', text: 'Contacts sync' },
      { icon: '🌐', text: 'Windows & Android clients' },
      { icon: '🔀', text: 'Multi-server — several accounts on different servers in one app' },
    ],
  },
  server: {
    title: 'Server',
    note: 'Self-hosted · Docker',
    items: [
      { icon: '💬', text: 'Private chats' },
      { icon: '👥', text: 'Groups' },
      { icon: '📞', text: 'Voice & video calls (1-to-1, built-in TURN relay)' },
      { icon: '🖼️', text: 'Media & files — photos, videos, documents' },
      { icon: '📇', text: 'Contacts sync' },
      { icon: '🐳', text: 'Docker-based deployment' },
      { icon: '🔑', text: 'Per-server encryption keys' },
    ],
  },
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
  serverDocker: {
    src: `${S}/server_docker_and_build_script.png`,
    alt: 'OwpenGram server — Docker deployment',
    caption: 'Self-hosted server',
    aspect: '1618 / 884',
    variant: 'wide',
  },
}

export const STATS = [
  { value: '2', label: 'Ready clients', detail: 'Windows desktop & Android' },
  { value: '∞', label: 'Your servers', detail: 'Official, private or community nodes' },
  { value: '100%', label: 'Open source', detail: 'Client, server & tooling on GitHub' },
]

export const PILLARS = [
  {
    icon: 'shield',
    title: 'Privacy & control',
    text: 'Run the server yourself. Your messages, your keys, your infrastructure.',
  },
  {
    icon: 'spark',
    title: 'Familiar UX',
    text: 'The interface millions already know — without giving up ownership of your stack.',
  },
  {
    icon: 'globe',
    title: 'Always reachable',
    text: 'Spin up a node on a VPS or home server when public networks are blocked.',
  },
  {
    icon: 'unlock',
    title: 'No censorship layer',
    text: 'No single authority decides who can speak on infrastructure you control.',
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
    id: 'multiserver',
    eyebrow: 'Multi-server',
    title: 'Several accounts, several networks',
    text: 'Keep an official account and a self-hosted one side by side. Each account picks its server at sign-in.',
    points: ['Per-account server selection', 'Isolated encryption keys', 'Switch in seconds'],
    desktop: 'desktopMultiserver',
    phone: 'androidMultiserver',
  },
  {
    id: 'calls',
    eyebrow: 'Real-time',
    title: 'Voice & video calls on your own relay',
    text: '1-to-1 calls connect through a built-in TURN relay you deploy — working globally, not only on LAN.',
    points: ['Self-hosted TURN', 'Windows & Android', 'No Firebase dependency'],
    desktop: 'desktopCall',
    phone: 'androidCall',
  },
]

export const PERSONAS = [
  {
    title: 'Sysadmins',
    text: 'Deploy with Docker, point clients at your endpoint, hold your own keys.',
  },
  {
    title: 'Everyday users',
    text: 'Familiar, fast and free — privacy built in, not bolted on.',
  },
  {
    title: 'Teams',
    text: 'Internal comms on infrastructure you own and govern.',
  },
  {
    title: 'High-risk work',
    text: 'Infrastructure you control when blocking and censorship escalate.',
  },
]

// ─── In progress & planned — edit here ───────────────────────────────────────

export const PLANNED = [
  { icon: '📞', text: 'Group calls' },
  { icon: '🛠️', text: 'Server admin panel' },
  { icon: '📢', text: 'Channels' },
  { icon: '🔗', text: 'Custom prefixes and protocol per server' },
  { icon: '🤖', text: 'Bot API' },
  { icon: '⚡', text: 'Light server edition — no Docker, SQLite backend' },
  { icon: '🌐', text: 'Clients for other platforms (Linux, macOS, iOS, web)' },
]
