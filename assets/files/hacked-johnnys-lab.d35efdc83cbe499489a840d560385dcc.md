---
title: Laboratoire de Johnny piraté
date: 2024-06-25
published: true
locale: 'fr'
tags: ['Events', 'Online school', 'Web3', ]
cover_image: ../images/hacked-johnnys-lab/cover.png
description: Il y a eu récemment un événement «Hack Johnny's Lab» par Robonomics et je crois l'avoir piraté d'une certaine manière! Mis à part la toute première tentative que j'ai perdue en raison d'une incompréhension des règles, j'ai gagné chaque tour auquel j'ai participé et voici une courte histoire «comment faire».
abstract: "Salut! PaTara à l'appareil. Il y a eu récemment un événement «Hack Johnny's Lab» par Robonomics et je crois l'avoir piraté d'une certaine manière! Mis à part la toute première tentative que j'ai perdue en raison d'une incompréhension des règles, j'ai gagné chaque tour auquel j'ai participé et voici une courte histoire «comment faire». "
---

Alors, un petit récapitulatif rapide et nécessaire des règles : 12 mots dans un ordre mixte, une vidéo de 5 minutes d'un TurtleBot 4 se promenant dans un laboratoire
et gâchant l'ordre des mots de la phrase mnémotechnique, 5 à 20 participants prêts à gagner et un dimanche libre pour réfléchir à une stratégie.

<rb-image zoom src="./images/hacked-johnnys-lab/0.png" alt="Game Interface" />

Je suis plutôt familier avec la programmation et j'ai un ordinateur portable décent et presque aucune compétence en reconnaissance d'image. De plus, 
J'ai décidé de jouer équitablement, ce qui signifie pas de téléchargement vidéo, pas d'abus de vitesse de lecture, pas de navigation dans la barre de lecture. 
Donc la stratégie choisie était une bonne vieille force brute. Ça sonne plus comme du piratage que tout autre chose.
Qu'avons-nous ici : un ensemble de 12 mots dans un ordre mixte. Cela nous donne 12 options (factorielles) de phrases
(479'001'600 pour être précis). Une quantité assez importante à traiter!


## Stratégie 1: bête et directe.

Eh bien, de quoi d'autre ai-je besoin, juste d'aller faire le tri ! Mais voici la première astuce : 12 ! les phrases mnémoniques ne rentraient tout simplement pas dans
mes 64 Go de RAM ! J'ai eu une erreur SIGTERM dans la console de l'IDE.
J'ai donc créé un [itérateur](https://docs.python.org/3/library/itertools.html#itertools.permutations) et j'ai commencé le processus.
Il m'a fallu un certain temps, je ne sais pas exactement combien, mais dans les 30 secondes, pour calculer le nombre de combinaisons.
Juste une exécution évaluative. Mais le problème est le suivant: mon ordinateur portable n'a même pas fait tourner ses ventilateurs au maximum! Un seul cœur était chargé. 

