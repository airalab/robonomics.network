// Posts shown in the "What do creators say" block on the home page.
// To replace a post: edit an entry here, put its images into /public/pages/home/tweets/.
// Text is copied from X without links (the whole card links to the post).

const authors = {
  aira: { name: 'Robonomics', handle: 'AIRA_Robonomics', avatar: '/pages/home/tweets/av-aira.webp' },
  ens: { name: 'Sergei Lonshakov', handle: 'EnsRationis', avatar: '/pages/home/tweets/av-ens.webp' },
  sensors: { name: 'sensors.social', handle: 'SensorsSocial', avatar: '/pages/home/tweets/av-sensors.webp' },
  anna: { name: 'Anna', handle: 'Anna_Wimmer_S', avatar: '/pages/home/tweets/av-anna.webp' },
  nastya: { name: 'Anastasiia Bakai', handle: 'positivecrash', avatar: '/pages/home/tweets/av-nastya.webp' },
  vadim: { name: 'Vadim Manaenko', handle: 'vadim_manaenko', avatar: '/pages/home/tweets/av-vadim.webp' },
  pinout: { name: 'Pinout', handle: 'pinoutcloud', avatar: '/pages/home/tweets/av-pinout.webp' },
};

// Posts by the people behind Robonomics, not by the project account.
// Long posts are shortened: the opening kept word for word, "…" where text is cut.
export const homeTweets = [
  {
    author: authors.ens,
    url: 'https://x.com/EnsRationis/status/2110354502297542917',
    date: '2026-10-14',
    text: `I’ve been living with two Altruist bundles for almost three months now.

Urban (dust, temperature, humidity, noise) on the veranda and in the kids’ room. Insight (CO2, VOC, temperature, humidity) in the kids’ room and the living room. …

Home Assistant automations I’ve added along the way: floor lighting with an LED strip — red means don’t go outside, green means the air is fine. …`,
    image: '/pages/home/tweets/ens-altruist-home.webp',
  },
  {
    author: authors.anna,
    url: 'https://x.com/Anna_Wimmer_S/status/2075281055511187919',
    date: '2026-07-09',
    text: `One street. Three locations. Different data.

Urban walk with Altruist Environmental Monitor on Mariahilfer Straße, Vienna 🇦🇹

Delivery trucks were louder than a construction site, while particle levels stayed within normal range.

Your environment can change within just a few meters.`,
    image: '/pages/home/tweets/anna-vienna.webp',
    video: true,
  },
  {
    author: authors.pinout,
    url: 'https://x.com/pinoutcloud/status/2044745661979955303',
    date: '2026-04-16',
    text: `Smart home in every one of 50 apartments — delivered by Pinout in Q3 2025 - Q1 2026.
🇨🇾 Residence 28, Limassol — CCS Stylianides Group
🇨🇾 Qube Residences, Paphos — INEX Group
Fully local Home Assistant. Zigbee 3.0 everywhere. No cloud, no subscriptions, no vendor lock-in. Built by robotics engineers for people who actually live here.`,
    image: '/pages/home/tweets/pinout-50-apartments.webp',
    video: true,
  },
  {
    author: authors.nastya,
    url: 'https://x.com/positivecrash/status/2068993385797386386',
    date: '2026-06-22',
    text: `More sensors. Less map clutter.

sensors.social v4.1 groups nearby devices from the same owner, adds sensor-type icons, improves data quality warnings, and brings richer sharing previews.`,
    image: '/pages/home/tweets/nastya-map-v41.webp',
  },
  {
    author: authors.vadim,
    url: 'https://x.com/vadim_manaenko/status/1791448918904942906',
    date: '2024-05-17',
    text: `Yesterday I was busy unloading 1150 kg of goods for the first @pinoutcloud contract 🤪 This is how much hardware is needed for 28 apartments`,
    image: '/pages/home/tweets/vadim-1150kg.webp',
    video: true,
  },
  {
    author: authors.ens,
    url: 'https://x.com/EnsRationis/status/2101945899895173247',
    date: '2026-09-21',
    text: `This summer we built Robonomics 5.0.

Not a rebrand — a change in what the protocol is for: from a parachain with robotics pallets to infrastructure for cyber-physical systems.

Part 1 of 3: the protocol`,
    image: '/pages/home/tweets/r50.webp',
  },
];
