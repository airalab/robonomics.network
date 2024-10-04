---
title: 'Release 2.0 & Compatibilidad XCM'
date: 2022-06-09
published: true
locale: 'es'
cover_image: ../images/release-2.0-&-xcm-support/cover.jpg
description: "Release 2.0 es un hito muy importante para nuestro proyecto y comunidad, ya que abre la posibilidad de integrar Robonomics con otras parachains en el ecosistema de Kusama Network. En los próximos meses, el equipo de R&D del proyecto se dedicará a las integraciones con las parachains Statemine, Karura Network, Moonriver Network, Crust Network y KILT Protocol."
abstract: "¡La versión 2.0 y la compatibilidad con XCM están aquí!"
tags: ['Paracaídas Robonomics', 'Mapa ruta', 'Nuevo lanzamiento']
---

[Release 2.0](https://github.com/airalab/robonomics/releases/tag/v2.0.0) es un hito muy importante para nuestro proyecto y comunidad, ya que abre la posibilidad de integrar [Robonomics](http://robonomics.network/) con otras parachains en el ecosistema de [Kusama Network](http://kusama.network/). En los próximos meses, el equipo de R&D del proyecto se dedicará a las integraciones con las parachains Statemine, [Karura Network](http://karura.network/), [Moonriver Network](http://moonbeam.foundation/), [Crust Network](https://crust.network/) y [KILT Protocol](http://kilt.io/).

Dimos los primeros pasos hacia la comunicación de parachain hace 1,5 años, [demostrando el intercambio de mensajes entre dos blockchains](https://wiki.robonomics.network/docs/en/cross-chain-messages/) durante una clase magistral en San Petersburgo. El año pasado, Gavin Wood publicó una [serie de artículos](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392) en los que se modificó XCMP: se convirtió en Cross-Consensus Messaging (XCM) y recibió su primer número de versión por encima de cero.

Dos meses después de la refactorización de XCM, el equipo de Robonomics ahora ha completado nuestras pruebas en Rococo y estamos listos para integrarnos con otras parachains en el ecosistema de Kusama Network.

## Soporte Básico para XCM en Robonomics

Adhiriéndose a la opinión de que Kusama en sí es una red heterogénea, los desarrolladores de Robonomics están tratando de implementar una funcionalidad específica de IoT/Robotics en el código de Robonomics Parachain.

Maximizaremos nuestro uso de las características de otras parachains que pueden ayudar a implementar escenarios industriales o de hogar/ciudad inteligente cuando sea posible. Por ejemplo, este año planeamos usar las soluciones existentes de otras parachains (no crear nuestras propias soluciones para): (1) saldos personales de tokens de acceso de usuario, (2) sistema de identificación de usuario de dispositivos dapp e IoT, (3) archivo grande almacenamiento, (4) uso de dispositivos IoT en contratos inteligentes de trabajo.

En el momento del lanzamiento de [Release 2.0](https://github.com/airalab/robonomics/releases/tag/v2.0.0) Robonomics está listo para la integración con cualquier parachain que se ejecute en Kusama Network. La implementación de software de la compatibilidad con XCM se puede encontrar en el [directorio de Runtime Alpha](https://github.com/airalab/robonomics/tree/master/runtime/alpha) del repositorio principal de Robonomics en Substrate.

En mayo y junio de 2022, ya se realizaron pruebas de compatibilidad con la Relay Chain en Rococo Network utilizando el ejemplo de teletransportar el token nativo de la Rococo Relay Chain-ROC (análogo a KSM, pero en la red de prueba de Rococo) a la parachain de Robonomics.

https://youtu.be/BJHSFDZt0y4

[Publicación en Twitter](https://twitter.com/AIRA_Robonomics/status/1534081132765097984)

Si tiene alguna idea basada en la integración de Robonomics con otras parachains de Kusama Network, envíe un correo electrónico a research@robonomics.network o únase a nuestro [Discord](https://discord.gg/atduhWZpVr) para debatir en nuestros canales principales de la comunidad.

## Integración con Statemine

El objetivo principal de nuestra integración con Statemine es el lanzamiento completo de la función liability() de Robonomics Parachain. La función de liability() es bastante similar a la función principal de Robonomics en Ethereum, que le permite organizar un ciclo completo, utilizando un robot-as-a-service. Desde el momento de la integración con Statemine, los desarrolladores de aplicaciones de IoT podrán crear su propio token en Statemine (o usar cualquier token existente de Statemine) para lanzar un dispositivo/robot inteligente para ejecutar un programa determinado. Después de ejecutar el programa de usuario, las fichas se transferirán automáticamente a la balanza del robot.

En la primavera, mostramos un ejemplo simple del uso de tokens en Statemine para lanzar una máquina de café y describimos uno de los escenarios del desarrollo de la tokenización del acceso a equipos en el artículo:[Coworking for crypto-anarchists, p1](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d). La contabilidad del uso del equipo en la oficina y la distribución diferencial del acceso al equipo encaja muy bien con los tokens de acceso junto con la función de liability().

Otro ejemplo del uso de la integración de Statemine con Robonomics, basado en nuestros casos de uso existentes, es la capacidad de usar un telescopio para acuñar postales NFT. Hoy en día, los saldos de los usuarios se almacenan en Statemine y luego los NFT se emiten mediante RMRK. Comenzando con nuestra integración con Statemine, el telescopio podrá recibir una tarea para crear una imagen a través de la función de liability(), y los tokens de acceso enviados al telescopio irán al saldo del telescopio solo después de agregar un enlace a NFT en los resultados de la ejecución de liability().

Estado de trabajo: Q3 2022

## Integración con Karura Network

Como constructores a largo plazo en los ecosistemas Ethereum y Dotsama, Robonomics cree en la integración de medios de intercambio descentralizados para el token nativo de parachain (XRT) de Robonomics. Incluir XRT en el intercambio de [Karura Network](http://karura.network/) es la forma ideal de permitir que nuestra comunidad de tokens intercambie tokens nativos de parachain de forma descentralizada, y abrir estos canales de comunicación de HRMP es el primer paso para lograr ese objetivo.

Una de las ideas de los desarrolladores de Robonomics para una mayor integración con Karura es la automatización de los puntos de intercambio de moneda y valor para los tokens de Kusama Network. Compartiremos más sobre esto por separado, y ciertamente después del primer paso con la adición de XRT a Karura Swap.

Estado de trabajo: Q3 2022

## Integración con Moonriver Network

Robonomics Parachain puede convertirse en un mecanismo universal para lanzar dispositivos inteligentes desde los smart contracts de [Moonriver Network](http://moonbeam.foundation/). Actualmente estamos trabajando en esta arquitectura y discutiendo un escenario de compensación de huella de carbono por separado utilizando [smart contracts](https://github.com/DAO-IPCI/DAO-IPCI) de [DAO IPCI](http://ipci.io/) en Moonriver.

Estado de trabajo: Q3 2022

## Integración con KILT Protocol

A lo largo de los años de estudio del mercado de la robótica, los desarrolladores de Robonomics han acordado que la identificación de dispositivos es una de las tareas más importantes al considerar escenarios complejos para automatizar la vida de la ciudad, la logística y las cadenas de suministro industrial. [KILT Protocol](http://kilt.io/) es un excelente ejemplo de trabajo continuo para integrar la funcionalidad de varias parachains dentro de una red heterogénea y resolver problemas que son importantes para el mercado de IoT.

Estado de trabajo: Q4 2022
