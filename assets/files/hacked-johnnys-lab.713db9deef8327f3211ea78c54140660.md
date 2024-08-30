---
title: Laboratorio di Johnny violato
date: 2024-06-25
published: true
locale: 'it'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ../images/hacked-johnnys-lab/cover.png
description: C'è stato di recente un evento “Hack Johnny’s Lab” di Robonomics e credo di averlo hackerato in un certo modo! A parte il primo tentativo che ho perso a causa di un fraintendimento delle regole, ho vinto ogni round a cui ho partecipato e qui c'è una breve storia su come ho fatto.
abstract: "Ciao! PaTara in linea. C'è stato di recente un evento “Hack Johnny’s Lab” di Robonomics e credo di averlo hackerato in un certo modo! A parte il primo tentativo che ho perso a causa di un fraintendimento delle regole, ho vinto ogni round a cui ho partecipato e qui c'è una breve storia su come ho fatto. "
---

Quindi, un breve e necessario riassunto delle regole: 12 parole in un ordine misto, un video di 5 minuti di un TurtleBot 4 che vaga per un laboratorio e rovina l'ordine delle parole della frase mnemonica, 5-20 partecipanti disposti a vincere e una domenica libera per escogitare una strategia.

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

Sono abbastanza familiare con la programmazione e ho un laptop decente e quasi nessuna competenza nel riconoscimento delle immagini. Oltre a ciò, 
ho deciso di giocare in modo leale, il che significa nessun download di video, nessun abuso di velocità di riproduzione, nessuna navigazione nella barra di riproduzione. 
Quindi la strategia scelta è stata una vecchia e buona forza bruta. Suona più come hacking che altro.
Cosa abbiamo qui: un set di 12 parole in un ordine misto. Questo ci dà 12! (fattoriale) opzioni di frasi
(479’001’600 per essere precisi). Una quantità piuttosto consistente da elaborare!


## Strategia 1: stupida e diretta.

Bene, cos'altro mi serve, basta andare e fare ordine! Ma ecco il primo trucco: 12! Le frasi mnemoniche non ci stavano proprio
i miei 64 GB di RAM! Ho ricevuto un errore SIGTERM nella console dell'IDE. 
Quindi ho creato un [iteratore](https://docs.python.org/3/library/itertools.html#itertools.permutations) e ho iniziato il processo.
Mi ci è voluto un po' di tempo, non so esattamente quanto, ma entro 30 secondi, per calcolare il numero di combinazioni.
Solo una corsa valutativa. Ma la cosa è: il mio laptop non ha nemmeno fatto girare i suoi ventilatori al massimo! Un singolo core era caricato. 

Ho cercato un pacchetto Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) per caricare tutti 
i core logici della mia CPU (20 di essi) per parallelizzare i calcoli. Altrimenti, sarebbe stato un viaggio eterno. 
Ma con questo ho dovuto dividere il mio iteratore in 12 parti. I pacchetti di multiprocessing di itertools funzionano insieme, 
ma quando un intero set di opzioni è nella RAM. Questo non era il mio caso, quindi è stato eseguito quanto segue:

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


Da quel momento in poi avrei usato questa strategia per far apparire il monitor del carico della CPU in questo modo:

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


Credo che questo abbia ridotto il tempo di esecuzione a circa 5 secondi. Ho trovato il modo migliore per iterare attraverso 
le combinazioni ma ce n'erano semplicemente troppe! Il primo passo consisteva nell'eseguire circa 480 milioni 
esterni nella rete. Il nodo mi avrebbe semplicemente bandito per DDOS e anche senza quello ci vorrebbe per sempre!

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


Solo per motivi di debug ho avviato lo script (per la comunicazione con il nodo ho usato un 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/) pacchetto) e ho notato che prima di chiamare 
eseguire ho ottenuto errori come _frase mnemonica non valida_. Un indizio! Se potessi convalidare la combinazione in premessa, 
risparmierei un sacco di tempo! Il parsing di GitHub mi ha portato a 
[questo](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
riga di codice e ho aggiunto una convalida della combinazione al mio script. Questo ha ridotto il numero di esterni potenziali a circa 39’000’000 12 volte più veloce!
Ma ancora, 39 milioni di chiamate mi bandirebbero per sempre, quindi ho dovuto scavare di più. Come potevo tagliare significativamente il

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


numero di calcoli? Beh, tradendo un po' la mia strategia iniziale. Vedi, stavo per evitare di guardare video, 
“un hacker, che nemmeno avrà bisogno di un video”, ma la matematica mi ha fatto cambiare idea. Cambiarla in una strategia 132 volte più veloce. 
Di seguito è spiegato: 
Con questo dovevo solo conoscere due posizioni corrette delle parole in una frase (una richiederebbe troppo tempo, sperimento convalidato).

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


Avrei iterato attraverso un 10! combinazioni, inserito due parole nelle posizioni corrette e convalidato la frase, 
riducendo le opzioni a circa 300’000 una notevole diminuzione! Inoltre, il set di combinazioni 10! si adattava alla mia RAM, eccellente! 
il mio nodo Robonomics locale sincronizzato con la catena e chiedergli il saldo di un account risultante!

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


Inoltre, invece di provare a trasferire tutti i token ogni 300k volte e chiamare un nodo pubblico per questo, ho deciso di impostare il mio nodo Robonomics locale sincronizzato con la catena e chiedergli un saldo dell'indirizzo del conto risultante! La query è molto più "facile" di un'estrinseca. Dopo un'intera notte di sincronizzazione (ho impostato un limite di cache in modo che il mio laptop non esplodesse con i dati della catena nella sua ROM), ci ho provato e... è stato un disastro. Le transazioni di rete (anche all'interno di un localhost) hanno richiesto troppo tempo. Non ho nemmeno aspettato fino alla fine, era ovviamente molto più lento che guardare un intero video. Se solo potessi conoscere l'indirizzo esatto del conto! Ma per quello ho bisogno di una frase mnemonica... **O forse sì?**

Guarda. Le regole dicono che l'account desiderato ha **esattamente** 42 XRT. Perché non dovrei ottenere tutti gli indirizzi attivi nella rete,
filtrarli avendo esattamente 42 XRT e confrontare ciascun indirizzo generato con un elenco di possibili obiettivi 
(circa 20, diminuendo a 1 alla fine). Facile da dire e da fare. 

Ora, dopo aver modificato di nuovo il mio script, sono finalmente riuscito a fare solo una query e una transazione che sicuramente 
mi darebbe il premio desiderato.

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


Ora, dopo aver guardato 25 secondi del video (nel frattempo compilando le parole di un mnemonico), 
avrei bisogno solo di 30 secondi al massimo per rubare la ricompensa. Hacked it.

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



