// for translations
import { t } from '../../translations/i18n.js'

export default {
  products:[
    {
      code: 'altruist',
      title: t('Outdoor sensor “Altruist“'),
      text: `${t('A smart sensor that collects environmental data - noise, dust, and temperature, and stores them on a decentralized')} <a aria-label="see decentralized sensor map" href="https://sensors.social/" target="_blank">${t('sensor map')}</a>.`,
      cases: t('Become a provider of environmental data to your friends and neighbors in the area. Access truly decentralized measurements of air quality, noise, temperature, and other environmental conditions on the sensor map.'),
      casesImages: ['altruist-cases-1.webp', 'altruist-cases-2.webp', 'altruist-cases-3.webp', 'altruist-cases-4.webp'],
      titleLink: '/devices/altruist'
    },
    {
      code: 'server',
      title: t('Home server with Web3 cloud'),
      text: t('The most open-source smart home server, powered by RISC-V, with a Web3 cloud replacing Google servers under the hood.'),
      cases: t('Smart WI-FI MQTT devices with open-source firmware Tasmota on the board fully compatible with Home Assistant.'),
      casesImages: ['risc-v-cases-1.webp', 'risc-v-cases-2.webp', 'risc-v-cases-3.webp', 'risc-v-cases-4.webp'],
      titleLink: '/devices/risc-v'
    },
    {
      code: 'hikikomori',
      title: t('Smart Tamagochi “Hikikomori“'),
      text: t('Finally, a smart Tamagotchi that’s more than just a game! A smart wearable station that checks the status of sensors from your home or clothing.'),
      cases: t('Connect your smart home and smart clothing to the Hikikomori to monitor sensor data—right at your fingertips. Literally.'),
      titleLink: '/devices/hikikomori'
    },
    {
      code: 'energy-monitor',
      title: t('Energy monitor with USB-C'),
      text: t('A non-invasive device for installation in electrical panels with DIN rail mounting. Built on the Espressif ESP32C6 chip with open RISC-V architecture.'),
      titleLink: '/devices/energy-monitor'
    },
  ],
}