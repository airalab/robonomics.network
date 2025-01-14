// for translations
import { t } from '../../translations/i18n.js'

export default {
  cases: [
    {
      id: 0,
      title: t('Fronius Solar.web integration with Home Assistant'),
      description: t('Collaboration with real estate developer on Cyprus for tracking the daily distribution, consumption and offsetting any excess carbon footprint.'),
      path: 'cases/fronius-solar-web',
      cover_image: 'fronius-solar-web.png',
      metaImg: '/website_cover_fronius_solar_web.png',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2022-12-31',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-07-14',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['smart home', 'carbon footprint offsetting'],
      done: true
    },
    {
      id: 1,
      title: t('Robonomics Middleware Framework for ROS 2'),
      description: t('One of our goals in developing this case is to turn Robonomics into ROS 2 Middleware.This will allow us to use Robonomics on Substrate to create an dapp that can run ROS 2 right from the browser!'),
      path: 'cases/rust-for-ros2',
      cover_image: 'rust-ros2.jpg',
      metaImg: '/website_cover_rust_ros2.png',
      // progress field needs for "sort by progress" filter
      progress: 'proceeding',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2022-08-08',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-07-12',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics'],
      done: true
    },
    {
      id: 2,
      title: t('Eisenkoch, the robot chef'),
      description: t('Real case fot the robot equipped with two waffle irons and baking 6 waffles at the same time in 5-7 minutes.'),
      path: 'cases/eisenkoch',
      cover_image: 'eisenkoch.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2022-03-27',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-03-27',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics', 'polkadot ecosystem', 'smart service'],
      done: false
    },
    {
      id: 3,
      title: t('Blockchain-powered smart coffee machine'),
      description: t('Robonomics coffee - is a smart coffee machine integrated in Robonomics Network. This project aims to show Robonomics potential in the IoT sphere by a real-world example.'),
      path: 'cases/blockchain-coffee-machine',
      cover_image: 'blockchain-coffee.jpg',
      metaImg: '/website_cover_coffee-machine.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2022-02-11',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-02-11',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['smart service', 'polkadot ecosystem'],
      done: true
    },
    {
      id: 4,
      title: t('Water environmental inspector'),
      description: '',
      path: 'cases/water-inspector',
      cover_image: 'water-inspector.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2022-01-16',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-01-16',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics', 'polkadot ecosystem', 'sensors', 'data storage'],
      done: false
    },
    {
      id: 5,
      title: t('Air monitoring network'),
      description: '',
      path: 'cases/air-monitoring-network',
      cover_image: 'air-monitoring.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'proceeding',
      // created field needs for "sort by date" filter (for earliest option)
      // created: '2022-01-03'
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-01-03',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['polkadot ecosystem', 'sensors', 'data storage'],
      done: false
    },
    {
      id: 6,
      title: t('Production quality control platform “Feecc”'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'feecc.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'proceeding',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2021-05-06',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2022-05-06',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['polkadot ecosystem', 'data storage', 'smart service'],
      done: false
    },
    {
      id: 7,
      title: t('Backup and archiving service for robotics companies'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'robotic-companies.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2021-04-18',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2022-04-18',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics', 'polkadot ecosystem', 'data storage'],
      done: false
    },
    {
      id: 8,
      title: t('Public lab with Boston Dynamics Spot'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'spot.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'proceeding',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2021-11-05',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2022-11-05',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics', 'polkadot ecosystem', 'ethereum', 'smart service'],
      done: false
    },
    {
      id: 9,
      title: t('Autonomous telescope service'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'telescope.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2022-06-02',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2022-12-17',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics', 'polkadot ecosystem', 'smart service'],
      done: false
    },
    {
      id: 10,
      title: t('Smart home secure remote control and backup service'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'smart-home.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'proceeding',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2021-01-21',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2023-02-15',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['polkadot ecosystem', 'smart home', 'data storage'],
      done: false
    },
    {
      id: 11,
      title: t('Blockchain as quality control system for chemistry'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'blockchain-chemistry.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2020-12-09',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2022-10-15',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['ethereum', 'smart service', 'data storage'],
      done: false
    },
    {
      id: 12,
      title: t('Real CO2 emissions reduction with blockchain-proven certificates'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'emissions.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2020-08-22',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2021-04-11',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['ethereum', 'smart service', 'carbon footprint offsetting'],
      done: false
    },
    {
      id: 13,
      title: t('Robot-artist Gaka-Chu'),
      description: '',
      path: 'cases/quality-control-platform-feecc',
      cover_image: 'gakachu.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2020-03-19',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2021-05-06',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['ethereum', 'smart service'],
      done: false
    },
    {
      id: 14,
      title: t('Digital markets for robots'),
      description: t('The development of robotics and automated systems during the Fourth Industrial Revolution will require robots to have the capability to order services for their own maintenance.'),
      path: 'cases/digital-markets-for-robots',
      cover_image: 'digital-markets-for-robots.webp',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2020-05-15',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2021-04-18',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['robotics', 'ethereum', 'polkadot ecosystem', 'smart service'],
      done: true
    },
    {
      id: 15,
      title: t('Demo “Get the weather of Fuji mountain”'),
      description: 'Send a request message and get the result from the autonomous agent. The resulting file is saved to IPFS and the resultant message requires a signature with a private key.',
      path: 'cases/the-weather-of-fuji',
      cover_image: 'fuji.jpg',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2020-02-17',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2021-03-17',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['ethereum', 'smart service'],
      done: true
    },
    {
      id: 16,
      title: t('Tokenization of Data of IOT devices'),
      description: t('The tokenization of data from IoT (Internet of Things) devices represents a groundbreaking development in the digital economy.'),
      path: 'cases/tokenization',
      cover_image: 'tokenization.webp',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2019-05-15',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2020-04-18',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['ethereum'],
      done: true
    },
    {
      id: 17,
      title: t('Industrial zone management with capital'),
      description: t('This case explores the role of smart factories in responding to capital shifts in modern markets. As part of the Industry 4.0 transformation, it introduces a decentralized communication protocol using cyber-physical systems to improve economic coordination among industrial agents.'),
      path: 'cases/industrial-zone-management-with-capital',
      cover_image: 'industrial-zone-management.webp',
      // progress field needs for "sort by progress" filter
      progress: 'complete',
      // created field needs for "sort by date" filter (for earliest option)
      created: '2019-05-15',
      // updated field needs for "sort by date" filter (for recent option)
      updated: '2020-07-08',
      // tags field needs for "sort by interest" filter
      // use lowerCase
      tags: ['ethereum'],
      done: false
    }
  ]
}