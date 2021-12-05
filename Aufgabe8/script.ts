namespace A8 {

//Sound-Variablen
var sound: HTMLAudioElement = new Audio ("assets/A.mp3");  
var sound2: HTMLAudioElement = new Audio ("assets/C.mp3");  
var sound3: HTMLAudioElement = new Audio ("assets/F.mp3"); 
var sound4: HTMLAudioElement = new Audio ("assets/G.mp3"); 
var sound5: HTMLAudioElement = new Audio ("assets/hihat.mp3"); 
var sound6: HTMLAudioElement = new Audio ("assets/kick.mp3");
var sound7: HTMLAudioElement = new Audio ("assets/snare.mp3");  
var sound8: HTMLAudioElement = new Audio ("assets/laugh-1.mp3");  
var sound9: HTMLAudioElement = new Audio ("assets/laugh-2.mp3");  

var currentlyPlaying: boolean = false;
var remix: number;
var beatDelete: number;

// Play-Button-Array
var count: number = 0;
var beat: HTMLAudioElement [] = [sound5, sound6, sound7, sound6, sound, sound2, sound3, sound4, sound8, sound9];

// Sounds - Funktion 
function playSample(sound: HTMLAudioElement): void {
    sound.play();
}

// Klick-Event
document.querySelector("#drums").addEventListener("mousedown", function(): void { playSample (sound5); });
document.querySelector("#drums2").addEventListener("mousedown", function(): void { playSample (sound6); });
document.querySelector("#drums3").addEventListener("mousedown", function (): void { playSample (sound7); });
document.querySelector("#sound").addEventListener("mousedown", function(): void { playSample (sound); });
document.querySelector("#sound2").addEventListener("mousedown", function(): void { playSample (sound2); });
document.querySelector("#sound3").addEventListener("mousedown", function(): void { playSample (sound3); });
document.querySelector("#sound4").addEventListener("mousedown", function(): void { playSample (sound4); });
document.querySelector("#laughter").addEventListener("mousedown", function(): void { playSample (sound8); });
document.querySelector("#laughter2").addEventListener("mousedown", function(): void { playSample (sound9); });

//Play-Button Funktion: Beat wird abgespielt bei Klick auf Play
function playBeat(): void {
    
    setInterval(function(): void {
        beat [count++].play();
        if (count == 4) {
        count = 0; } //loop
       },       500);
    //Bei Klick auf den Play-Button verwandelt er sich in ein Pause-Button und umgekehrt
    if (document.querySelector("#play").getAttribute("class") == "far fa-play-circle") {
        document.querySelector("#play").setAttribute("class", "far fa-pause-circle");
    }
    else {
        document.querySelector("#play").setAttribute("class", "far fa-play-circle");
        clearInterval(beatDelete);
    }
}


//Delete-Button Funktion: Bei Klick auf das "Trashcan"-Icon wird der abgespielte Beat gelöscht
function deleteBeat(): void {
   if (currentlyPlaying == true) {
       currentlyPlaying = false;
   }
   //Wird der momentane Beat gelöscht, ändert sich der Pause-Button in ein Play-Button
   document.querySelector("#play").setAttribute("class", "far fa-play-circle");
}

// Remix-Button Funktion: Bei Klick aud das Shuffle-Icon wird ein zufällig-generiertes Beat abgespielt
function remixButton(): void {
    remix = setInterval(startRemix, 200);
    function startRemix(): void {
    for (var i: number = 0; i <= 9; i++) {
        const b: number = Math.floor(Math.random() * 5);
        playSample (sound[b]);
    }
}
}

/*function clickRemix() {
    remix=setInterval(playRemix, 300);
    function playRemix(){
        for(var a:number=0; a<4; a++){
            const b: number = Math.floor(Math.random() * 6);
            playSample (sound[b]); */

//Play-, Pause-, Shuffle-, Record-, Delete-Button Klick-Event
document.querySelector("#play").addEventListener("mousedown", playBeat);
document.querySelector("#pause").addEventListener("mousedown", playBeat);
document.querySelector("#remix").addEventListener("mousedown", remixButton);
//document.querySelector("#record").addEventListener("klick", recordButton);;
document.querySelector("#delete").addEventListener("klick", deleteBeat);
}

//Sound-Variablen als Array Versuch
/*var sound: HTMLAudioElement [] = 
    [new Audio ("assets/A.mp3"),
    new Audio ("assets/C.mp3"), 
    new Audio ("assets/F.mp3"),
    new Audio ("assets/G.mp3"),
    new Audio ("assets/hihat.mp3"),
    new Audio ("assets/kick.mp3"),
    new Audio ("assets/snare.mp3"), 
    new Audio ("assets/laugh-1.mp3"),
    new Audio ("assets/laugh-2.mp3")];  
*/