---
title: "Robonomics Open Hardware Oorsprong"  
date: 2024-11-11  
published: true  
locale: 'nl'  
cover_image: ../images/robonomics-open-hardware-origins/cover.png  
description: "Nu we het Hardware for Cyberpunks-project lanceren, is het tijd om terug te kijken op onze hardwarereis sinds 2020. Dit essay onderzoekt de open hardwarebeweging van Robonomics."  
abstract: "Nu we het Hardware for Cyberpunks-project lanceren, is het tijd om terug te kijken op onze hardwarereis sinds 2020. Dit essay onderzoekt de open hardwarebeweging van Robonomics."  
tags: ['Roadmap', 'Slimme Woning']  
---  

Robonomics is altijd deels een "hardware" project geweest. Voor ons was blockchain de technologie waarmee apparaten echte economische agenten konden worden en financiële middelen konden gebruiken om veranderingen in het echte leven teweeg te brengen. Begonnen met de eerste dronevlucht, gelanceerd door een slim contract in 2016, hebben we nooit gestopt met nadenken over echte hardware — hardware die de echte wereld kan waarnemen en beïnvloeden: sensoren en robots. Tegelijkertijd, met onze toewijding aan de open-source softwarebeweging, hebben we geprobeerd hardwareprojecten ook open te maken. Nu worden de blauwdrukken van alle apparaten die we ontwikkelen gepubliceerd onder open licenties.

Er is veel tijd verstreken sinds 2020, en nu is het het perfecte moment om terug te kijken op de interessante hardware die we hebben ontwikkeld. In dit essay zullen we de geschiedenis van de open hardwarebeweging in Robonomics herzien en de meest interessante ontwikkelingen uit het verleden, heden en de toekomst bespreken.

## Sensoren Netwerk - Luchtkwaliteit

Het civiele sensornetwerkproject begon in april 2020, toen we een speciale DApp ontwikkelden om alle sensoren die gegevens leveren aan het Robonomics-netwerk op een wereldkaart te bekijken. We realiseerden ons al snel dat om de beste gebruikerservaring te garanderen, een Plug&Play-oplossing nodig was, zodat iemand een sensor kon kopen, deze aansluiten en onmiddellijk lid van de community zou worden zonder diepgaande kennis van programmeren en schakelingontwerpen. In augustus 2021 werd begonnen met de ontwikkeling van een luchtkwaliteitsensor, en enkele maanden later kregen we het eerste prototype, dat een SDS011 PM2.5/PM10 laserdeeltjesensor en een populaire DHT22 (AM2302) temperatuur- en vochtigheidssensor bevatte.

<rb-image zoom src="./images/robonomics-open-hardware-origins/air-quality-station.jpg" alt="Sensoren Netwerk Luchtkwaliteits Hardware" />

