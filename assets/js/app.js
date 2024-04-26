const myAudio = document.getElementById("myAudio");
const volumeSon = document.getElementById("volume");
const volumeOutput = document.getElementById("volumeOutput"); // Récupération de l'élément output pour afficher la valeur du volume

// Lecture et pause
document.getElementById("playButton").addEventListener("click", play);
document.getElementById("stopButton").addEventListener("click", stop);

// Contrôle du volume
document.getElementById("volume").addEventListener("input", volume);
// Mettre à jour la valeur par défaut du volume lors du chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    volume();
});


function play() {
    myAudio.play();
}

function stop() {
    myAudio.pause();
}

function volume() {
    myAudio.volume = volumeSon.value;
    const volumePercentage = Math.round(myAudio.volume * 100);
    volumeOutput.textContent = volumePercentage + " %"; // Mise à jour du texte de l'élément output pour afficher la valeur du volume
}

