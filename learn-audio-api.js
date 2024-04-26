//============================ LA WEB API AUDIO JS ============================

/**
 *
 * Introduction
 *
 * La Web API audio en JavaScript permet aux développeurs d'ajouter des fonctionnalités audio à leurs pages web,
 * comme la lecture de fichiers audio, le contrôle du volume et la gestion des événements audio.
 *
 * Consulter la documentation:
 * @url https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API
 *
 * @author helyatam
 */

//=============================================================================================
/**
 *
 * 1. Lecture audio de base
 *
 * Commençons par la lecture d'un fichier audio sur une page web.
 *
 */
//=============================================================================================

/**
 *
 * a- Création de l'élément audio:
 *
 * Nous devons d'abord créer un élément audio dans notre HTML5.
 *
 * Exemple:
 *
 */

/**

Dans le HTML:

<audio id="myAudio" src="chemin/vers/le/fichier/audio.mp3"></audio>

*/

/**
 *
 * b- Création de l'élément audio:
 *
 * Nous pouvons créer un élément audio en utilisant l'objet 'Audio'.
 *
 * Exemple:
 *
 */

const myAudioPlayer = new Audio();

/**
 *
 * c- Contrôle de la lecture audio:
 *
 * En JavaScript, nous pouvons contrôler la lecture de l'audio
 * à l'aide des méthodes 'play()' et 'pause()' de l'élément audio.
 *
 * Exemple:
 *
 */

const myAudio = document.getElementById("myAudio");

// Pour démarrer la lecture
myAudio.play();

// Pour mettre en pause la lecture
myAudio.pause();

//=============================================================================================
/**
 *
 * 2. Contrôle du volume audio
 *
 * Nous pouvons également ajuster le volume de l'audio à l'aide de la propriété 'volume' de l'objet Audio.
 *
 */
//=============================================================================================

/**
 *
 * a- Régler le volume:
 *
 * Le volume est une valeur comprise entre 0 et 1, où 0 est muet et 1 est le volume maximum.
 *
 * Exemple:
 *
 */

// Régler le volume à 50%
myAudio.volume = 0.5;

//=============================================================================================
/**
 *
 * 3. Gestion des événements audio
 *
 * La Web API audio nous permet de réagir à divers événements liés à la lecture audio.
 *
 */
//=============================================================================================

/**
 *
 * a- Écouter l'événement de fin de lecture:
 *
 * L'événement 'ended' se déclenche lorsque la lecture audio est terminée.
 *
 * Exemple:
 *
 */

myAudio.addEventListener("ended", () => {
  // Logique à exécuter lorsque la lecture est terminée
});

/**
 *
 * a- Écouter l'événement de chargement:
 *
 * L'événement 'loadedmetadata' se déclenche lorsque les métadonnées de l'audio sont chargées, 
 * comme la durée de l'audio.
 *
 * Exemple:
 *
 */

myAudio.addEventListener("loadedmetadata", () => {
  // Logique à exécuter une fois que les métadonnées sont chargées
});

//=============================================================================================
/**
 *
 * Conclusion
 *
 * La Web API audio en JavaScript est une puissante fonctionnalité 
 * qui permet d'ajouter des éléments audio interactifs à vos pages web. 
 * En utilisant les méthodes et les événements appropriés, 
 * vous pouvez créer des expériences audio riches et immersives pour vos utilisateurs. 
 *
 */
//=============================================================================================