In de afgelopen drie jaar heeft het apparaat uitgebreide wijzigingen ondergaan, wat heeft geleid tot de laatste incarnatie: het "Altruist" Civiele Monitoringstation. Deze slimme sensor verzamelt omgevingsdata - waaronder geluidsniveaus, stofdeeltjes en temperatuur - en slaat deze op op een gedecentraliseerde [sensorenkaart](https://sensors.social/). Het station kan worden uitgebreid met sensoren die een I2C-interface gebruiken: BMP180 — temperatuur en vochtigheid, BME/P280 — temperatuur, vochtigheid, atmosferische druk, HTU21D — temperatuur en vochtigheid, CCS811 VOC SENSOR — vluchtige organische stoffen, CO2-equivalent en sensoren met een 1-Wire-interface: DS18B20 — temperatuur.

<rb-image zoom src="./images/robonomics-open-hardware-origins/altruist-hq.jpg" alt="Altruist Luchtstation" />

We hebben veel educatief materiaal over het sensornetwerk op de [Robonomics Academia](https://robonomics.academy/en/learn/sensors-connectivity-course/overview/) websites en in de [Wiki](https://wiki.robonomics.network/docs/sds-sensor-connect/). De [video](https://www.youtube.com/watch?v=OdTd1sacCso) toont hoe je je eigen individuele monitoringstation kunt maken met onze modules en verbinding kunt maken met het civiele monitoringsensoren-netwerk.

## Cyber-Economie - Getokeniseerde Koffiemachine

Naast het wereldwijde sensornetwerk, overwegen we ook scenario’s voor het gebruik van Robonomics voor huishoudapparaten. Een van de eerste projecten op dit gebied was een blockchain-verbonden koffiemachine, gelanceerd in oktober 2021. Ja, dit was geen ontwikkeling in de traditionele zin van het woord, maar eerder hacken. We gebruikten seriële modellen van koffiemachines en onze technische vaardigheden om deze machines Web3-compatibel te maken.

<rb-image zoom src="./images/robonomics-open-hardware-origins/robonomics-coffee-maker.jpg" alt="Robonomics Koffiemachine" />

Deze hardwareproject bevatte echter alle Robonomics-innovaties die op dat moment beschikbaar waren:

- Lichtgewicht Robonomics-substraatknooppunt op een single-board computer
- Real World Asset (RWA) in de vorm van koffie-tokens, uitgegeven op de Statemine-parachain wanneer een nieuw pakket koffie wordt ontvangen en gelijkmatig wordt verdeeld onder de teamleden in het kantoor
- Praktische toepassing van de aansprakelijkheidsstelling om de interactie tussen vraag- en aanbodagenten te vereenvoudigen — met deze functie zocht de koffiemachine naar de meest winstgevende koffieleveranciers

Je kunt meer lezen over dit fascinerende project [hier](https://robonomics.network/cases/blockchain-coffee-machine/) en in Sergey Lonshakov's blog op Medium [Coworking for crypto-anarchists](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d)

## Slimme Woning Apparaten

In 2022 begonnen we met de ontwikkeling van veilige en private slimme woningoplossingen op basis van Web3-technologieën. We richtten ons op draadloze communicatie en creëerden een reeks op afstand bedienbare apparaten die compatibel zijn met de gedecentraliseerde Robonomics-cloud. Onze reis begon met de populaire ESP8266 WiFi-chip van Espressif Systems. We gingen vervolgens verder met de veelzijdigere ESP32-C3, met open RISC-V-architectuur en Bluetooth 5-ondersteuning. In 2024 introduceerden we de meest geavanceerde chip van Espressif — de ESP32-C6 — die de ondersteuning voor het Thread/Zigbee-protocol toevoegde. Nu gebruikt onze hele lijn van Robonomics slimme woningapparaten ESP32-C6-chips. Deze apparaten zijn allemaal compatibel met de open-source slimme woningserver Home Assistant. Gebruikers kunnen de firmware eenvoudig bijwerken via onze [Web Flasher](https://webflasher.robonomics.network/). We hebben de bronbestanden voor onze modules gepubliceerd in [onze Github-repository](https://github.com/airalab/hardware).

### Schakelaars

Traditioneel worden bedrade gebouwautomatiseringssystemen ontworpen samen met andere elektrische netwerken tijdens de initiële constructie. Als je woning niet op deze manier is ontworpen, vereist het toevoegen van slimme apparaten vaak kostbare renovaties. Onze schakelaars bieden een oplossing: implementeer intelligente bediening zonder renovaties. Installeer de schakelaar eenvoudig in een standaard stopcontactdoos, en deze wordt toegankelijk voor de Home Assistant-server—en brengt slimme woningfunctionaliteit naar traditioneel bedrade ruimtes.

<rb-image zoom src="./images/robonomics-open-hardware-origins/2-gang-switch.jpg" alt="" />

### Infra-Rood Afstandsbediening

Infraroodzenders domineren al lang de markt voor op afstand bediende huishoudelijke apparaten. Bijna elk huis bevat dergelijke apparaten — inclusief mediaspelers, airconditioners en vele anderen. Om de integratie van deze apparaten in slimme woningnetwerken te vereenvoudigen, hebben we een configureerbare gateway ontwikkeld. Deze gateway maakt het eenvoudig om je IR-gestuurde apparaten aan je thuisserver te verbinden via het MQTT-protocol, alles via een eenvoudige configuratieprocedure.

<rb-image zoom src="./images/robonomics-open-hardware-origins/ir-remote-control.jpg" alt="IR Afstandsbediening" />

### Energie Monitor

Energiebesparing is ongetwijfeld een van de belangrijkste functies van een slimme woning. Hoewel de mogelijkheid om elk apparaat te bedienen zonder je bank te verlaten geweldig is, is het nog bevredigender om elektriciteitsrekeningen van 15–20% lager te ontvangen dan normaal, dankzij historische gegevens over veranderingen in energieverbruik. Deze motivatie leidde tot de ontwikkeling van ons eerste DIN-rail-monteerbare apparaat — de industriële standaard voor automatisering. Net als al onze slimme woningapparaten, verbindt de Energie Monitor draadloos met de Home Assistant-server via het MQTT-protocol. Bekijk de [demonstratievideo](https://www.youtube.com/watch?v=xtXIsORJGP0) die het uitpakken, de installatie en het eerste gebruik van de monitor toont.

<rb-image zoom src="./images/robonomics-open-hardware-origins/energy-monitor.jpg" alt="Energie Monitor" />

## DIY & Industriële Robotica

Begin 2021 begon Robonomics met het Robossembler-project met een groot doel: de manier veranderen waarop industriële robots worden gemaakt. We wilden robots creëren die zichzelf konden bouwen. Terwijl we deze droom levend hielden, stelden we in 2021 een meer praktisch doel. We besloten een open-source robotarm te creëren die iedereen kon bouwen en gebruiken. Deze arm zou in staat zijn om dingen automatisch in elkaar te zetten en misschien zelfs zichzelf te kopiëren. Het klassieke ontwerp van een industriële robot bevat niet de mogelijkheid om zichzelf automatisch samen te stellen, dus moesten we alle structurele componenten herzien, te beginnen met de motor. We richtten ons op het verbeteren van de motor, de versnellingsbak en de algehele structuur van de robot. Dit proces was uitdagend en tijdrovend. Maar we beginnen nu positieve resultaten te zien

 van onze inspanningen. Ons harde werk begint zich uit te betalen en we maken goede vooruitgang met het project.

### Servo

De meeste open robotmanipulatoren gebruikten aanvankelijk stappermotoren, die niet ideaal waren. Moderne eigendomsrobots gebruiken nu servoaandrijvingen met geïntegreerde controllers voor betere feedback. Ons team ontwikkelde een aangepaste servoaandrijvingscontroller die toepasbaar is op verschillende motortoepassingen.

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-servo-reducer-exploding-view-01.jpg" alt="Robossembler Servo Exploding View" />

<rb-image zoom src="./images/robonomics-open-hardware-origins/servo.jpg" alt="Robossembler Servo" />

We hebben onze servoaandrijving zo ontworpen dat deze gebruiksvriendelijk is voor doe-het-zelf enthousiastelingen. Je hebt geen hightechwerkplaats nodig om de stator te maken. In plaats van duur elektrisch staal voor de magnetische kern, gebruiken we gewone DIN-schroeven. Je kunt de belangrijkste onderdelen van de rotor en stator maken met een 3D-printer. Dit maakt het veel gemakkelijker voor hobbyisten om het project thuis te bouwen. Bronnen zijn beschikbaar in onze repository op [gitlab](https://gitlab.com/robossembler/servo).

### Wikkelmachine

Tijdens de motorontwikkeling wikkelden we aanvankelijk verschillende statoren met de hand — een uiterst arbeidsintensief proces. Zonder aarzeling besloten we een gespecialiseerde machine te creëren voor het automatisch wikkelen van statorwikkelingen. Het resultaat? Een opmerkelijk kosteneffectieve oplossing van ongeveer $150. Momenteel is dit de eerste open-source wikkelmachine ter wereld. We hebben deze ontworpen met toegankelijkheid in gedachten: de meeste onderdelen zijn 3D-printbaar. Je kunt het volledige proces zien — van assemblage tot de eerste 8-uurs statorwikkeling van de machine — in deze [video](https://youtu.be/5glGYkbpT6w?si=H6iFg7i56K8elXjw). Bronnen zijn beschikbaar in onze repository op [gitlab](https://gitlab.com/robossembler/cnc/motor-wire-winder).

<rb-image zoom src="./images/robonomics-open-hardware-origins/winder.jpg" alt="Motor Wikkelaar" />

Nu we de meest basale taken hebben opgelost - het ontwikkelen van de motor en apparatuur voor de productie ervan, kunnen we vooruitgaan! In 2025 plannen we de test van de Robossembler Arm, een volledig open-source 6-assige robotmanipulator. We hebben al een unieke versnellingsbak ontwikkeld met een overbrengingsverhouding van 1:43, die de benodigde kracht voor de robot zal leveren, zelfs met onze doe-het-zelf motor!

<rb-image zoom src="./images/robonomics-open-hardware-origins/robossembler-arm.jpg" alt="Robossembler Arm" />

## Wat komt er?

We stoppen hier niet - we hebben grote plannen voor 2025! We gaan nog veel meer apparaten maken. Je kunt nu onze nieuwe Hardware for Cyberpunks-lijn bekijken op [robonomics.network/devices](https://robonomics.network/devices/). Deze nieuwe lijn zal verschillende apparaten bevatten, inclusief het Altruist-station waar we het al over hadden. Hier is wat we nog meer aan het ontwikkelen zijn:

- RISC-V Slimme Woningserver. De meest open-source slimme woningserver, aangedreven door RISC-V, met een Web3-cloud die Google-servers onder de motorkap vervangt. Slimme WI-FI MQTT-apparaten met open-source firmware Tasmota aan boord volledig compatibel met Home Assistant.
- Hikikomori Tamagotchi. Een slimme draagbare station die de status van sensoren in je huis of kleding controleert.
- Slimme Kluis. Een kluis die opent met een slim contract op basis van door de gebruiker gedefinieerde voorwaarden. Bekijk de logboeken van de openen en sluiten van de kluis. Programmeer de kluis om aan je behoeften te voldoen, zoals toegang verlenen aan vertrouwde accounts na een langere periode van inactiviteit. .