---
title: "Ursprünge von Robonomics Open Hardware"
date: 2024-11-11
published: true
locale: 'de'
cover_image: ../images/robonomics-open-hardware-origins/cover.png
description: "Mit dem Start des Hardware for Cyberpunks-Projekts ist es an der Zeit, über unsere Hardware-Reise seit 2020 nachzudenken. Dieser Aufsatz wird die offene Hardware-Bewegung von Robonomics erkunden."
abstract: "Mit dem Start des Hardware for Cyberpunks-Projekts ist es an der Zeit, über unsere Hardware-Reise seit 2020 nachzudenken. Dieser Aufsatz wird die offene Hardware-Bewegung von Robonomics erkunden."
tags: ['Roadmap', 'Smart Home']
---

Robonomics war schon immer teilweise ein "Hardware"-Projekt. Für uns war die Blockchain die Technologie, durch die Geräte zu wahren wirtschaftlichen Akteuren werden konnten und finanzielle Vermögenswerte nutzen konnten, um Veränderungen im wirklichen Leben herbeizuführen. Angefangen mit dem ersten Drohnenflug, der 2016 durch einen Smart Contract gestartet wurde, haben wir keinen Moment aufgehört, über echte Hardware nachzudenken - Hardware, die die reale Welt wahrnimmt und in der Lage ist, sie zu beeinflussen: Sensoren und Roboter. Gleichzeitig haben wir uns weiterhin der Open-Source-Software-Bewegung verpflichtet gefühlt und versucht, auch Hardwareprojekte offen zu gestalten. Jetzt werden die Baupläne aller von uns entwickelten Geräte unter offenen Lizenzen veröffentlicht.

Seit 2020 ist viel Zeit vergangen, und jetzt ist es der perfekte Zeitpunkt, sich daran zu erinnern, wie viel interessante Hardware wir entwickelt haben. In diesem Aufsatz werden wir dieGeschichte der Open-Hardware-Bewegung in Robonomics und die interessantesten Entwicklungen der Vergangenheit, Gegenwart und Zukunft.

## Sensoren-Netzwerk - Luftqualität

Das zivile Sensoren-Netzwerk-Projekt begann im April 2020, als wir eine spezielle DApp entwickelten, um alle Sensoren anzuzeigen, die Daten an das Robonomics-Netzwerk auf einer Weltkarte liefern. Wir erkannten schnell, dass zur Gewährleistung der besten Benutzererfahrung eine Plug&Play-Lösung erforderlich war, damit man einen Sensor kaufen, anschließen und sofort Mitglied der Community werden konnte, ohne tiefgreifende Kenntnisse in Programmierung und Schaltungsdesign zu haben. Im August 2021 begann die Arbeit an einem Luftqualitätssensor, und nur wenige Monate später erhielten wir den ersten Prototypen, der einen SDS011 PM2.5/PM10-Laserpartikelsensor und einen beliebten DHT22 (AM2302)-Temperatur- und Feuchtigkeitssensor enthielt.

<rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensoren-Netzwerk Luftqualität Hardware" />

