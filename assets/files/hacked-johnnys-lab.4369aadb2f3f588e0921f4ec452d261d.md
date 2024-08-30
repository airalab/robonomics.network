---
title: Laboratorio de Johnny hackeado
date: 2024-06-25
published: true
locale: 'es'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ../images/hacked-johnnys-lab/cover.png
description: 'Hubo un evento reciente “Hack Johnny’s Lab” por Robonomics y creo que lo hackeé de alguna manera! Aparte del primer intento que perdí debido a un malentendido de las reglas, gané cada ronda en la que participé y aquí hay una breve historia de “cómo hacerlo”.'
abstract: "¡Hola! PaTara al teléfono. Hubo un evento reciente “Hack Johnny’s Lab” por Robonomics y creo que lo hackeé de alguna manera! Aparte del primer intento que perdí debido a un malentendido de las reglas, gané cada ronda en la que participé y aquí hay una breve historia de “cómo hacerlo”. "
---

Entonces, un rápido y necesario resumen de las reglas: 12 palabras en un orden mixto, un video de 5 minutos de un TurtleBot 4 deambulando por un laboratorio
y arruinando el orden de palabras de la frase mnemotécnica, entre 5 y 20 participantes dispuestos a ganar y un domingo libre para pensar en una estrategia.

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

Soy algo familiarizado con la programación y tengo una computadora portátil decente y casi ninguna habilidad en reconocimiento de imágenes. Más que eso, 
Decidí jugar limpio, lo que significa no descargar videos, no abusar de la velocidad de reproducción, no navegar por la barra de reproducción. 
Así que la estrategia elegida fue un buen viejo ataque de fuerza bruta. Suena más a hackeo que a cualquier otra cosa.
¿Qué tenemos aquí? Un conjunto de 12 palabras en orden mixto. Esto nos da 12 opciones (factoriales) de frases
(479’001’600 para ser precisos). ¡Una cantidad bastante grande para procesar!


## Estrategia 1: tonta y directa.

Bueno, ¿qué más necesito? ¡Simplemente vaya y ordene! Pero aquí está el primer truco: ¡12! Las frases mnemotécnicas simplemente no encajaban
¡Mis 64 GB de RAM! Recibí un error SIGTERM en la consola del IDE. 
Entonces creé un [iterador](https://docs.python.org/3/library/itertools.html#itertools.permutations) y comencé el proceso. Me llevó un tiempo, no estoy seguro exactamente de cuánto, pero unos 30 segundos, calcular la cantidad de combinaciones.
Solo una ejecución de evaluación. ¡Pero la cosa es que mi computadora portátil ni siquiera hizo girar sus ventiladores al máximo! Un solo núcleo estaba cargado. 

Busqué un paquete de Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) para cargar todos 
los núcleos lógicos de mi CPU (20 de ellos) para paralelizar los cálculos. De lo contrario, habría sido un viaje eterno. 
Pero con eso tuve que dividir mi iterador en 12 partes. Los paquetes de multiprocessing de itertools funcionan juntos, 
pero cuando un conjunto completo de opciones está en la RAM. Ese no era mi caso, así que se realizó lo siguiente:

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


A partir de ese momento y siempre usaría esta estrategia para que mi monitor de carga de la CPU se viera así:

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


Creo que esto acortó el tiempo de ejecución a alrededor de 5 segundos. Encontré la mejor manera de iterar a través 
de las combinaciones ¡pero había demasiadas! El primer paso implicaba realizar aproximadamente 480 millones 
extrínsecos en la red. ¡El nodo simplemente me prohibiría por DDOS e incluso sin eso tomaría una eternidad!

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


Solo por una razón de depuración, comencé el script (para la comunicación del nodo usé un 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/) paquete) y noté que antes de llamar 
realizando obtuve errores como _frase mnemotécnica inválida_. ¡Una pista! Si pudiera validar la combinación en prem, 
¡ahorraría toneladas de tiempo! El análisis de GitHub me llevó a 
[esto](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
línea de código y agregué una validación de combinación a mi script. ¡Esto redujo el número de extrínsecos potenciales a aproximadamente 39’000’000 12 veces más rápido!
Pero aún así, 39 millones de llamadas me prohibirían para siempre, así que necesitaba investigar más. ¿Cómo podría reducir significativamente el

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


número de cálculos? Bueno, traicionando un poco mi estrategia inicial. Verás, iba a evitar ver videos, 
“un hacker, que ni siquiera necesitará un video”, pero las matemáticas me hicieron cambiar de opinión. Cambiarlo a una estrategia 132 veces más rápida. 
A continuación se explica: 
Con eso solo necesitaba saber dos posiciones correctas de palabras en una frase (una tomaría demasiado tiempo, validada experimentalmente).

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


Iteraría a través de 10! combinaciones, insertaría dos palabras en posiciones correctas y validar la frase, 
recortando las opciones a aproximadamente 300’000 ¡una disminución considerable! ¡Más que eso, el conjunto de combinaciones 10! encajaba en mi RAM, excelente! 
mi propio nodo Robonomics local sincronizado con la cadena y preguntarle por el saldo de una cuenta resultante!

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


Además, en lugar de intentar transferir todos los tokens cada 300k veces y llamar a un nodo público para eso, decidí configurar
La consulta es mucho “más fácil” que un extrínseco. Después de toda una noche de sincronización (establecí un límite de caché para que mi 
La consulta es mucho más "fácil" que una extrínseca. Después de una noche entera de sincronización (he establecido un límite de caché para que mi
computadora portátil no explote con datos de la cadena en su ROM), lo intenté y... fue un desastre. Transacciones de red
ver un video completo. ¡Si tan solo pudiera saber la dirección exacta de la cuenta! Pero para eso necesito una frase mnemotécnica… **¿O realmente la necesito?** 
viendo un video completo. ¡Ojalá pudiera saber la dirección exacta de la cuenta! Pero para eso necesito una frase mnemotécnica... **¿O realmente no?**

Mira. Las reglas dicen que la cuenta deseada tiene **exactamente** 42 XRT. ¿Por qué no obtendría todas las direcciones activas en la red,
filtrarlas teniendo exactamente 42 XRT y comparar cada dirección generada con una lista de posibles objetivos 
(alrededor de 20, disminuyendo a 1 al final). Fácil de decir y de hacer. 

Ahora, después de modificar mi script una vez más finalmente lo logré con solo una consulta y una transacción que seguramente 
me daría el premio deseado.

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


Ahora, después de ver 25 segundos del video (mientras llenaba las palabras de un mnemónico), 
solo necesitaría 30 segundos como máximo para robar la recompensa. Hackeado.

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



