namespace A7 {

// Variablen
var sound:HTMLAudioElement = new Audio ('assets/A.mp3')    
var sound2:HTMLAudioElement = new Audio ('assets/C.mp3')  
var sound3:HTMLAudioElement = new Audio ('assets/F.mp3')  
var sound4:HTMLAudioElement = new Audio ('assets/G.mp3')  
var sound5:HTMLAudioElement = new Audio ('assets/hihat.mp3')  
var sound6:HTMLAudioElement = new Audio ('assets/kick.mp3')  
var sound7:HTMLAudioElement = new Audio ('assets/snare.mp3')  
var sound8:HTMLAudioElement = new Audio ('assets/laugh-1.mp3')  
var sound9:HTMLAudioElement = new Audio ('assets/laugh-2.mp3')  

// Play-Button-Array
var button: HTMLAudioElement [] = [sound5, sound6, sound7]

// Sounds - Funktion 
function playSample (sound):void {

    sound.play()
    }

// Klick-Event
document.querySelector('#drums').addEventListener('click', function(){ playSample (sound5)});
document.querySelector('#drums2').addEventListener('click', function(){ playSample (sound6)});
document.querySelector('#drums3').addEventListener('click', function (){ playSample (sound7)});
document.querySelector('#sound').addEventListener('click', function(){ playSample (sound)});
document.querySelector('#sound2').addEventListener('click', function(){ playSample (sound2)});
document.querySelector('#sound3').addEventListener('click', function(){ playSample (sound3)});
document.querySelector('#sound4').addEventListener('click', function(){ playSample (sound4)});
document.querySelector('#laughter').addEventListener('click', function(){ playSample (sound8)});
document.querySelector('#laughter2').addEventListener('click', function(){ playSample (sound9)});

//Play-Button Funktion
 function playButton(): void {
    setInterval(function() { button[0].play();}, 500);
    setInterval(function() { button[1].play();}, 1000);
    setInterval(function() { button[2].play();}, 1500);
}

//Play-Button-Event
document.querySelector('#playButton').addEventListener('click', playButton);
}