In den letzten drei Jahren hat das Gerät umfangreiche Modifikationen durchlaufen, die in seiner neuesten Inkarnation gipfelten: der "Altruist" Civil Monitoring Station. Dieser intelligente Sensor sammelt Umweltdaten - einschließlich Lärmpegel, Staubpartikel und Temperatur - und speichert sie auf einer dezentralen [Sensorkarte](https://sensors.social/). Die Station kann durch folgende Sensoren mit I2C-Schnittstelle erweitert werden: BMP180 - Temperatur und Luftfeuchtigkeit, BME/P280 - Temperatur, Luftfeuchtigkeit, atmosphärischer Druck, HTU.21D — Temperatur und Luftfeuchtigkeit, CCS811 VOC SENSOR — flüchtige organische Verbindungen, CO2-Äquivalent und Sensoren mit 1-Wire-Schnittstelle: DS18B20 — Temperatur.

<rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Altruist Air Station" />

Wir haben viele Lehrmaterialien zum Sensornetzwerk auf den Websites von [Robonomics Academia](https://robonomics.academy/en/learn/sensors-connectivity-course/overview/) und im [Wiki](https://wiki.robonomics.network/docs/sds-sensor-connect/). Das [Video](https://www.youtube.com/watch?v=OdTd1sacCso) zeigt, wie Sie Ihre eigene individuelle Überwachungsstation mit unseren Modulen erstellen und sich mit dem zivilen Überwachungssensornetzwerk verbinden können.

## Cyber-Ökonomie - Tokenisierte Kaffeemaschine

Neben dem globalen Sensornetzwerk haben wir auch Szenarien für die Verwendung von Robonomics für Haushaltsgeräte in Betracht gezogen. Eines der ersten Projekte in diesem Bereich war eine blockchain-verbundene Kaffeemaschine, die im Oktober 2021 gestartet wurde. Ja, dies war keine Entwicklung im herkömmlichen Sinne des Wortes, sondern eher Hacking. Wir haben Serienmodelle von Kaffeemaschinen und unsere Ingenieursfähigkeiten genutzt, um diese Maschinen Web3-kompatibel zu machen.

<rb-image zoom src="./images/robonomics-open-hardware-origins/robonomics-coffee-maker.jpg" alt="robonomics-coffee-maker" />

JedochDas Hardware-Projekt integrierte alle Robonomics-Innovationen, die zu diesem Zeitpunkt verfügbar waren:

- Leichtgewichtiger Robonomics-Substratknoten auf einem Einplatinencomputer
- Real World Asset (RWA) in Form von Kaffeetoken, die auf der Statemine-Parachain ausgegeben werden, wenn ein neues Paket Kaffee empfangen und gleichmäßig unter den Teammitgliedern im Büro verteilt wird
- Praktische Anwendung des Haftungspallets zur Vereinfachung der Interaktion zwischen Angebot und Nachfrage - mit dieser Funktion suchte die Kaffeemaschine nach den profitabelsten Kaffeeanbietern

Mehr über dieses faszinierende Projekt finden Sie [hier](https://robonomics.network/cases/blockchain-coffee-machine/) und im Blog von Sergey Lonshakov auf Medium [Coworking für Krypto-Anarchisten](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d)

## Smart Home-Geräte

Im Jahr 2022 begannen wir mit der Entwicklung sicherer und privater Smart-Home-Lösungen auf Basis von Web3-Technologien. Wir konzentrierten uns auf drahtlose Kommunikation und schufen eine Reihe von ferngesteuerten Geräten, die mit der dezentralen Robonomics-Cloud kompatibel sind. Unsere Reise begann mit dem beliebten ESP8266-WiFi-Chip von Espressif Systems. Anschließend wechselten wir zum vielseitigeren ESP32-C3 mit offener RISC-V-Architektur und Bluetooth 5-Unterstützung. Im Jahr 2024 übernahmen wir Espressifs fortschrittlichsten Chip - den ESP32-C6 - der die Unterstützung des Thread/Zigbee-Protokolls hinzufügte. Jetzt verwendet unsere gesamte Robonomics-Smart-Home-GerätelinieESP32-C6-Chips. Diese Geräte sind alle kompatibel mit dem Open-Source-Smart-Home-Server Home Assistant. Benutzer können die Firmware einfach über unseren [Web-Flasher](https://webflasher.robonomics.network/) aktualisieren. Wir haben die Quelldateien für unsere Module in [unserem Github-Repository](https://github.com/airalab/hardware) veröffentlicht.

### Schalter

Traditionell werden verkabelte Gebäudeautomatisierungssysteme während des ursprünglichen Baus zusammen mit anderen elektrischen Netzwerken entwickelt. Wenn Ihr Wohnsitz nicht auf diese Weise konzipiert wurde, erfordert das Hinzufügen intelligenter Geräte oft kostspielige Renovierungen. Unsere Schalter bieten eine Lösung: Implementieren Sie intelligente Steuerung ohne Renovierungen. Installieren Sie einfach den Schalter in eine Standard-Steckdosenbox, und er wird für den Home Assistant-Server zugänglich - und bringt intelligente Funktionen für traditionell verkabelte Räume.

<rb-image zoom src="./images/robonomics-open-hardware-origins/2-gang-switch.jpg" alt="" />

### Infrarot-Fernbedienung

Infrarot-Transceiver dominieren seit langem den Markt für ferngesteuerte Haushaltsgeräte. Fast jedes Zuhause enthält solche Geräte - einschließlich Media-Playern, Klimaanlagen und vielen anderen. Um die Integration dieser Geräte in Smart-Home-Systeme zu vereinfachen, haben wir ein konfigurierbares Gateway entwickelt. Dieses Gateway ermöglicht es Ihnen, Ihre IR-gesteuerten Geräte einfach über das MQTT-Protokoll mit Ihrem Heimserver zu verbinden, alles durch einen unkomplizierten Konfigurationsprozess.

<rb-image zoom src="./images/robonomics-open-hardware-origins/ir-remote-control.jpg" alt="IR-Fernbedienung" />

### Energiemonitor

Energiesparen ist zweifellos eine der wichtigsten Funktionen eines Smart Homes. Während die Möglichkeit, jedes Gerät vom Sofa aus zu steuern, großartig ist, ist es noch befriedigender, Stromrechnungen zu erhalten, die dank historischer Daten zu Änderungen im Energieverbrauch um 15–20 % niedriger sind als üblich. Diese Motivation führte zur Entwicklung unseres ersten DIN-Schienenmontagegeräts – dem Branchenstandard für Automatisierung. Wie alle unsere Smart-Home-Geräte verbindet sich der Energy Monitor drahtlos mit dem Home Assistant-Server über das MQTT-Protokoll. Schauen Sie sich das [Demonstrationsvideo](https://www.youtube.com/watch?v=xtXIsORJGP0) an, das das Auspacken, die Einrichtung und die erste Verwendung des Monitors zeigt.

<rb-image zoom src="./images/robonomics-open-hardware-origins/energy-monitor.jpg" alt="Energiemonitor" />


## DIY & Industrierobotik

Anfang 2021 startete Robonomics das Robossembler-Projekt mit einem großen Ziel: die Art und Weise zu verändern, wie Industrieroboter hergestellt werden. Wir wollten uns auf Roboter zubewegen, die sich selbst bauen können. Während wir diesen Traum am Leben hielten, setzten wir ein praktischeres Ziel für 2021. Wir beschlossen, einen Open-Source-Roboterarm zu entwickeln, den jeder bauen und nutzen könnte. Dieser Arm sollte in der Lage sein, Dinge automatisch zusammenzubauen und könnte sogar Kopien von sich selbst herstellen. Das klassische Design eines Industrieroboters sieht nicht die Möglichkeit vor, ihn automatisch zusammenzubauen, daher mussten wir alle strukturellen Komponenten überarbeiten, angefangen beim Motor. Wir konzentrierten uns darauf, dieMotor, Getriebe und die Gesamtstruktur des Roboters. Dieser Prozess war herausfordernd und zeitaufwändig. Doch langsam beginnen wir, positive Ergebnisse unserer Bemühungen zu sehen. Unsere harte Arbeit beginnt sich auszuzahlen, und wir machen gute Fortschritte bei dem Projekt.

### Servo

Die meisten offenen Roboter-Manipulatoren verwendeten anfangs Schrittmotoren, die nicht ideal waren. Moderne proprietäre Roboter verwenden jetzt Servoantriebe mit integrierten Controllern für besseres Feedback. Unser Team hat einen benutzerdefinierten Servoantriebscontroller entwickelt, der für verschiedene Motorprojekte geeignet ist.


<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-servo-reducer-exploding-view-01.jpg" alt="Robossembler Servo Exploding View" />

<rb-image zoom src="./images/robonomics-open-hardware-origins/servo.jpg" alt="Robossembler Servo" />

Wir haben unseren Servoantrieb benutzerfreundlich für DIY-Enthusiasten gestaltet. Sie benötigen keine hochmoderne Werkstatt, um den Stator herzustellen. Anstelle von teurem Elektroblech für den Magnetkern verwenden wir normale DIN-Schrauben. Die Hauptteile des Rotors und Stators können mit einem 3D-Drucker hergestellt werden. Dies erleichtert es Hobbyisten erheblich, das Projekt zu Hause zu bauen. Die Quellen sind in unserem Repository unter [gitlab](https://gitlab.com/robossembler/servo) verfügbar.

### Wickelmaschine

Während der Motorentwicklung haben wir anfangs mehrere Stators von Hand gewickelt - ein äußerst arbeitsintensiver Prozess. OhneMit viel Zögern haben wir beschlossen, eine spezialisierte Maschine für das automatische Wickeln von Statorspulen zu entwickeln. Das Ergebnis? Eine bemerkenswert kostengünstige Lösung für rund 150 $. Derzeit handelt es sich um die weltweit erste Open-Source-Wickelmaschine. Wir haben sie mit Zugänglichkeit im Sinn entworfen: Die meisten Teile sind 3D-druckbar. Sie können den gesamten Prozess - vom Zusammenbau bis zum erstmaligen 8-stündigen Wickeln des Stators in dieser [Video](https://youtu.be/5glGYkbpT6w?si=H6iFg7i56K8elXjw) verfolgen. Quellen sind in unserem Repository unter [gitlab](https://gitlab.com/robossembler/cnc/motor-wire-winder) verfügbar.

<rb-image zoom src="./images/robonomics-open-hardware-origins/winder.jpg" alt="Motor Wire Winder" />

Nun, da wir die grundlegendsten Aufgaben gelöst haben - die Entwicklung des Motors und der Ausrüstung für seine Produktion, können wir voranschreiten! Im Jahr 2025 planen wir, den Robossembler Arm zu testen, einen vollständig Open-Source 6-Achsen-Roboter-Manipulator. Wir haben bereits ein einzigartiges Getriebe mit einem Übersetzungsverhältnis von 1:43 entwickelt, das die erforderliche Kraft für den Roboter auch mit unserem DIY-Motor bereitstellen wird!

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-arm.jpg" alt="Robossembler Arm" />


## Was kommt als Nächstes?

Wir machen hier nicht halt- Wir haben große Pläne für 2025! Wir werden viele weitere Geräte herstellen. Derzeit können Sie unsere neue Hardware für Cyberpunks-Linie unter [robonomics.network/devices](https://robonomics.network/devices/) überprüfen. Diese neue Linie wird mehrere Geräte umfassen, einschließlich der Altruist-Station, über die wir bereits gesprochen haben. Hier ist, woran wir noch arbeiten:

- RISC-V Smart Home Server. Der offenste Smart-Home-Server, betrieben von RISC-V, mit einer Web3-Cloud, die die Google-Server unter der Haube ersetzt. Smart WI-FI MQTT-Geräte mit Open-Source-Firmware Tasmota auf dem Board, voll kompatibel mit Home Assistant.
- Hikikomori Tamagotchi. Eine intelligente tragbare Station, die den Status von Sensoren aus Ihrem Zuhause oder Ihrer Kleidung überprüft.
- Smart Safe. Ein Safe, der mit einem Smart Contract basierend auf benutzerdefinierten Bedingungen entsperrt wird. Sehen Sie sich Protokolle der Öffnungen und Schließungen des Safes an. Programmieren Sie den Safe nach Ihren Bedürfnissen, z. B. Zugriff auf vertrauenswürdige Konten nach einer längeren Inaktivitätszeit zu gewähren.