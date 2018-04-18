# Recrutement developpeur fullstack

Ce test de recrutement est orienté `back-end` et teste les connaissances d'un développeur `fullstack` Node.JS

> Ce test est ouvert aux candidatures spontanées.

## Objectif

### Besoin

Nous devons déployer une flotte d'appareils connectés affichant en mode kiosque une interface web. Notre besoin - et votre mission - sera de développer un service back permettant de logguer des actions utilisateurs issues de ces interfaces. Nous devons également savoir si une interface est connectée ou non.

### Contexte

L'ancien développeur chargé d'effectuer cette tâche a amorcé la partie front et une partie du développement back, malheureusement, ce dernier est parti aux Bahamas sans prévenir personne.

Vous devez reprendre son travail - sans réinventer la roue. Ce développeur n'a pas pour habitude de documenter son code... mais vous devriez quand même vous en sortir.

Vous trouverez dans le dossier `kickstart/` son initial commit.

### Solution

Vous devez réaliser un serveur `websocket` connecté à une base de données `MongoDB` permettant de stocker des évènements issus d'une interface utilisateur.

## Prérequis

* Git
* Mongo
* Node.JS

## Attention

Le dossier `kickstart/public/index.html` comprenant une interface front minimaliste mais fonctionnelle, vous ne devriez pas avoir besoin d'y toucher sauf pour y connecter votre serveur websocket.

Nous accorderons de l'importance à la lisibilité du code, le respect des normes (nous utilisons `StandardJS`).

Evitez d'utiliser `console.log`, privilégiez `debug` (sauf pour les erreurs où `console.error` est autorisé).

## Comment nous soumettre votre test ?

Clonez simplement ce repository, envoyez ensuite le lien à `digital@mediameeting.fr`
