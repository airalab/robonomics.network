---
title: Testando l’EVM di Neon con gli Smart Contract di Robonomics
date: 2022-10-03
published: true
locale: 'it'
tags: ['Robonomics in Ethereum', 'Collaborations', 'Smart Contracts', 'Neon']
cover_image: ./images/testing-neon-with-robonomics/blog_cover_neon_multi-agent.jpg
description: "Lo scopo di questi test è stato quello di validare quanto la piattaforma Neon fosse pronta per passare alla fase di produzione utilizzando gli smart contract di Robonomics, che consentono ai sistemi cyber-fisici (robot) di effettuare transazioni tecnico-economiche."
abstract: ""
---

## TL;DR

Lo scopo di questi test è stato quello di validare quanto la piattaforma  [Neon](https://neon-labs.org/) fosse pronta per passare alla fase di produzione utilizzando gli smart contract di Robonomics, che consentono ai sistemi cyber-fisici (robot) di effettuare transazioni tecnico-economiche.

Nel Robonomics Network, l’interazione è stabilita fra due parti: Promisee — chi ordina il servizio, invia una descrizione dell’attività tecnica e trasferisce i fondi per la sua esecuzione; Promisor — chi esegue un servizio. È stato testato un tipico scenario dove un contratto di responsabilità viene concluso fra un Promisee e un Promisor, seguito poi dalla validazione (effettuata da una terza parte) del lavoro conseguente e dal pagamento di una commissione al nodo che ha seguito il contratto fra le parti.

Per questo esempio è stata utilizzata la simulazione di un braccio robotico, a cui è stato chiesto di eseguire una sequenza di azioni. I test hanno avuto esito positivo.

## SCOPO E OBIETTIVI DEL TEST

Gli ingegneri di [Multi-Agent Systems](https://multi-agent.io/) lavorano da diversi anni con [Robonomics Network](https://robonomics.network/). La prima implementazione del Robonomics Network è stata creata per la rete Ethereum ed è un insieme di smart contract per la comunicazione da macchina a macchina.

Il fulcro di Robonomics è il contratto di Responsabilità ([Liability](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Liability.sol)) uno smart contract che riproduce la tipica relazione fra il cliente di un servizio (Promisee) e il fornitore del servizio stesso (Promisor) e comprende i parametri tecnici ed economici della loro transazione. Le parti possono essere un agente autonomo e una persona (interazione uomo-macchina) o due agenti autonomi (interazione macchina-macchina). Il Promisee e il Promisor trasmettono messaggi con i parametri della loro transazione tecnico-economica, che viene fornita da un apposito nodo — il Provider — che ricerca una corrispondenza nei parametri. I Provider sono controllati da un [Lighthouse](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Lighthouse.sol), uno speciale smart contract che esegue una transazione quando il provider stabilisce una corrispondenza di mercato fra le parti.

Esistono tre scenari dove può avvenire l’adempimento di un’obbligo:

1. Un semplice impegno (senza verifica del risultato finale e senza commissioni pagate ai nodi Provider)
2. Obbligo con una commissione pagata al Provider
3. Impegno con commissione al Provider e validazione dei risultati con l’aiuto di una terza parte, l’observing network.

Lo scopo di questo test è verificare il terzo scenario di Robonomics sulla piattaforma EVM Neon.

## DESCRIZIONE DEGLI SCENARI DI PROVA

Mentre sviluppiamo le zone industriali e le infrastrutture delle città moderne, l’emergere di imprese e servizi completamente automatizzati, controllati da sistemi cyber-fisici (CPS) e che forniscono i loro servizi come agenti autonomi è estremamente probabile. In tal senso, possiamo aspettarci anche la creazione di reti di CPS autonomi al fine di aumentare la velocità e la qualità della comunicazione nel processo di produzione e fornitura dei servizi.

Per sfruttare appieno le possibilità degli smart contract, è stato scelto uno scenario di interazione fra due agenti economici autonomi. Considera il ciclo di vita della responsabilità nel Robonomics Network:

![Liability Life Cycle](./images/testing-neon-with-robonomics/step-by-step-3.jpg)

La figura qui sopra mostra come il provider di Robonomics chiami il contratto Lighthouse, che a sua volta chiama la [contract factory](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Factory.sol) per creare il Liability contract. Il contratto di Responsabilità contiene i dati sulla transazione, come i termini di riferimento, il pagamento del servizio, l’indirizzo del validatore e la scadenza.

Per saperne di più sui possibili casi d’uso di Robonomics, dai un’occhiata alla pagina [R&D](https://wiki.robonomics.network/docs/en/r-and-d-based-on-robonomics-network/#launching-a-drone-under-the-control-of-a-decentralized-computer)!

Per replicare tutta infrastruttura Robonomics su rete Neon, implementeremo lo scenario dell’avvio di un robot tramite un contratto di responsabilità simile a quello in [questo](https://wiki.robonomics.network/docs/en/kuka/) esempio. Se lo script può essere ripetuto, tutte le funzioni funzioneranno.

## PRODOTTI FINALI

Il codice sorgente dei contratti Robonomics è disponibile [qui](https://github.com/airalab/robonomics_contracts).
I contratti utilizzano molte funzionalità della Ethereum VM, che includono:

- Token [XRT](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/XRT.sol) ERC20
- [Factory](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Factory.sol)
- Contratto proprietario per [ENS](https://github.com/airalab/robonomics_contracts/blob/master/contracts/ens/ENS.sol)
- [Proxy](https://github.com/airalab/robonomics_contracts/blob/master/contracts/misc/SharedCode.sol) dei contratti
- Vari modificatori e ruoli nei contratti

Indirizzi dei contratti nella devnet Neon https://devnet.neonevm.org

| Contract Name  | Address                                    |
|----------------|--------------------------------------------|
| Migrations     | 0x1DC538bE2C8572509a571B150f11aB55E52EF12E |
| ENS            | 0xa7AEa12F60D0278F01e14DBC7cc459d04d051406 |
| DutchAuction   | 0xF44F8803548D72Dbc3E28340EFD7b5328aa4F058 |
| Liability      | 0xA694196351dc1488e3884eCc6b650F0d8D55346a |
| Lighthouse     | 0x80FB5CC4c396E272b56700E6ffF5DBf4661013A8 |
| XRT            | 0x3322d7D99cF65Cab5A92073c928b5E9674af3c29 |
| PublicAmbix    | 0x85c03bE5ccFf11E79a0A776D183eF067590549d1 |
| Factory        | 0xCFa833bF0D46369D9024f95c9C8dFa1E4a07806C |
| PublicResolver | 0xAC9E9AA8A4cB524FE87f2b14489F1D6bE68dc46e |

[Codice sorgente](https://github.com/Multi-Agent-io/neon-kuka-demo) dello scenario.

## MODIFICHE APPORTATE AI CONTRATTI ORIGINALI

Gli smart contract sono scritti per Solidity 0.5.0. e per tanto, non sono state necessarie modifiche durante la distribuzione e l’utilizzo dei contratti.

## WORKFLOW DEL TESTING

In generale, il test consiste nell’invio di messaggi corrispondenti da un agente all’altro.

Successivamente, il Promisor trova un nuovo contratto di responsabilità nella rete e inizia ad eseguirlo. Al termine dei lavori, viene inviato un messaggio con l’esito, che viene poi registrato nel contratto.

Trovate le istruzioni dettagliate per l’avvio nel [README.md](https://github.com/Multi-Agent-io/neon-kuka-demo/blob/main/README.md)

## I RISULTATI DEI TEST IN DETTAGLIO

Screencast del processo

https://youtu.be/fYJVF7KrNnI

![Liability](./images/testing-neon-with-robonomics/liability.jpg)

All’avvio della simulazione viene creato un messaggio di offerta e un messaggio di domanda arriva dal Promisee, dopodiché viene creato un contratto di Responsabilità utilizzando la funzione createLiability del contratto Lighthouse. I token vengono poi trasferiti dall’indirizzo del Promisee all’indirizzo del Liability contract con l’aiuto del contratto XRT.

Dopo che un nuovo contratto di responsabilità viene scoperto sulla devnet di Neon l’agente inizia a lavorare. Il risultato del lavoro (telemetria) viene scritto in un file e inviato a IPFS, mentre l’hash del file viene salvato di conseguenza.

Quando il lavoro è completato, il contratto di Responsabilità viene finalizzato utilizzando la funzione finalizeLiability() del Lighthouse contract e i token vengono trasferiti dall’indirizzo di Responsabilità agli indirizzi del Promisor e del Validatore.

La corretta esecuzione della simulazione ha mostrato che tutti i contratti e la piattaforma Neon funzionavano perfettamente.

## INCONVENIENTI DELLA PIATTAFORMA NEON

### IL TRUFFLE FALLISCE SE NON RICEVE RISPOSTA DALLA RETE

Durante il processo di distribuzione dei contratti, si è scoperto che il proxy non restituisce sempre una risposta in tempo, motivo per cui il Truffle termina con un errore:


```
TypeError: Cannot read properties of null (reading 'from')                                    
    at Web3InterfaceAdapter.<anonymous> (/usr/lib/node_modules/truffle/build/webpack:/packages
/interface-adapter/dist/adapter/web3/index.js:71:1)                                           
    at Generator.next (<anonymous>)                                                           
    at fulfilled (/usr/lib/node_modules/truffle/build/webpack:/packages/interface-adapter/dist
/adapter/web3/index.js:5:43)                                                                  
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Truffle v5.5.23 (core: 5.5.23)
Node v16.14.0
```

Non è stato possibile trovare una relazione fra le condizioni del test e il verificarsi di un errore, ma molto probabilmente la Neon EVM non può inviare una ricevuta di transazione e il Truffle non può elaborare una risposta Null.

Se aggiungiamo un timeout e riproviamo qui [index.ts#L75](https://github.com/trufflesuite/truffle/blob/develop/packages/interface-adapter/lib/adapter/web3/index.ts#L75), allora la distribuzione dovrebbe procedere senza errori.

### NESSUN ENDPOINT WS/WSS

A differenza di Ethereum, la Neon EVM non ha un endpoint WS/WSS, il che rende impossibile sottoscrivere gli eventi dalla rete. Durante i test abbiamo quindi monitorato gli eventi manualmente.

### NESSUN EVENT NAMES

La Neon EVM restituisce descrizioni degli eventi piuttosto scarse dopo una transazione, ad esempio:

```
 events: {
    '0': {
      address: '0xCFa833bF0D46369D9024f95c9C8dFa1E4a07806C',
      transactionHash: '0x9894a984e6b3f6ce469c8837e11739f6e50d00216cf7c5bc3d32da106a58d50a',
      transactionLogIndex: '0x1',
      blockHash: '0x72040f317d3a469d30327d4e1def903790b70dbede46b4f0ea4f28f30a679a80',
      blockNumber: 156073183,
      transactionIndex: 0,
      logIndex: 1,
      id: 'log_e51e2f9f',
      returnValues: Result {},
      event: undefined,
      signature: null,
      raw: [Object]
    },
...
```


Invece di 0, 1, ecc. ci aspettavamo di vedere degli eventi con un nome.

## CONCLUSIONE

Utilizzando la piattaforma Neon EVM, è stato testato con successo uno scenario in base al quale si conclude un contratto di responsabilità fra un Promisee e un Promisor, con con una terza parte che convalida il risultato del lavoro svolto. Con anche un Provider che ha verificato la coincidenza di domanda e offerta tra le parti e ha ricevuto una commissione per il servizio.

La dimostrazione ha utilizzato la simulazione di un braccio robotico che è stato assunto per eseguire una sequenza di azioni. A seguito del lavoro, il robot ha inviato un file con la telemetria ricevuta durante l’attività.

Nonostante alcune particolarità nel funzionamento della rete, alla fine tutti i contratti partecipanti hanno mostrato la loro operatività in ambiente Neon.



