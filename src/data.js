// Single source of truth for external links and section content.
// Update GitHub URLs / domain here.

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
}

// The four core promises of the project.
export const PILLARS = [
  {
    icon: 'shield',
    title: 'Privacy, control & security',
    text:
      'Run the server yourself. Your messages, your keys, your infrastructure — no third party in the middle and nothing to trust but your own machine.',
  },
  {
    icon: 'spark',
    title: 'Familiar & comfortable',
    text:
      'Built on a messaging experience millions already use every day. Same speed, same comfort, no learning curve — just freedom underneath.',
  },
  {
    icon: 'globe',
    title: 'Reachable in any situation',
    text:
      'Spin up your own node anywhere — a VPS, a home box, a field laptop. Stay connected even when the official network is blocked or unavailable.',
  },
  {
    icon: 'unlock',
    title: 'Free from censorship',
    text:
      'No single authority can silence you. Host your own server beyond the reach of totalitarian filtering and keep communication open.',
  },
]

// Things that already work today.
export const FEATURES = [
  {
    title: 'Multi-server client',
    text:
      'Add accounts on the official network, your own OwpenGram server, or any compatible node — each account independent, switchable in seconds.',
  },
  {
    title: 'Self-hosted server',
    text:
      'A complete server you can deploy with Docker. Chats, media, groups and channels running entirely on infrastructure you own.',
  },
  {
    title: 'Voice & video calls',
    text:
      'Real-time calls with your own TURN relay, so calls connect globally — not just on a local network.',
  },
  {
    title: 'No cloud lock-in',
    text:
      'Push notifications work without Google or Firebase. No mandatory dependency on any cloud vendor.',
  },
  {
    title: 'Isolated identities',
    text:
      'Every server uses its own encryption keys. Accounts on different servers stay cleanly separated.',
  },
  {
    title: 'Cross-platform',
    text:
      'Native Android and desktop clients (Windows, macOS, Linux), sharing the same familiar interface.',
  },
  {
    title: 'Media, files & groups',
    text:
      'Photos, videos, documents, large groups and channels — the full toolkit for real conversations.',
  },
  {
    title: 'Open source',
    text:
      'Client and server are open for everyone to read, audit, fork and improve. Transparency by design.',
  },
]

// Who it's for.
export const PERSONAS = [
  {
    title: 'For sysadmins',
    text:
      'Deploy with Docker, point clients at your endpoint, hold your own keys. Total control over the stack — no black boxes.',
  },
  {
    title: 'For everyday users',
    text:
      'It just works and it feels familiar. Free to use, comfortable to live in, with privacy built in instead of bolted on.',
  },
  {
    title: 'For teams & organizations',
    text:
      'Keep internal communication on infrastructure you own and govern, instead of someone else’s cloud.',
  },
  {
    title: 'For journalists & activists',
    text:
      'A communication channel you control, resilient to blocking and censorship, reachable when it matters most.',
  },
]

// Where we're headed.
export const ROADMAP = [
  {
    title: 'One-command deploy',
    text: 'An even simpler path from zero to a running, call-ready server.',
  },
  {
    title: 'More platforms',
    text: 'iOS and web clients to complete the multi-server experience everywhere.',
  },
  {
    title: 'Server discovery',
    text: 'Easier ways to find, share and connect to community-run servers.',
  },
  {
    title: 'Hardened security',
    text: 'Expanded end-to-end options and admin tooling for high-risk use.',
  },
]
