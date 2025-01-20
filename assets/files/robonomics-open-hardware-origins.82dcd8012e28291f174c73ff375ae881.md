---
title: "Orígenes del Hardware Abierto de Robonomics"
date: 2024-11-11
published: true
locale: 'es'
cover_image: ../images/robonomics-open-hardware-origins/cover.png
description: "Al lanzar el proyecto Hardware for Cyberpunks, es hora de reflexionar sobre nuestro viaje en el hardware desde 2020. Este ensayo explorará el movimiento de hardware abierto de Robonomics."
abstract: "Al lanzar el proyecto Hardware for Cyberpunks, es hora de reflexionar sobre nuestro viaje en el hardware desde 2020. Este ensayo explorará el movimiento de hardware abierto de Robonomics."
tags: ['Hoja de Ruta', 'Hogar Inteligente']
---

Robonomics siempre ha sido en parte un proyecto de "hardware". Para nosotros, la cadena de bloques era la tecnología a través de la cual los dispositivos podían convertirse en verdaderos agentes económicos y utilizar activos financieros para producir cambios en la vida real. Desde el primer vuelo de dron lanzado por un contrato inteligente en 2016, no hemos dejado de pensar en hardware real ni por un minuto, hardware que percibe el mundo real y es capaz de influir en él: sensores y robots. Al mismo tiempo, manteniéndonos fieles al movimiento de software de código abierto, intentamos hacer también proyectos de hardware abiertos. Ahora, los planos de todos los dispositivos que desarrollamos se publican bajo licencias abiertas.

Ha pasado mucho tiempo desde 2020, y ahora es el momento perfecto para recordar cuánto hardware interesante hemos desarrollado. En este ensayo, repasaremos elHistoria del movimiento de hardware abierto en Robonomics y los desarrollos más interesantes del pasado, presente y futuro.

## Red de Sensores - Calidad del Aire

El proyecto de red de sensores cívicos comenzó en abril de 2020, cuando desarrollamos una DApp especial para ver todos los sensores que proporcionan datos a la red de Robonomics en un mapa mundial. Rápidamente nos dimos cuenta de que para garantizar la mejor experiencia de usuario, se necesitaba una solución Plug&Play, para que uno pudiera comprar un sensor, conectarlo e inmediatamente convertirse en miembro de la comunidad sin un profundo conocimiento de programación y diseño de circuitos. En agosto de 2021, se inició el trabajo en un sensor de calidad del aire y, solo unos meses después, obtuvimos el primer prototipo, que incluía un sensor de partículas láser SDS011 PM2.5/PM10 y un popular sensor de temperatura y humedad DHT22 (AM2302).

<rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Hardware de Red de Sensores de Calidad del Aire" />

