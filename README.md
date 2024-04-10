# Projet Mermaid AI

## Introduction

Mermaid AI est un modèle d'IA conversationnelle conçu pour creer des graphiques visuels, informatifs.

## Construction avec Docker

Pour construire l'image Docker du projet :
```
docker build -t mermaid-ai .
```

Pour exécuter le conteneur Docker :
```
docker run -d -p 8080:8080 mermaid-ai
```

## Utilisation du prompt

Une fois le conteneur Docker en cours d'exécution, vous pouvez interagir avec Mermaid AI via http://127.0.0.1:8080 

## Applications

Mermaid AI peut être utilisé dans une variété d'applications, notamment :

Rédaction de doc
Assistants virtuels
Moteurs de recherche

## Licence

Ce projet est sous licence MIT.

