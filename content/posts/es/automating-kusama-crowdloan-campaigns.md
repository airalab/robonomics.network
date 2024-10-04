---
title: Automatización de campañas de préstamos colectivos (crowdloan)
date: 2021-12-08
published: true
locale: 'es'
cover_image: ../images/automating-kusama-crowdloan-campaigns/cover.jpg
description: "Las subastas iniciales de slots de parachain y sus préstamos colectivos asociados se vieron perjudicados por ser los primeros en llegar al mercado, lo que hizo que sus precios fueran difíciles de predecir y, a menudo, demasiado altos. Esta desventaja es común en cualquier mercado nuevo en el cual los precios todavía no están claros, especialmente mercados como las subastas de parachain, donde diferentes equipos lanzan productos diversos con necesidades diversas."
abstract: "Las subastas iniciales de slots de parachain y sus préstamos colectivos asociados se vieron perjudicados por ser los primeros en llegar al mercado, lo que hizo que sus precios fueran difíciles de predecir y, a menudo, demasiado altos. Esta desventaja es común en cualquier mercado nuevo en el cual los precios todavía no están claros, especialmente mercados como las subastas de parachain, donde diferentes equipos lanzan productos diversos con necesidades diversas."
tags: ['Paracaídas Robonomics']
---
import Card from '~/components/TextCard.vue'
import KusamaSlotBanner from '~/components/blocks/KusamaSlotBanner.vue'

La experiencia y los datos de la primera cohorte de equipos que obtuvo préstamos colectivos ahora puede proporcionar una base para que futuros equipos obtengan mejores precios y automaticen el proceso de préstamos colectivos y subastas ganadoras.

Los desarrolladores centrales de Robonomic implementarán un oráculo automatizado a partir de la cuarta campaña de préstamos colectivos de parachain, con el objetivo de participar en futuras subastas de slots de parachain de Kusama. Este mecanismo permitirá al equipo de Robonomics automatizar el pago de cada arrendamiento futuro de slot de parachain en el momento de la renovación. El equipo de Robonomics espera que esta iniciativa sea una inspiración para que equipos futuros usen o implementen su propio proceso automatizado para optimizar y reducir los riesgos a la baja de los equipos del sistema general de subastas de slots.

## Parámetros actualmente determinados de forma independiente por Parachains

> Límite de contribución; Periodo de la campaña; Recompensas para los participantes; Fuente de recompensas; Distribución de Tokens.

Con el objetivo de mitigar el riesgo y la imprevisibilidad, tanto para los proyectos como para los participantes, y para que el costo de ganar estas subastas sea realista y esté en línea con el valor que ofrecen, proponemos que estos parámetros antes mencionados sean evaluados y posteriormente determinados no de forma independiente por Parachains, sino por un oráculo automatizado. Con el uso y a su debido tiempo, anticipamos que este oráculo podría integrarse como un bien común parachain en Kusama y eventualmente en Polkadot.
 								
Debido al entusiasmo que generan estos préstamos colectivos iniciales y sus generosos mecanismos de recompensa, suele pasarse por alto que los proyectos ganadores tienen una vida útil de 48 semanas como parachain operativa en Kusama, antes de que expire su contrato de arrendamiento y se les exija renovar su lugar.

Con esto en mente, hemos presentado un resumen v1 de nuestro algoritmo de oráculo automatizado y las condiciones bajo las cuales podría ser relevante y efectivo en el contexto del protocolo de subasta de slots más grande.

## Oráculo autónomo de las campañas de préstamos colectivos