Durante los últimos tres años, el dispositivo ha sufrido extensas modificaciones, culminando en su última encarnación: la Estación de Monitoreo Civil "Altruista". Este sensor inteligente recopila datos ambientales, incluidos niveles de ruido, partículas de polvo y temperatura, y los almacena en un [mapa de sensores](https://sensors.social/) descentralizado. La estación puede ser ampliada siguiendo sensores con interfaz I2C: BMP180 — temperatura y humedad, BME/P280 — temperatura, humedad, presión atmosférica, HTU.21D — temperatura y humedad, SENSOR DE VOC CCS811 — compuestos orgánicos volátiles, equivalente de CO2 y sensores con interfaz de 1 cable: DS18B20 — temperatura.

<rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Estación de Aire Altruista" />

Tenemos muchos materiales educativos sobre la red de sensores en los sitios web de [Robonomics Academia](https://robonomics.academy/es/learn/sensors-connectivity-course/overview/) y en la [Wiki](https://wiki.robonomics.network/docs/sds-sensor-connect/). El [video](https://www.youtube.com/watch?v=OdTd1sacCso) muestra cómo puedes crear tu propia estación de monitoreo individual utilizando nuestros módulos y conectarte a la red de sensores de monitoreo civil.

## Ciber-Economía - Máquina de Café Tokenizada

Además de la red global de sensores, también consideramos escenarios para utilizar Robonomics en dispositivos domésticos. Uno de los primeros proyectos en esta área fue una máquina de café conectada a blockchain, lanzada en octubre de 2021. Sí, esto no fue un desarrollo en el sentido tradicional de la palabra, sino más bien un hackeo. Utilizamos modelos seriales de máquinas de café y nuestras habilidades de ingeniería para hacer que estas máquinas sean compatibles con Web3.

<rb-image zoom src="./images/robonomics-open-hardware-origins/robonomics-coffee-maker.jpg" alt="robonomics-coffee-maker" />

Sin embargo, estoEl proyecto de hardware incorporó todas las innovaciones de Robonomics disponibles en ese momento:

- Nodo de sustrato Robonomics ligero en una computadora de placa única
- Activo del Mundo Real (RWA) en forma de tokens de café emitidos en la parachain de Statemine cuando se recibe un nuevo paquete de café y se distribuye equitativamente entre los miembros del equipo en la oficina
- Aplicación práctica del palet de responsabilidad para simplificar la interacción entre los agentes de oferta y demanda — con esta función, la Cafetera buscaba los proveedores de café más rentables

Puedes leer más sobre este fascinante proyecto [aquí](https://robonomics.network/cases/blockchain-coffee-machine/) y en el blog de Sergey Lonshakov en Medium [Coworking for crypto-anarchists](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d)

## Dispositivos para el Hogar Inteligente

En 2022, comenzamos a desarrollar soluciones seguras y privadas para el hogar inteligente basadas en tecnologías Web3. Nos enfocamos en la comunicación inalámbrica, creando una línea de dispositivos controlados de forma remota compatibles con la nube descentralizada de Robonomics. Nuestro viaje comenzó con el popular chip WiFi ESP8266 de Espressif Systems. Luego avanzamos al más versátil ESP32-C3, con arquitectura abierta RISC-V y soporte Bluetooth 5. En 2024, adoptamos el chip más avanzado de Espressif — el ESP32-C6 — que añadió soporte para el protocolo Thread/Zigbee. Ahora, toda nuestra línea de dispositivos para el hogar inteligente de Robonomics utilizaChips ESP32-C6. Todos estos dispositivos son compatibles con el servidor de hogar inteligente de código abierto Home Assistant. Los usuarios pueden actualizar fácilmente el firmware a través de nuestro [Web Flasher](https://webflasher.robonomics.network/). Hemos publicado los archivos fuente de nuestros módulos en [nuestro repositorio de Github](https://github.com/airalab/hardware).

### Interruptores

Tradicionalmente, los sistemas de automatización de edificios con cableado se diseñan junto con otras redes eléctricas durante la construcción inicial. Si su residencia no se diseñó de esta manera, agregar dispositivos inteligentes a menudo requiere costosas renovaciones. Nuestros interruptores ofrecen una solución: implementar un control inteligente sin necesidad de renovaciones. Simplemente instale el interruptor en una caja de salida estándar y estará accesible para el servidor de Home Assistant, lo que brinda funcionalidad de hogar inteligente a espacios con cableado tradicional.

<rb-image zoom src="./images/robonomics-open-hardware-origins/2-gang-switch.jpg" alt="" />

### Control Remoto de Infrarrojos

Los transceptores infrarrojos han dominado durante mucho tiempo el mercado de electrodomésticos controlados de forma remota. Casi todos los hogares contienen tales dispositivos, incluidos reproductores multimedia, aires acondicionados y muchos otros. Para simplificar la integración de estos dispositivos en sistemas de hogar inteligente, hemos desarrollado una pasarela configurable. Esta pasarela le permite conectar fácilmente sus electrodomésticos controlados por IR a su servidor doméstico utilizando el protocolo MQTT, todo a través de un proceso de configuración sencillo.

<rb-image zoom src="./images/robonomics-open-hardware-origins/ir-remote-control.jpg" alt="Control Remoto de Infrarrojos" />

### Monitor de Energía

El ahorro de energía es sin duda una de las funciones más significativas de un hogar inteligente. Si bien la capacidad de controlar cualquier dispositivo sin levantarse del sofá es genial, es aún más satisfactorio recibir facturas de electricidad un 15-20% más bajas de lo habitual, gracias a los datos históricos sobre cambios en el consumo de energía. Esta motivación llevó al desarrollo de nuestro primer dispositivo montable en riel DIN, el estándar de la industria para la automatización. Al igual que todos nuestros dispositivos para hogares inteligentes, el Monitor de Energía se conecta de forma inalámbrica al servidor de Home Assistant a través del protocolo MQTT. Mira el [video de demostración](https://www.youtube.com/watch?v=xtXIsORJGP0) que muestra la apertura, configuración y uso inicial del monitor.

<rb-image zoom src="./images/robonomics-open-hardware-origins/energy-monitor.jpg" alt="Monitor de Energía" />


## Robótica DIY e Industrial

A principios de 2021, Robonomics inició el proyecto Robossembler con un gran objetivo: cambiar la forma en que se fabrican los robots industriales. Queríamos avanzar hacia robots que pudieran construirse a sí mismos. Manteniendo vivo este sueño, establecimos un objetivo más práctico en 2021. Decidimos crear un brazo robótico de código abierto que cualquiera pudiera construir y utilizar. Este brazo sería capaz de ensamblar cosas automáticamente e incluso podría ser capaz de hacer copias de sí mismo. El diseño clásico de un robot industrial no incluye la posibilidad de ensamblarse automáticamente, por lo que tuvimos que revisar todos los componentes estructurales, comenzando por el motor. Nos enfocamos en mejorarmotor, caja de cambios y estructura general del robot. Este proceso ha sido desafiante y consumidor de tiempo. Sin embargo, ahora estamos empezando a ver resultados positivos de nuestros esfuerzos. Nuestro arduo trabajo está empezando a dar frutos y estamos avanzando bien en el proyecto.

### Servomotor

La mayoría de los manipuladores robóticos abiertos inicialmente usaban motores paso a paso, que no eran ideales. Los robots modernos propietarios ahora utilizan servomotores con controladores integrados para obtener una mejor retroalimentación. Nuestro equipo desarrolló un controlador de servomotor personalizado, aplicable a varios proyectos de motores.

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-servo-reducer-exploding-view-01.jpg" alt="Vista en explosión del servomotor Robossembler" />

<rb-image zoom src="./images/robonomics-open-hardware-origins/servo.jpg" alt="Servomotor Robossembler" />

Diseñamos nuestro controlador de servomotor para que sea fácil de usar para los entusiastas del bricolaje. No necesitas un taller de alta tecnología para hacer el estator. En lugar de acero eléctrico costoso para el núcleo magnético, usamos tornillos DIN regulares. Puedes crear las partes principales del rotor y el estator utilizando una impresora 3D. Esto hace que sea mucho más fácil para los aficionados construir el proyecto en casa. Las fuentes están disponibles en nuestro repositorio en [gitlab](https://gitlab.com/robossembler/servo).

### Máquina de bobinado

Durante el desarrollo del motor, inicialmente enrollamos varios estatores a mano, un proceso extremadamente laborioso. SinCon mucha vacilación, decidimos crear una máquina especializada para el bobinado automático de estatores. ¿El resultado? Una solución notablemente rentable por alrededor de $150. Actualmente, esta es la primera máquina de bobinado de código abierto del mundo. La hemos diseñado teniendo en cuenta la accesibilidad: la mayoría de las piezas son imprimibles en 3D. Puedes ver todo el proceso, desde el ensamblaje hasta el bobinado inaugural de 8 horas del estator, en este [video](https://youtu.be/5glGYkbpT6w?si=H6iFg7i56K8elXjw). Las fuentes están disponibles en nuestro repositorio en [gitlab](https://gitlab.com/robossembler/cnc/motor-wire-winder).

<rb-image zoom src="./images/robonomics-open-hardware-origins/winder.jpg" alt="Motor Wire Winder" />

Ahora que hemos resuelto las tareas más básicas: desarrollar el motor y el equipo para su producción, ¡podemos avanzar! En 2025, planeamos probar el Robossembler Arm, un manipulador robótico de 6 ejes totalmente de código abierto. ¡Ya hemos desarrollado una caja de cambios única con una relación de engranajes de 1:43, que proporcionará la fuerza necesaria para el robot incluso con nuestro motor casero!

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-arm.jpg" alt="Robossembler Arm" />

## ¿Qué sigue?

No nos detenemos aquí- ¡Tenemos grandes planes para 2025! Vamos a fabricar muchos más dispositivos. En este momento, puedes ver nuestra nueva línea de Hardware para Cyberpunks en [robonomics.network/devices](https://robonomics.network/devices/). Esta nueva línea tendrá varios dispositivos, incluida la estación Altruist de la que ya hablamos. Esto es en lo que estamos trabajando:

- Servidor doméstico inteligente RISC-V. El servidor doméstico inteligente de código abierto más avanzado, alimentado por RISC-V, con una nube Web3 reemplazando a los servidores de Google bajo el capó. Dispositivos WI-FI MQTT inteligentes con firmware de código abierto Tasmota en la placa, totalmente compatibles con Home Assistant.
- Hikikomori Tamagotchi. Una estación inteligente portátil que verifica el estado de los sensores de tu hogar o ropa.
- Caja fuerte inteligente. Una caja fuerte que se desbloquea con un contrato inteligente basado en condiciones definidas por el usuario. Consulta los registros de aperturas y cierres de la caja fuerte. Programa la caja fuerte según tus necesidades, como otorgar acceso a cuentas de confianza después de un período prolongado de inactividad.