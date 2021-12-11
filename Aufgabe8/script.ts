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
    
    var currentlyPlaying: boolean = false;
    var remix: number;
    var beatDelete: number;
    
    // Play-Button-Array
    var count: number = 0;
    var beat: HTMLAudioElement [] = [sound[4], sound[5], sound[6], sound[0], sound[1], sound[2], sound[3], sound[7], sound[8]];
    
    //Funktion, die  einzelne Sounds abspielt
    function playSounds (sound: HTMLAudioElement): void {
        sound.play();
    }
    
    //Bei Klick auf den Play-Button (if) verwandelt er sich in ein Pause-Button und (else) umgekehrt
        
    function beatplays (): void {
        if (document.querySelector("#play").getAttribute("class") == "far fa-play-circle") {
            document.querySelector("#play").setAttribute("class", "far fa-pause-circle");
        }
        else {
            document.querySelector("#play").setAttribute("class", "far fa-play-circle");
            deleteBeat ();
        }
    
    //Play-Button Funktion: Beat wird abgespielt bei Klick auf Play
        function playBeat(): void {
        
        beatDelete = setInterval(function(): void {
            beat [count++].play();
            if (count == 3) {
            count = 0; } //loop
           },                    500);
        }}
    
    //Delete-Button Funktion: Bei Klick auf das "Trashcan"-Icon wird der abgespielte Beat gelöscht
    function deleteBeat(): void {
        if (currentlyPlaying == true) {
        clearInterval(beatDelete);
         //Wird der momentane Beat gelöscht, ändert sich der Pause-Button in ein Play-Button
        document.querySelector("#play").setAttribute("class", "far fa-play-circle");   
        clearInterval (remix); }
    }
    
    // Remix-Button Funktion: Bei Klick aud das Shuffle-Icon wird ein zufällig-generierter Beat abgespielt
    function remixButton(): void { 
        
         //Pause-Button ändert sich in ein Play-Button
         if (document.querySelector("#play").getAttribute("class") == "far fa-pause-circle") {
            document.querySelector("#play").setAttribute("class", "far fa-play-circle");
            remix = setInterval (remixButton, 200);
            //löscht den aktuellen Beat und nur der Remix wird abgespielt
            clearInterval(beatDelete);
            }
        else { document.querySelector("#play").setAttribute("class", "far fa-trash-alt");
               clearInterval(remix); }
      
            
         playSounds (beat [count] );
         count = Math.floor(Math.random () * 8); 
         count++;
    }
    
    
    
    // Klick-Event
    document.querySelector("#drums").addEventListener("mousedown", function(): void { playSounds (sound[5]); });
    document.querySelector("#drums2").addEventListener("mousedown", function(): void { playSounds (sound[6]); });
    document.querySelector("#drums3").addEventListener("mousedown", function (): void { playSounds (sound[7]); });
    document.querySelector("#sound").addEventListener("mousedown", function(): void { playSounds (sound[0]); });
    document.querySelector("#sound2").addEventListener("mousedown", function(): void { playSounds (sound[2]); });
    document.querySelector("#sound3").addEventListener("mousedown", function(): void { playSounds (sound[3]); });
    document.querySelector("#sound4").addEventListener("mousedown", function(): void { playSounds (sound[4]); });
    document.querySelector("#laughter").addEventListener("mousedown", function(): void { playSounds (sound[8]); });
    document.querySelector("#laughter2").addEventListener("mousedown", function(): void { playSounds (sound[9]); });
    
    //Play-, Pause-, Shuffle-, Record-, Delete-Button Klick-Event
    document.querySelector("#play").addEventListener("mousedown", function (): void { beatplays (); });
    document.querySelector("#remix").addEventListener("click", function (): void {remixButton(); });
    document.querySelector("#delete").addEventListener("click", function(): void {deleteBeat(); }); 
    }