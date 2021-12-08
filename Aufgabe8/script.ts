namespace A8 {

//Sound-Variablen
var sound: HTMLAudioElement [] = 
    [new Audio ("assets/A.mp3"),
    new Audio ("assets/C.mp3"), 
    new Audio ("assets/F.mp3"),
    new Audio ("assets/G.mp3"),
    new Audio ("assets/hihat.mp3"),
    new Audio ("assets/kick.mp3"),
    new Audio ("assets/snare.mp3"), 
    new Audio ("assets/laugh-1.mp3"),
    new Audio ("assets/laugh-2.mp3")];  

var currentlyPlaying: boolean = true;
var remix: number;
var beatDelete: number;

// Play-Button-Array
var count: number = 0;
var beat: HTMLAudioElement [] = [sound[4], sound[5], sound[6], sound[0], sound[1], sound[2], sound[3], sound[7], sound[8]];

// Sounds - Funktion 
function playSample(sound: HTMLAudioElement): void {
    sound.play();
}

// Klick-Event
document.querySelector("#drums").addEventListener("mousedown", function(): void { playSample (sound[5]); });
document.querySelector("#drums2").addEventListener("mousedown", function(): void { playSample (sound[6]); });
document.querySelector("#drums3").addEventListener("mousedown", function (): void { playSample (sound[7]); });
document.querySelector("#sound").addEventListener("mousedown", function(): void { playSample (sound[0]); });
document.querySelector("#sound2").addEventListener("mousedown", function(): void { playSample (sound[2]); });
document.querySelector("#sound3").addEventListener("mousedown", function(): void { playSample (sound[3]); });
document.querySelector("#sound4").addEventListener("mousedown", function(): void { playSample (sound[4]); });
document.querySelector("#laughter").addEventListener("mousedown", function(): void { playSample (sound[8]); });
document.querySelector("#laughter2").addEventListener("mousedown", function(): void { playSample (sound[9]); });

//Play-Button Funktion: Beat wird abgespielt bei Klick auf Play
function playBeat(): void {
     if (currentlyPlaying == true) {
    beatDelete = setInterval(function(): void {
        beat [count++].play();
        if (count == 3) {
        count = 0; } //loop
       },                    500);

    //Bei Klick auf den Play-Button (if) verwandelt er sich in ein Pause-Button und (else) umgekehrt
    if (document.querySelector("#play").getAttribute("class") == "far fa-play-circle") {
        document.querySelector("#play").setAttribute("class", "far fa-pause-circle");
    }
}
    else {
        document.querySelector("#play").setAttribute("class", "far fa-play-circle");
        currentlyPlaying = false;
        clearInterval(beatDelete);
    }
}

//Delete-Button Funktion: Bei Klick auf das "Trashcan"-Icon wird der abgespielte Beat gelöscht
function deleteBeat(): void {
    
   if (currentlyPlaying == true) {
    currentlyPlaying = false;
    clearInterval(beatDelete);
     //Wird der momentane Beat gelöscht, ändert sich der Pause-Button in ein Play-Button
    document.querySelector("#play").setAttribute("class", "far fa-play-circle");   
   }

}

// Remix-Button Funktion: Bei Klick aud das Shuffle-Icon wird ein zufällig-generierter Beat abgespielt
function remixButton(): void { 
    remix = setInterval(startRemix, 600);
    function startRemix(): void {
    for (var i: number = 0; i <= 9; i++) {
        const random: number = Math.floor(Math.random() * 10);
        playSample (sound[random]);
    }
}
  //löscht den aktuellen Beat und nur der Remix wird abgespielt
    clearInterval(beatDelete);
  //Pause-Button ändert sich in ein Play-Button
    document.querySelector("#play").setAttribute("class", "far fa-play-circle");  
}

//Play-, Pause-, Shuffle-, Record-, Delete-Button Klick-Event
document.querySelector("#play").addEventListener("mousedown", function (): void {playBeat (); currentlyPlaying = true; });
document.querySelector("#remix").addEventListener("click", function (): void {remixButton(); });
document.querySelector("#delete").addEventListener("click", function(): void {deleteBeat(); currentlyPlaying = false; });
}