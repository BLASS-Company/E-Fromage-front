# blass_pff_front

## Récupérer le projet git
```
copier le lien git
git clone + le lien git
```

## Récupérer les branches git
```
git fetch
```

## Choisir la branche
```
git checkout nom_de_la_branche
```
## Supprimer branche git localement
```
git branch -d nom_de_la_branche
```
## Supprimer branche git du dépôt distant
```
si on a copié le dossier via la commande git clone:
git push origin :nom_de_la_branch

si on a créer le dossier localement puis ajouter sur le dépot distant:
git push nom_du_depot_distant :nom_de_la_branche
```

## Préparation du projet
```
npm install
```

### Lancement du serveur
```
npm run serve
```

### Lancement pour développement
```
npm run build
```

### Lancement des tests unitaires
```
npm run test:unit
```

### Lancement des test end-to-end
```
npm run test:e2e
```

### Lancement de Lint
```
npm run lint
```

### Configuration customisé
See [Configuration Reference](https://cli.vuejs.org/config/).
