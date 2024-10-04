---
title: Gehacktes Johnny's Labor
date: 2024-06-25
published: true
locale: 'de'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ../images/hacked-johnnys-lab/cover.png
description: Es gab kürzlich eine Veranstaltung „Hack Johnny's Lab“ von Robonomics und ich glaube, ich habe es irgendwie gehackt! Abgesehen vom allerersten Versuch, den ich aufgrund eines Regelmissverständnisses verloren habe, habe ich jede Runde gewonnen, an der ich teilgenommen habe, und hier ist eine kurze „Anleitung“.
abstract: "Hallo! PaTara am Apparat. Es gab kürzlich eine Veranstaltung „Hack Johnny's Lab“ von Robonomics und ich glaube, ich habe es irgendwie gehackt! Abgesehen vom allerersten Versuch, den ich aufgrund eines Regelmissverständnisses verloren habe, habe ich jede Runde gewonnen, an der ich teilgenommen habe, und hier ist eine kurze „Anleitung“. "
---

Also, eine kurze und notwendige Zusammenfassung der Regeln: 12 Wörter in gemischter Reihenfolge, ein 5-minütiges Video von einem TurtleBot 4, der in einem Labor umherwandert
und die Wortreihenfolge der Eselsbrücke durcheinanderbringt, 5-20 Teilnehmer, die gewinnen wollen, und ein freier Sonntag, um sich eine Strategie auszudenken.

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

Ich kenne mich ein wenig mit Programmierung aus und habe einen anständigen Laptop und fast keine Fähigkeiten in der Bilderkennung. Mehr als das, 
Ich habe beschlossen, fair zu spielen, was bedeutet, kein Herunterladen von Videos, kein Missbrauch der Wiedergabegeschwindigkeit, keine Navigation durch die Wiedergabefortschrittsleiste. 
Also war die gewählte Strategie ein guter alter Brute-Force. Klingt mehr nach Hacking als nach irgendetwas anderem.
Was haben wir hier: eine Menge von 12 Wörtern in gemischter Reihenfolge. Das gibt uns 12! (faktorielle) Möglichkeiten von Phrasen
(479'001'600 um genau zu sein). Eine ziemliche Menge zu verarbeiten!


## Strategie 1: dumm und geradlinig.

Naja, was brauche ich noch, einfach mal durchgehen und sortieren! Aber hier ist der erste Trick: 12! Merksätze passten einfach nicht rein
meine 64 GB RAM! Ich habe einen SIGTERM-Fehler in der IDE-Konsole erhalten. 
Also habe ich einen [Iterator](https://docs.python.org/3/library/itertools.html#itertools.permutations) erstellt und den Prozess gestartet.
Ich habe einige Zeit gebraucht, ich weiß nicht genau, wie viel, aber es dauerte ungefähr 30 Sekunden, bis ich die Anzahl der Kombinationen berechnet hatte.
Nur ein evaluativer Lauf. Aber das Ding ist: Mein Laptop hat nicht einmal seine Lüfter auf Maximum gedreht! Ein einziger Kern war belastet. 

Ich habe ein Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) Paket gegoogelt, um alle 
logischen Kerne meiner CPU (20 davon) zu parallelisieren. Andernfalls wäre es eine ewige Reise gewesen. 
Aber damit musste ich meinen Iterator in 12 Teile aufteilen. Die itertools multiprocessing-Pakete arbeiten zusammen, 
aber wenn ein ganzes Set von Optionen im RAM ist. Das war nicht mein Fall, also wurde das Folgende durchgeführt:

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


Ab diesem Moment und für immer würde ich diese Strategie verwenden, um meinen CPU-Auslastungsmonitor so aussehen zu lassen:

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


Ich glaube, dass dies die Ausführungszeit auf etwa 5 Sekunden verkürzt hat. Ich habe den besten Weg gefunden, um durch 
die Kombinationen zu iterieren, aber es gab einfach zu viele davon! Der erste Schritt bestand darin, ungefähr 480 Millionen 
Extrinsiken im Netzwerk durchzuführen. Der Knoten würde mich einfach für DDOS sperren und selbst ohne das würde es ewig dauern!

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


