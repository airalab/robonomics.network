---
title: 'Release 2.0 & XCM-Unterstützung'
date: 2022-06-09
published: true
locale: 'de'
cover_image: ../images/release-2.0-&-xcm-support/cover.jpg
description: "Release 2.0 ist ein sehr wichtiger Meilenstein für unser Projekt und unsere Gemeinschaft da es die Möglichkeit bietet Robonomics mit anderen Parachains im Kusama Ecosystem zu integrieren. In den kommenden Monaten wird sich das Forschungs- und Entwicklungsteam des Projekts den Parachains Statemine, Karura, Moonriver, Crust und KILT widmen."
abstract: "Release 2.0 und XCM-Unterstützung sind da!"
tags: ['Robonomics Parachain', 'Fahrplan', 'Neue Version']
---

[Release 2.0](https://github.com/airalab/robonomics/releases/tag/v2.0.0) ist ein sehr wichtiger Meilenstein für unser Projekt und unsere Gemeinschaft da es die Möglichkeit bietet Robonomics mit anderen Parachains im Kusama Ecosystem zu integrieren. In den kommenden Monaten wird sich das Forschungs- und Entwicklungsteam des Projekts den Parachains Statemine, Karura, Moonriver, Crust und KILT widmen.

Wir haben die ersten Schritte der Parachain Kommunikation vor 1,5 Jahren während einer Masterclass in St. Petersburg unternommen, [indem wir den Austausch von Nachrichten zwischen zwei Blockchains demonstriert haben](https://wiki.robonomics.network/docs/en/cross-chain-messages/). Letztes Jahr [veröffentlichte Gav eine Reihe von Artikeln, in denen XCMP modifiziert wurde](https://medium.com/polkadot-network/xcm-the-cross-consensus-message-format-3b77b1373392) - es wurde in Cross-Consensus Messaging (XCM) umgewandelt und erhielt seine erste Versionsnummer über Null.

Zwei Monate nach dem Refactoring von XCM hat das Robonomics Team nun unsere Tests mit Rococo abgeschlossen und wir sind bereit für die Integration mit anderen Parachains im Kusama Ecosystem.


## Grundlegende Unterstützung für XCM in Robonomics

Da Kusama selbst ein heterogenes Netzwerk ist versuchen die Robonomics-Entwickler IoT/Robotik-spezifische Funktionen in den Code der Robonomics-Parachain zu implementieren.

Wir werden die Funktionen anderer Parachains, die bei der Umsetzung von Smart Home/City- oder Industrie Szenarien helfen können so weit wie möglich nutzen. Zum Beispiel planen wir in diesem Jahr die bestehenden Lösungen anderer Parachains zu nutzen (und nicht unsere eigenen Lösungen zu nutzen für): (1) persönliche Guthaben von Benutzerzugangstokens, (2) Dapp- und IoT-Geräte-Benutzeridentifikationssystem, (3) Speicherung großer Dateien, (4) Verwendung von IoT-Geräten in Arbeits-Smart Contracts.

Zum Zeitpunkt der Veröffentlichung von Version 2.0 ist Robonomics bereit für die Integration mit jeder Parachain die auf dem Kusama-Netzwerk läuft. Die Software-Implementierung der XCM v1-Unterstützung ist im [alpha runtime directory](https://github.com/airalab/robonomics/tree/master/runtime/alpha) des Robonomics-Hauptrepository auf Substrate zu finden.

Im Mai und Juni 2022 wurden bereits Kompatibilitätstests mit der Relaiskette auf dem Rococo Netzwerk durchgeführt indem der native Rococo-Relay-Chain-Token - ROC (analog zu KSM, aber auf dem Rococo-Testnetzwerk) - auf die Robonomics Parachain teleportiert wurde.

https://youtu.be/BJHSFDZt0y4

[Twittern](https://twitter.com/AIRA_Robonomics/status/1534081132765097984)

Wenn du Ideen zur Integration von Robonomics mit anderen Kusama-Parachains haben sende eine E-Mail an research@robonomics.network oder trete in unserem [Discord](https://discord.gg/atduhWZpVr) bei um in Haupt-Community Kanälen zu diskutieren.

## Integration mit Statemine

Das Hauptziel unserer Integration mit Statemine ist die vollständige Einführung der liability()-Funktion der Robonomics Parachain. Die liability()-Funktion ist der Robonomics Hauptfunktion in Ethereum sehr ähnlich die es dir ermöglicht einen vollständigen Zyklus zu organisieren - mit einem Roboter als Dienstleistung. Ab dem Zeitpunkt der Integration mit Statemine werden Entwickler von IoT-Anwendungen in der Lage sein ihr eigenes Token in Statemine zu erstellen (oder ein vorhandenes Statemine-Token zu verwenden) um ein bestimmtes Programm am Smart Device/Roboter zu starten. Nachdem das Benutzerprogramm ausgeführt wurde werden die Token automatisch auf das Guthaben des Roboters übertragen.

Bereits im Frühjahr haben wir ein einfaches Beispiel für die Verwendung von Token in Statemine gezeigt um eine Kaffeemaschine zu starten und eines der Szenarien für die Entwicklung der Tokenisierung des Zugangs zu Geräten in dem Artikel beschrieben: [Coworking für Krypto-Anarchisten, p1](https://blog.aira.life/coworking-for-crypto-anarchists-p1-5ebecb252f2d). Die Abrechnung der Nutzung von Geräten im Büro und die differenzierte Verteilung des Zugangs zu Geräten passt sehr gut zu Access Token in Verbindung mit der Funktion liability ().

Ein weiteres Beispiel für die Verwendung der Statemine-Integration mit Robonomics basierend auf unseren bestehenden Anwendungsfällen ist die Möglichkeit ein Teleskop zum Prägen von NFT-Postkarten zu verwenden. Heute werden die Benutzersalden in Statemine gespeichert und die NFTs werden dann mit RMRKs ausgegeben. Ab unserer Integration in Statemine wird das Teleskop in der Lage sein eine Aufgabe zur Erstellung eines Bildes über die Funktion Haftung () zu erhalten und die an das Teleskop gesendeten Zugriffstoken werden erst dann dem Guthaben des Teleskops gutgeschrieben wenn ein Link zu NFT hinzugefügt wurde.

Stand der Arbeiten: Q3 2022

## Integration mit Karura

Als langfristiger Planer sowohl des Ethereum- als auch des Dotsama Ecosystems glaubt Robonomics an die Integration dezentraler Tauschmittel für Robonomics parachain native token (XRT). Die Auflistung von XRT auf Karura Swap ist der ideale Weg um unserer Token Community zu ermöglichen parachain-native Token auf dezentrale Weise zu tauschen und die Öffnung dieser HRMP-Kommunikationskanäle ist der erste Schritt zur Erreichung dieses Ziels.

Eine der Ideen der Robonomics Entwickler für die weitere Integration mit Karura sind automatisierte Währungs- und Werttauschpunkte für Kusama-Netzwerk-Token. Wir werden darüber gesondert berichten auf jeden Fall aber nach dem ersten Schritt mit hinzufügen von XRT zu Karura Swap.

Stand der Arbeiten: Q3 2022

## Integration mit Moonriver

Die Robonomics-Parachain kann ein universeller Mechanismus zum Starten von Smart Devices aus Moonriver Smart Contracts werden. Wir arbeiten derzeit an dieser Architektur und diskutieren ein separates Szenario zum Ausgleich des CO2-Fußabdrucks unter Verwendung von [DAO IPCI Smart Contracts] ([https://github.com/DAO-IPCI/DAO-IPCI](https://github.com/DAO-IPCI/DAO-IPCI)) auf der Moonriver-Parachain.

Stand der Arbeiten: Q3 2022

## Integration mit KILT

Im Laufe der Jahre, in denen die Robonomics-Entwickler den Robotikmarkt untersucht haben sind sie sich einig, dass die Identifizierung von Geräten eine der wichtigsten Aufgaben ist wenn es um komplexe Szenarien für die Automatisierung des Stadtlebens, der Logistik und der industriellen Lieferketten geht. KILT ist ein hervorragendes Beispiel für die Fortsetzung der Arbeiten zur Integration der Funktionalität verschiedener Fälle innerhalb eines heterogenen Netzwerks und zur Lösung von Problemen die für den IoT-Markt von Bedeutung sind.

Stand der Arbeiten: Q4 2022