Muy a menudo, quiere ser el primero, pero con el tiempo se da cuenta de que es más importante mantenerse en el juego. El ecosistema de Polkadot es el tipo de lugar donde no importa si es el primero o el último, lo que importa es que hay una “silla libre” para usted. Nos preguntamos si en su infancia jugaba al juego de las [“sillas musicales”](https://en.wikipedia.org/wiki/Musical_chairs), pero lo recordamos muy bien desde el jardín de infantes.

Por supuesto, aquí también existe una especificidad importante: el arrendamiento de las ranuras de la parachain debe extenderse antes del final del arrendamiento actual; de lo contrario, puede haber una interrupción o complicación en sus servicios (la parachain cambiará [a Parachains Pay-as-you-go](https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06), también conocida como Parathread, desde hace un tiempo).

!["Polkadot ecosystem"](../images/automating-kusama-crowdloan-campaigns/polkadot-ecosystem.jpg)

En general, es importante mantenerse en línea. A continuación, hablaremos de la primera versión del algoritmo propuesto para el cálculo autónomo de los principales parámetros del oráculo de la campaña de préstamo colectivo. Quizás deberíamos darle un nombre, pero hasta ahora no se nos ocurre nada interesante.

### Promedio del límite de contribución

Dentro de este modelo, propondríamos que el oráculo automatizado calcule y promedie el costo medio en KSM requerido para ganar cada subasta del # 15 al # 29. Este costo promedio resultante se establecería como el límite de contribución de préstamo colectivo KSM para el slot n. ° 30.	

### Duración de una campaña de préstamos colectivos

Suponemos que una campaña de préstamos colectivos debe tener como objetivo cobrar durante 5 semanas. En caso de falla, el oráculo tendrá que cambiar la estimación de la muestra de las tarifas medias de un rango de [15-29] subastas a [20-34] y así sucesivamente, y así tener en cuenta los resultados de subastas anteriores. De esta forma, habrá una configuración automática hasta el punto de obtener con éxito una ranura.

### Evaluación de la recompensa por cada KSM a favor de la campaña de préstamo colectivo

Esta es la parte más compleja del algoritmo del oráculo, que requiere la infraestructura de las parachains en ejecución. Mediante la predicción de la economía de repetición cíclica de las parachains que operan desde hace varios años, nos mantenemos fieles a la [perspectiva de que la recompensa para los participantes de la campaña de préstamo colectivo es igual a la pérdida de ganancias por apostar en la Cadena de relé](https://robonomics.network/blog/robonomics-parachain-lease-offering/).

Lo más importante es que la recompensa por apostar puede estimarse de forma autónoma a través de un oráculo con un grado bastante alto de precisión. Por ejemplo, ahora podemos hablar de una pérdida de beneficios de 0,19 KSM por cada 1 KSM durante el año. Sin embargo, la métrica de ingresos perdidos por sí sola no es suficiente, ya que la recompensa en la parachain se ofrece en su token nativo. Es por esto que el esquema se complica un poco, pero no demasiado. Suponemos que los ecosistemas de Kusama y Polkadot siempre tendrán símbolos bursátiles de precios para los tokens de parachain nativos. Por ejemplo, el $KAR de Karura puede ser un símbolo bursátil ya este año en la red Kusama. Entendemos que el oráculo de forma independiente, sin ayuda de nadie externo, puede: (1) obtener datos sobre la tarifa de participación actual en la Cadena de relé, (2) obtener de forma autónoma datos sobre el precio de un token de la parachain nativo del segmento DeFi del símbolo bursátil del ecosistema y, basándose en esos datos, hacer una oferta similar a la participación de KSM.

El titular de DOT y KSM dividirá su bolsa de tokens entre apostar en la Cadena de relé y respaldar varias (quizás varias docenas) de campañas de préstamos colectivos, basándose en el deseo de mantener la recompensa como sería si se apostaran todos los DOT/KSM, pero diversificando el riesgo del precio de un solo token. Sí, en este momento las recompensas en parachains se ven más como un porcentaje de todos los tokens nativos, y las cifras del 20 % del suministro total no parecen infladas en la comunidad. Aunque es difícil imaginar una imagen en la que cada año el 20 % de todos los tokens se ofrezcan solo para el arrendamiento de ranuras. Aún así, este es el estado de génesis en la etapa de las primeras subastas y, una vez más, una imagen normal al comienzo. Sin embargo, recibir recompensas actuales por la vida diaria durante una década no es una buena idea.

El criterio principal para calcular la recompensa será el lucro cesante de la participación en la campaña de préstamos colectivos de cualquiera de los proyectos y la conversión de este valor en la cantidad de tokens nativos a la tasa actual. Esta tarea puede realizarse mediante un proceso autónomo.

### Fuente de recompensa y distribución de tokens en la parachain

Proponemos implementar un mecanismo para la emisión de nuevos tokens en la parachain a través del módulo de tesorería. A su vez, la tesorería de la parachain distribuirá sus nuevas monedas entre los participantes de la campaña de préstamo colectivo mensualmente durante el periodo de arrendamiento de ranuras actual.

## Cierre del ciclo

Anteriormente, brindamos una descripción generalizada de la primera versión del algoritmo del oráculo, cuyo objetivo es hacer que el protocolo de Robonomics sea más viable sin la participación directa del desarrollador. Sin embargo, es aún más importante comprender la conexión entre el arrendamiento de ranuras en el ecosistema y la función objetivo del proyecto. En el caso de Robonomics, es una tarifa para almacenar, actualizar e interactuar al usuario con el gemelo digital del sistema ciberfísico. Nuestro objetivo en perspectiva de 3 años es formar un segmento de Robonomics capaz de atender hasta 1 millón de gemelos digitales por mes a ~0,25 XRT.

Si se alcanza la carga objetivo, tendremos más de $ 60 millones por año en demanda de compras de XRT en el mercado, que se consumirán cuando se active la suscripción.

(Hablaré más sobre el ciclo de vida de la suscripción por separado cuando publique el próximo lanzamiento de Robonomics, dedicado al mecanismo de subasta de suscripción). Resulta que el valor de XRT no disminuirá si la cantidad de suscripciones vendidas para XRT durante el año supera de forma conjunta el valor que pagará la tesorería de la parachain según el oráculo de las campañas de préstamos colectivos.

En general, mi equipo y yo estamos en vías de crear este esquema, que debería permitir cerrar la tokenómica de la parachain desde el momento en que se obtiene la ranura hasta el momento en que se renueva el contrato de arrendamiento. Queremos hacer que este proceso sea lo más autónomo posible de la voluntad humana, y dejar que solo los poseedores de tokens y los desarrolladores propongan mejoras al algoritmo a través del mecanismo de la democracia y el comité técnico de la parachain. Sin trabajo manual en perspectiva. Mientras tanto, como siempre ocurre con las hipótesis, seguiremos dando los primeros pasos de forma manual. A continuación se muestra cómo funcionaría el oráculo del futuro para la cuarta campaña de préstamos colectivos (aproximadamente).

## Los parámetros de la cuarta campaña de préstamos colectivos

<Card>

### Límite de colección **47,425.5262 KSM**

Basado en la evaluación de tarifas de la 15a subasta, Geshiro

</Card>

<Card>

### Duración **5 semanas**

</Card>

<Card>

### Remuneración **4.20 XRT**

1 KSM ~ 370$ APR = 19%,<br/>1XRT ~ 17$

</Card>

<Card>

### Bonificación extra

Los titulares de tarjetas Pioneer NFT recibirán un 1XRT adicional por cada KSM

</Card>

<Card>

### Recompensas de distribución **Mensuales**

Partes proporcionalmente iguales durante 12 meses. La tesorería funciona con la generación de nuevos tokens en la parachain.

</Card>

<KusamaSlotBanner />