Nur aus Debugging-Gründen habe ich das Skript gestartet (für die Knotenkommunikation habe ich ein 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/) Paket verwendet) und bemerkt, dass vor dem Aufruf 
Ausführung erhielt ich Fehler wie _ungültige mnemonische Phrase_. Ein Hinweis! Wenn ich die Kombination vor Ort validieren könnte, 
Ich würde Tonnen von Zeit sparen! Das GitHub-Parsing führte mich zu 
[diesem](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
Codezeile und ich habe eine Kombinationsvalidierung zu meinem Skript hinzugefügt. Dies hat die Anzahl der potenziellen Extrinsiken auf ungefähr 39'000'000 12-mal schneller reduziert!
Aber trotzdem würden mich 39 Millionen Anrufe für immer sperren, also musste ich weiter graben. Wie könnte ich die

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


Anzahl der Berechnungen signifikant reduzieren? Nun, indem ich meine ursprüngliche Strategie ein wenig verrate. Sehen Sie, ich wollte das Ansehen von Videos vermeiden, 
„Ein Hacker, der nicht einmal ein Video braucht“, aber die Mathematik hat mich umgestimmt. Ändern Sie es in eine 132-mal schnellere Strategie. 
Nachfolgend die Erklärung: 
Dafür musste ich nur zwei richtige Positionen von Wörtern in einem Satz kennen (eine würde zu lange dauern, experimentell validiert).

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


Ich würde durch 10! Kombinationen iterieren, zwei Wörter an richtigen Positionen einfügen und den Satz validieren, 
wodurch die Optionen auf etwa 300'000 reduziert wurden, eine ziemliche Abnahme! Mehr noch, 10! Kombinationen passten in meinen RAM, ausgezeichnet! 
meinen eigenen lokalen Robonomics-Knoten mit der Kette synchronisiert und ihn nach dem Kontostand einer resultierenden Kontoadresse gefragt!

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


Anstatt zu versuchen, alle Token jeweils 300.000 Mal zu übertragen und dafür einen öffentlichen Knoten aufzurufen, habe ich beschlossen, Folgendes festzulegen:
Die Abfrage ist „einfacher“ als eine Extrinsik. Nach einer ganzen Nacht des Synchronisierens (ich habe ein Cache-Limit festgelegt, damit mein 
Abfragen sind viel „einfacher“ als extrinsische Transaktionen. Nach einer ganzen Nacht des Synchronisierens (ich habe ein Cache-Limit festgelegt, damit mein Laptop nicht mit Kettendaten in seinem ROM explodiert) habe ich es versucht und … es war eine Katastrophe. Netzwerktransaktionen
das Ansehen eines ganzen Videos. Wenn ich nur die genaue Adresse des Kontos kennen könnte! Aber dafür brauche ich eine mnemonische Phrase… **Oder brauche ich das wirklich?** 
ein ganzes Video ansehen. Wenn ich nur die genaue Adresse des Kontos wüsste! Aber dafür brauche ich eine Eselsbrücke… **Oder brauche ich das wirklich?**

Schau. Die Regeln besagen, dass das gewünschte Konto **genau** 42 XRT haben soll. Warum sollte ich nicht alle aktiven Adressen im Netzwerk bekommen,
filtere sie nach genau 42 XRT und vergleiche jede generierte Adresse mit einer Liste möglicher Ziele 
(ungefähr 20, die am Ende auf 1 reduziert werden). Leicht gesagt und getan. 

Jetzt, nachdem ich mein Skript noch einmal modifiziert habe, habe ich es endlich auf nur eine Abfrage und eine Transaktion gebracht, die mir sicherlich 
den gewünschten Preis geben würde.

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


Jetzt, nachdem ich 25 Sekunden des Videos angesehen habe (währenddessen die Wörter eines Mnemonics ausfüllend), 
bräuchte ich maximal 30 Sekunden, um die Belohnung zu stehlen. Gehackt.

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



