---
title: Laboratório do Johnny Hackeado
date: 2024-06-25
published: true
locale: 'pt'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ../images/hacked-johnnys-lab/cover.png
description: Houve um evento recente “Hack Johnny’s Lab” pela Robonomics e eu acredito que consegui hackeá-lo de alguma forma! Além da primeira tentativa que perdi devido a um mal-entendido das regras, ganhei todas as rodadas das quais participei e aqui está uma breve história de “como fazer”.
abstract: "Olá! PaTara na linha. Houve um evento recente “Hack Johnny’s Lab” pela Robonomics e eu acredito que consegui hackeá-lo de alguma forma! Além da primeira tentativa que perdi devido a um mal-entendido das regras, ganhei todas as rodadas das quais participei e aqui está uma breve história de “como fazer”. "
---

Assim, uma rápida e necessária recapitulação das regras: 12 palavras em ordem mista, um vídeo de 5 minutos de um TurtleBot 4 a vaguear por um laboratório
e estragando a ordem das palavras da frase mnemónica, 5 a 20 participantes dispostos a ganhar e um domingo livre para pensar numa estratégia.

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

Eu sou meio familiarizado com programação e tenho um laptop decente e quase nenhuma habilidade em reconhecimento de imagem. Mais do que isso, 
Decidi jogar de forma justa, o que significa sem baixar vídeos, sem abuso de velocidade de reprodução, sem navegação na barra de reprodução. 
Então a estratégia escolhida foi um bom e velho bruteforce. Parece mais hacking do que qualquer outra coisa.
O que temos aqui: um conjunto de 12 palavras em uma ordem misturada. Isso nos dá 12! (fatorial) opções de frases 
(479’001’600 para ser preciso). Uma quantidade considerável para processar!


## Estratégia 1: burra e direta.

Bem, o que mais eu preciso, apenas vá e ordene! Mas aqui está o primeiro truque: 12! frases mnemônicas simplesmente não se encaixaram 
meus 64 GB de RAM! Recebi um erro SIGTERM no console do IDE. 
Assim, criei um [iterador](https://docs.python.org/3/library/itertools.html#itertools.permutations) e iniciei o processo.
Demorei algum tempo, não sei exatamente quanto, mas em 30 segundos, a calcular o número de combinações.
Apenas uma execução avaliativa. Mas o fato é: meu laptop nem chegou a girar seus ventiladores no máximo! Um único núcleo estava carregado. 

Pesquisei um pacote Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) para carregar todos 
os núcleos lógicos da minha CPU (20 deles) para paralelizar os cálculos. Caso contrário, teria sido uma jornada eterna. 
Mas com isso tive que dividir meu iterador em 12 partes. Os pacotes de multiprocessing do itertools funcionam juntos, 
mas quando um conjunto inteiro de opções está na RAM. Esse não era o meu caso, então o seguinte foi realizado:

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


A partir desse momento e sempre eu usaria essa estratégia para fazer meu monitor de carga da CPU parecer assim:

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


Acredito que isso reduziu o tempo de execução para cerca de 5 segundos. Descobri a melhor maneira de iterar através 
das combinações, mas havia simplesmente muitas delas! O primeiro passo envolveu realizar aproximadamente 480 milhões 
extrínsecos na rede. O nó simplesmente me baniria por DDOS e mesmo sem isso levaria uma eternidade!

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


Apenas por razões de depuração, iniciei o script (para comunicação com o nó usei um 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/) pacote) e notei que antes de chamar 
realizar eu recebia erros como _frase mnemônica inválida_. Uma pista! Se eu pudesse validar a combinação localmente, 
eu economizaria toneladas de tempo! A análise do GitHub me levou a 
[este](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
linha de código e adicionei uma validação de combinação ao meu script. Isso reduziu o número de extrínsecos potenciais para aproximadamente 39’000’000 12 vezes mais rápido!
Mas ainda assim, 39 milhões de chamadas me baniriam para sempre, então eu precisava cavar mais fundo. Como eu poderia cortar significativamente o

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


número de cálculos? Bem, traindo um pouco minha estratégia inicial. Veja, eu ia evitar assistir vídeos, 
“um hacker, que nem precisará de um vídeo”, mas a matemática me fez mudar de ideia. Mudar para uma estratégia 132 vezes mais rápida. 
Abaixo está a explicação: 
Com isso, eu só precisava saber duas posições corretas de palavras em uma frase (uma levaria muito tempo, validada por experimento).

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


Eu iteraria através de 10! combinações, inseriria duas palavras nas posições corretas e validaria a frase, 
reduzindo as opções para aproximadamente 300’000, uma grande diminuição! Além disso, o conjunto de 10! combinações cabia na minha RAM, excelente! 
meu próprio nó Robonomics local sincronizado com a cadeia e perguntaria a ele pelo saldo de uma conta resultante!

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


Além disso, em vez de tentar transferir todos os tokens 300 mil vezes a cada e chamar um nó público para isso, decidi definir
configurar o meu próprio nó Robonomics local sincronizado com a cadeia e solicitar o saldo do endereço da conta resultante!
A consulta é muito “mais fácil” do que uma consulta extrínseca. Depois de uma noite inteira de sincronização (defini um limite de cache para que o meu
portátil não explode com dados de string na sua ROM). Transações de rede
(mesmo dentro de um host local) demorava muito tempo. Nem esperei até ao fim, obviamente foi bem mais lento do que
assistindo a um vídeo inteiro. Se ao menos pudesse saber o endereço exato da conta! Mas para isso preciso de uma frase mnemónica... **Ou preciso mesmo?**

Olha. As regras dizem que a conta desejada tem **exatamente** 42 XRT. Por que eu não pegaria todos os endereços ativos na rede,
filtrá-los tendo exatamente 42 XRT e comparar cada endereço gerado com uma lista de possíveis alvos 
(cerca de 20, diminuindo para 1 no final). Fácil de dizer e fazer. 

Agora, depois de modificar meu script mais uma vez, finalmente consegui chegar a apenas uma consulta e uma transação que com certeza 
me daria o prêmio desejado.

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


Agora, depois de assistir 25 segundos do vídeo (enquanto preenchia as palavras de um mnemônico), 
eu só precisaria de 30 segundos no máximo para roubar a recompensa. Hackeado.

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



