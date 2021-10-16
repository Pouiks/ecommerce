# Contexte du projet

Création d'une API qui permettra d'administrer et gerer un site ecommerce.


On part sur un site scalable, ou l'administrateur peut créer des catégories et des produits.
*3 roles sont défini:*
- Administrateur 
- Client (Utilisateur possedant un compte)
- Visiteur

Le principe est de pouvoir reutiliser cette API pour n'importe quel site ecommerce qui aurait un template pré conçu.

## Technologies et utilisation

L'API sera consommé et alimenté par une interface web dédié à l'administrateur.
Cette API alimentera alors le futur site web .

Utilisation de graphQL ou postgreSQL pour la partie SGBD.

NodeJS pour la partie serveur, associé à EXPRESSJS.

Création en local et utilisation d'une base de données avec des identifiants basique pour le moment.
