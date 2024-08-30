---
title: Testing Neon EVM with Robonomics Smart Contracts
date: 2022-10-03
published: true
locale: 'ru'
tags: ['Robonomics в Ethereum', 'Сотрудничество', 'Умные контракты', 'Neon']
cover_image: ../images/testing-neon-with-robonomics/blog_cover_neon_multi-agent.jpg
description: "Целью настоящего тестирования была проверка платформы Neon на предмет её готовности к production stage с помощью умных контрактов Robonomics, которые позволяют кибер-физическим системам (роботам) заключать сделки на выполнение заложенного в них алгоритма"
abstract: ""
---

## TL;DR

Целью настоящего тестирования была проверка платформы [Neon](https://neon-labs.org/) на предмет её готовности к production stage с помощью умных контрактов Robonomics, которые позволяют кибер-физическим системам (роботам) заключать сделки на выполнение заложенного в них алгоритма.  

В сети Robonomics взаимодействие устанавливается между двумя сторонами: promisee - тот, кто заказывает услугу и передает техническое задание и средства на его исполнение; promisor - тот, кто исполняет услугу. Был проверен сценарий, когда контракт обязательства заключается между promisee и promisor с последующей валидацией результата работы третьей стороной и оплатой комиссии узлу, который сопроводил контракт между сторонами. 

В качестве примера использовалась симуляция робота-манипулятора, которому предложили выполнить последовательность действий. Тестирование прошло успешно. 

## Цели тестирования

Инженеры [Multi-Agent Systems](https://multi-agent.io/) работают с [Robonomics Network](https://robonomics.network/) уже несколько лет. Первая реализация реализация Robonomics Network была создана для сети Ethereum. Она представляет собой набор smart contracts для межмашинного взаимодействия. 

Ядром Robonomics Network является контракт [Liability](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Liability.sol) — умный контракт, который воспроизводит типичные отношения между заказчиком какой-либо услуги (Promisee) и исполнителем услуги (Promisor), и включает в себя технические и экономические параметры сделки между ними. Сторонами могут выступать как автономный агент и человек (human-to-machine interaction), так и чисто два автономных агента (machine-to-machine interaction). Promisee и Promisor транслируют сообщения с параметрами их спроса и предложения, а затем заключение сделки обеспечивается специальным узлом — провайдером — который ищет совпадения этих параметров. Провайдеры управляются [Lighthouse](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Lighthouse.sol) — специальным смарт-контрактом, который выполняет транзакцию, когда провайдер устанавливает рыночное соответствие между сторонами.

Существуют три сценария, по которым может проходить исполнение обязательства:

1. Простое обязательство (без проверки конечного результата и без комиссии провайдера за его работу)
2. Обязательство с комиссией провайдеру
3. Обязательство с комиссией провайдеру и с валидацией результатов с помощью третьей стороны — observing network.

Цель настоящего тестирования заключается в проверке самого сложного, третьего сценария Robonomics на платформе Neon EVM. 

## Описание тестового сценария

В работе промышленных зон и инфраструктуре современных городов весьма вероятно появление полностью автоматизированных предприятий и служб, которые контролируются кибер-физическими системами (КФС), и которые предоставляют свои услуги, как автономные агенты. В связи с этим можно ожидать также и формирование сетей из автономных КФС с целью повышения скорости и качества коммуникации в процессе производства и оказания услуг. 

Чтобы в полной мере воспользоваться возможностями умных контрактов был выбран сценарий взаимодействия двух автономных экономических агентов. Рассмотрим жизненный цикл обязательства в сети Robonomics: 

![Liability Life Cycle](../images/testing-neon-with-robonomics/step-by-step-3.jpg)

На рисунке выше показано, что провайдер сети Robonomics обращается к контракту Lighthouse, который в свою очередь вызывает [фабрику контрактов](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Factory.sol) для создания контракта Liability. Последний содержит в себе данные о сделки, такие как техническое задание, оплату за услугу, адрес валидатора и deadline. 

Чтобы узнать больше о возможных сценариях применения Robonomics ознакомтесь с нашими [R&D](https://wiki.robonomics.network/docs/en/r-and-d-based-on-robonomics-network/#launching-a-drone-under-the-control-of-a-decentralized-computer)

Повторяя всю инфраструктуру Robonomics в сети Neon, мы реализуем сценарий запуска робота через Liability контракт, аналогичный этому [примеру](https://wiki.robonomics.network/docs/en/kuka/). Если получится повторить сценарий, значит все функции работают.

## Практические результаты

Исходный код контрактов Robonomics доступен [здесь](https://github.com/airalab/robonomics_contracts).

Контракты используют множество функций Ethereum VM и включают в себя 

- Токен ERC20 [XRT](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/XRT.sol) 
- [Фабрику контрактов](https://github.com/airalab/robonomics_contracts/blob/master/contracts/robonomics/Factory.sol) 
- Собственный контракт для [ENS](https://github.com/airalab/robonomics_contracts/blob/master/contracts/ens/ENS.sol) 
- [Proxy](https://github.com/airalab/robonomics_contracts/blob/master/contracts/misc/SharedCode.sol) для контрактов 
- Различные модификаторы и роли в контрактах

Адреса контрактов в devnet сети Neon https://devnet.neonevm.org

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

[Исходный код](https://github.com/Multi-Agent-io/neon-kuka-demo) подготовленного сценария 

## Изменения, внесенные в исходные контракты

Контракты написаны для Solidity 0.5.0. Таким образом, никаких изменений при развертывании и использовании контрактов не требовалось.

## Процесс тестирования

В общем случае тест заключается в отправке соответствующих сообщений от одного и другого агента. 

Дальше, исполнитель находит новый контракт обязательства в сети и начинает его исполнение. По завершению работы отправляется сообщение с результатом, которое записывается в контракт.

Пошаговая инструкция по запуску находится в [README.md](https://github.com/Multi-Agent-io/neon-kuka-demo/blob/main/README.md)

## Результаты тестирования

Видео работы

https://youtu.be/fYJVF7KrNnI

![Liability](../images/testing-neon-with-robonomics/liability.jpg)

При запуске симуляции создаются сообщения оффера, а от клиента приходит сообщение деманда, после чего создается контракт Liability с помощью функции `createLiability` контракта Lighthouse. С помощью контракта XRT происходит перевод токенов с адреса заказчика на адрес контракта Liability. 

После того, как в тестовой сети Neon был обнаружен новый контракт Liability, агент начинает работу. Результат работы (телеметрия) записывается в файл и отправляется в IPFS, хэш от файла сохраняется в качестве результата.

После выполнения работы происходит финализация контракта Liability с помощью функции `finalizeLiability()` контракта Lighthouse и перевод токенов с адреса Liability на адреса исполнителя и валидатора.

Успешное выполнение симуляции показали, что все контракты отработали правильно и решение на Neon EVM работает.

## Недостатки платформы Neon

### Truffle завершается с ошибкой, если не получает ответ от сети

В процессе загрузки контрактов выяснилось, что proxy не всегда возвращает ответ вовремя, отчего Truffle завершается с ошибкой:

<rb-code>

```sh
TypeError: Cannot read properties of null (reading 'from')                                    
    at Web3InterfaceAdapter.(<anonymous>) (/usr/lib/node_modules/truffle/build/webpack:/packages
/interface-adapter/dist/adapter/web3/index.js:71:1)                                           
    at Generator.next (<anonymous>)                                                          
    at fulfilled (/usr/lib/node_modules/truffle/build/webpack:/packages/interface-adapter/dist
/adapter/web3/index.js:5:43)                                                                  
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
Truffle v5.5.23 (core: 5.5.23)
Node v16.14.0
```
</rb-code>

Не удалось найти зависимость между условиями тестирования и возникновением ошибки, но вероятнее всего Neon EVM не может отправить receipt транзакции, а Truffle не может обработать ответ Null. 

Если здесь [index.ts#L75](https://github.com/trufflesuite/truffle/blob/develop/packages/interface-adapter/lib/adapter/web3/index.ts#L75) добавить timeout и retry, то развертывание должно проходить без ошибок.

### Отсутствует WS/WSS Endpoint

У Neon EVM нет WS/WSS endpoint в отличие от Ethereum, что делает невозможным подписку на события из сети. Поэтому в ходе тестирования мы следили за событиями вручную.

### Нет поименованных событий

Neon EVM возвращает довольно скудные описания событий после транзакции, например:

<rb-code>

```sh
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
</rb-code>

Вместо 0, 1 и т.д. мы ожидали увидеть поименованные события.

## Заключение

На платформе Neon EVM был успешно проверен сценарий, когда контракт обязательства между promisee и promisor заключается с последующей валидацией результата работы третьей стороной. Дополнительно участвовал провайдер, который проверил совпадение спроса и предложения между сторонами, и получил за эту работу комиссию.

Для демонстрации использовалась симуляция робота-манипулятора, которого наняли на выполнение последовательности действий. В качестве результата работы робот отправил файл с телеметрией, полученной во время выполнения задачи. 

Несмотря на некоторые особенности в работе сети, в итоге все участвующие контракты показали свою работоспособность в среде Neon.