J'ai googlé un package Python [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) pour charger tous 
les cœurs logiques de mon CPU (20 d'entre eux) pour paralléliser les calculs. Sinon, cela aurait été un voyage éternel. 
Mais avec cela, j'ai dû diviser mon itérateur en 12 parties. Les packages de multiprocessing itertools fonctionnent ensemble, 
mais quand un ensemble complet d'options est dans la RAM. Ce n'était pas mon cas, donc ce qui suit a été effectué:

<rb-image zoom src="./images/hacked-johnnys-lab/1.png" alt="Parallelizing"/>


À partir de ce moment et pour toujours, j'utiliserais cette stratégie pour que mon moniteur de charge CPU ressemble à ceci:

<rb-image zoom src="./images/hacked-johnnys-lab/1_1.png" alt="CPU Load"/>


Je crois que cela a raccourci le temps d'exécution à environ 5 secondes. J'ai trouvé le meilleur moyen d'itérer à travers 
les combinaisons mais il y en avait juste trop! La première étape consistait à effectuer environ 480 millions 
extrinsèques dans le réseau. Le nœud me bannirait simplement pour DDOS et même sans cela, cela prendrait une éternité!

<rb-image zoom src="./images/hacked-johnnys-lab/2.png" alt="1st Attempt"/>


Juste pour une raison de débogage, j'ai lancé le script (pour la communication avec le nœud j'ai utilisé un 
[py-substrate-interface](https://pypi.org/project/substrate-interface/1.0.3/) package) et j'ai remarqué qu'avant d'appeler 
j'ai obtenu des erreurs comme _phrase mnémonique invalide_. Un indice! Si je pouvais valider la combinaison sur place, 
je gagnerais des tonnes de temps! L'analyse de GitHub m'a conduit à 
[ceci](https://github.com/polkascan/py-substrate-interface/blob/master/substrateinterface/keypair.py#L170) 
ligne de code et j'ai ajouté une validation de combinaison à mon script. Cela a réduit le nombre d'extrinsèques potentiels à environ 39'000'000 12 fois plus vite!
Mais encore, 39 millions d'appels me banniraient pour toujours, donc j'avais besoin de creuser davantage. Comment pourrais-je réduire considérablement le

<rb-image zoom src="./images/hacked-johnnys-lab/3.png" alt="2nd Attempt"/>


nombre de calculs? Eh bien, en trahissant un peu ma stratégie initiale. Voyez-vous, j'allais éviter de regarder des vidéos, 
«un pirate informatique, qui n'aura même pas besoin d'une vidéo», mais les mathématiques m'ont fait changer d'avis. Changer pour une stratégie 132 fois plus rapide. 
Ci-dessous est l'explication: 
Avec cela, je devais seulement connaître deux positions correctes de mots dans une phrase (une prendrait trop de temps, validée par l'expérience).

<rb-image zoom src="./images/hacked-johnnys-lab/4.png" alt="2 Words Insertion"/>


Je parcourrais 10! combinaisons, insérerais deux mots aux bonnes positions et validerais la phrase, 
réduisant les options à environ 300'000 une assez grande diminution! De plus, l'ensemble de combinaisons 10! s'adaptait à ma RAM, excellent! 
mon propre nœud Robonomics local synchronisé avec la chaîne et lui demander un solde de compte résultant!

<rb-image zoom src="./images/hacked-johnnys-lab/5.png" alt="3rd Attempt"/>


De plus, plutôt que d'essayer de transférer tous les jetons toutes les 300 000 fois et d'appeler un nœud public pour cela, j'ai décidé de définir
La requête est bien plus «facile» qu'une extrinsèque. Après une nuit entière de synchronisation (j'ai défini une limite de cache pour que mon 
Query is way “easier” than an extrinsic. After a whole night of synchronizing (J'ai défini une limite de cache pour que mon
ordinateur portable n'explose pas avec des données en chaîne dans sa ROM) J'ai essayé et... c'était un désastre. Transactions réseau
regarder une vidéo entière. Si seulement je pouvais connaître l'adresse exacte du compte! Mais pour cela j'ai besoin d'une phrase mnémonique... **Ou en ai-je vraiment besoin?** 
je regarde une vidéo entière. Si seulement je pouvais connaître l'adresse exacte du compte ! Mais pour cela, il me faut une phrase mnémotechnique… **Ou est-ce vraiment le cas ?**

Regardez. Les r��gles disent que le compte désiré a **exactement** 42 XRT. Pourquoi ne pas obtenir toutes les adresses actives dans le réseau,
les filtrer en ayant exactement 42 XRT et comparer chaque adresse générée avec une liste de cibles possibles 
(environ 20, diminuant à 1 à la fin). Facile à dire et à faire. 

Maintenant, après avoir modifié mon script une fois de plus, j'ai enfin réussi à n'avoir qu'une seule requête et une seule transaction qui me permettrait à coup sûr 
d'obtenir le prix désiré.

<rb-image zoom src="./images/hacked-johnnys-lab/6.png" alt="4th Attempt"/>


Maintenant, après avoir regardé 25 secondes de la vidéo (tout en remplissant les mots d'un mnémonique), 
il ne me faudrait que 30 secondes maximum pour voler la récompense. Piraté.

<rb-image zoom src="./images/hacked-johnnys-lab/7.png" alt="Discord Bot Notification"/>



