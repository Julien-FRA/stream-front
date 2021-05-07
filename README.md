/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PROJET STREAM

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Groupe WOW : Julien FRANCOIS - Louis CHARLES

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Utilisation de l'app :

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Connexion - Inscription

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Lors de l'ouverture de l'app on se retrouve sur la page de connexion, il faut cliquer sur le bouton s'inscrire
pour créer un nouvel utilisateur. 
Nous avons empêchés le parcours des autres composants de l'app si un utilisateur n'est pas inscrit en vérifiant 
si un token et lié à cet utilisateur.
Une fois la connexion réussie nous n'avons pas redirigé vers une autre page cependant la nav sur la gauche est 
accessible.

La première icône permet d'accéder à la partie login/inscription.
La deuxième icône permet d'accéder à la page permettant de créer une room et de la rejoindre.
La dernière icône renvoie sur la page d'accueil, dans l'idéal elle aurait servi à déconnecter l'utilisateur
mais nous n'avons pas eu le temps de le traiter.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Deuxième icône - crée et rejoindre une room

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Sur cette page nous devons créer un nom d'utilisateur et un nom de room, nous aurions voulu reprendre automatiquement
le nom d'utilisateur connecté ainsi que l'affichage automatique des rooms disponible.
Il nous est demandé également de rentrer un nom de room afin de la rejoindre.
Pour qu'un autre utilisateur puisse rejoindre cette même room il devra rentrer le même nom de room.

Si on clique sur la flèche en haut du chat nous sommes renvoyés aux composants de création de room. 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Stream

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Pour qu'un utilisateur puisse streamer il doit rentrer dans OBS et indiquer :

paramètres -> stream -> Stream type : Serveur de stream personnalisé
paramètres -> stream -> URL : rtmp://localhost/live
paramètres -> stream -> Clé de stream : stream

et ne pas cocher l'authentification.

L'utilisateur ne peut que ce stream à lui-même, nous n'avons pas réussi à le lier à une session utilisateur et 
faire en sorte que d'autres personnes connectées puissent y accéder.



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Difficultées rencontrées 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


1-La techno

On a perdu du temps au début du projet pour se familiariser avec React et Node que nous n'avions jamais utilisés
auparavant. En effet nous avons commencé à coder en html / css classique pour ensuite basculer sur du React ce qui 
nous a fait perdre pas mal de temps.

2-Room

Nous n'avons pas réussi à afficher la liste des rooms disponibles alors que l'on peut bien se connecter dessus en 
rentrant le même nom dans la page de création de room.


3-Chat

Nous avons rencontré plusieurs difficultés lors de la création du chat. Au début nous n'avions qu'un chat général 
sans room. De plus nous avons eu des difficultés avec les ports et les erreurs CORS.

4-Stream

Concernant le stream nous avons consulté de nombreux tuto et documentation, notamment node media server mais
nous n'avons pas reussi à lier le stream à une room ou un utilisateur précis, le stream se lance lorsqu'on le 
lance sur OBS mais ne sera pas visible par d'autres utilisateurs ( qui vont eux streamer leurs propres écrans).

5-Mise en ligne 

Nous n'avons pas réussi à mettre le projet en ligne à cause des multiples écoutent de port. Concernant azure nous avons
essayé de créer une machine virtuelle sans grande réussite.
La mise en ligne classique n'étant pas réalisable notre application n'est disponible qu'en local. 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Conclusion

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


En conclusion, le projet et le thème général nous ont paru très intéressant du fait que le streaming et le chat sont
des choses qui nous sont familières. Comprendre leurs fonctionnements était pour nous passionnant.

La découverte des techno comme Node et React n'étaient pas évidentes mais sachant que ce sont des techno très demandées,
leurs apprentissages ont été pour nous une chance d'enrichir nos connaissances.
