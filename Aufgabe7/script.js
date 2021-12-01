var A7;
(function (A7) {
    // Variablen
    var sound = new Audio('assets/A.mp3');
    var sound2 = new Audio('assets/C.mp3');
    var sound3 = new Audio('assets/F.mp3');
    var sound4 = new Audio('assets/G.mp3');
    var sound5 = new Audio('assets/hihat.mp3');
    var sound6 = new Audio('assets/kick.mp3');
    var sound7 = new Audio('assets/snare.mp3');
    var sound8 = new Audio('assets/laugh-1.mp3');
    var sound9 = new Audio('assets/laugh-2.mp3');
    // Play-Button-Array
    var count = 0;
    var button = [sound5, sound6, sound7];
    // Sounds - Funktion 
    function playSample(sound) {
        sound.play();
    }
    // Klick-Event
    document.querySelector('#drums').addEventListener('click', function () { playSample(sound5); });
    document.querySelector('#drums2').addEventListener('click', function () { playSample(sound6); });
    document.querySelector('#drums3').addEventListener('click', function () { playSample(sound7); });
    document.querySelector('#sound').addEventListener('click', function () { playSample(sound); });
    document.querySelector('#sound2').addEventListener('click', function () { playSample(sound2); });
    document.querySelector('#sound3').addEventListener('click', function () { playSample(sound3); });
    document.querySelector('#sound4').addEventListener('click', function () { playSample(sound4); });
    document.querySelector('#laughter').addEventListener('click', function () { playSample(sound8); });
    document.querySelector('#laughter2').addEventListener('click', function () { playSample(sound9); });
    //Play-Button Funktion
    function playButton() {
        setInterval(function () {
            button[count++].play();
            if (count == 2) {
                count = 0;
            }
        }, 500);
    }
    //Play-Button-Event
    document.querySelector('#playButton').addEventListener('click', playButton);
})(A7 || (A7 = {}));
//# sourceMappingURL=script.js.map