namespace toDoList {

    declare var Artyom: any;

    // Counter
    let total: number = 0;
    let open: number = 0;
    let done: number = 0;
    
    // Auf ID aus HTML zugreifen
    let addTaskBox: HTMLElement = document.getElementById("addTaskBox");
    
    // neues Div-Element einbauen, an welches die neuen Taskboxen angehängt werden
    let newDiv: HTMLElement = document.createElement("div");
    
    // Input-Element in TS deklarieren
    let input: HTMLInputElement = document.querySelector("#textfield");

    // Bei Öffnen der Seite ist Aufnhamen noch deaktiviert
    let microphone: boolean = false;
    
    newDiv.textContent = "";
    
    // newDiv wird an das Eltern-Element addTaskBox gehängt
    addTaskBox.appendChild(newDiv);
    
    document.addEventListener("keydown", (event: KeyboardEvent): void => { 
        if (event.keyCode === 13) { 
                if (document.querySelector("input").value != "") { addNewTask(); document.querySelector("input").value = ""; } 
                else {alert("Add your new task!"); }}});
    
    // Funktion für offene Tasks 
    
    // Tasks erledigt Funktion erstellen
    
    
    //Funktion, die bei Klick auf Plus-Button neues InputText-Element ans Div(addBoxDiv) hängt
    function addNewTask (): void {
    
        // Counter für Taskboxs in total
        total++; 
        document.querySelector("#tasksInTotal").innerHTML = String( "total: " + total);
    
        let textVonEingabefeld: HTMLElement = document.createElement("h7");
    
        textVonEingabefeld.innerHTML = input.value;
        textVonEingabefeld.id = "text";
    
        // Let-Variablen lokal deklarieren
        let addTaskBox: HTMLElement = document.getElementById("addTaskBox");
    
        let newDiv: HTMLDivElement = document.createElement("div");
    
       // Text wird an newDiv bei Klick auf Plus weitergegeben
        newDiv.appendChild(textVonEingabefeld);
        
        // Der newDiv-Container bekommt eine ID
        newDiv.id = "newDivBox";
    
        // Erstellen eines Haken-Elementes
        let haken: HTMLElement = document.createElement("div");
        //let keinHaken: HTMLElement = document.createElement("div");
    
        //Haken-Typ wird deklariert und ein ID zugewiesen
        haken.className = "far fa-circle";
    
        // Haken wird zur neuen Taskbox hinzugefügt
        newDiv?.appendChild(haken);
    
        haken.addEventListener("click", checkboxClick);
    
        open++;
        document.querySelector("#tasksOpen").innerHTML = String( "open: " + open);
    
        // Bei Klick auf Kreis wird ein Haken hinzugefügt; erneuter Klick wird der Haken entfernt
        function checkboxClick (): void {
        
            
            if (haken.getAttribute("class") == "far fa-check-circle") {
                haken.setAttribute("class", "far fa-circle");
                // Bei zweitem Klick wird erledgites Task wieder in ein unerledigtes Task umgewandelt
                open++; //open zäht wieder eins nahch oben
                done--; //done zählt wieder ein nach unten
                document.querySelector("#tasksOpen").innerHTML = String( "open: " + open);
                document.querySelector("#tasksDone").innerHTML = String( "done: " + done);
             }

            // Bei erstem Klick wird Task abgehakt
            else {
                haken.setAttribute("class", "far fa-check-circle"); 
                open--; // eins nach unten gezählt
                done++; // eins nach oben gezählt
                document.querySelector("#tasksOpen").innerHTML = String( "open: " + open);
                document.querySelector("#tasksDone").innerHTML = String( "done: " + done);
            }    
        }
        
        // Erstellen eines Delete-Buttons
        let deleteButton: HTMLElement = document.createElement("div");
    
        // dem Delete-Button wird eine Klasse zugewiesen, gestalterische Bearbeitung nun in CSS möglich
        deleteButton.className = "fas fa-trash";
        
        // Klickevent für wenn der Delete-Button gedrückt wird
        deleteButton.addEventListener("click", deleteTaskbox);
    
        // Delete-Funktion
        function deleteTaskbox (): void {
    
            //neues newDiv-Kinderelement wird bei Klick auf den Delete-Button vom Elternelement entfernt
                newDiv.parentElement.removeChild(newDiv);
    
                //Counter für wenn der Delete-Button gedrückt wird, die Total-Number - 1 ist
                total--;
                document.querySelector("#tasksInTotal").innerHTML = String( "total: " + total);
    
                if (haken.getAttribute("class") == "far fa-check-circle") {
                open == open; // open bleibt gleich
                done--; // done zählt eins nach unten, da diese erledigte aufgabe gelöscht wurde
                document.querySelector("#tasksOpen").innerHTML = String( "open: " + open);
                document.querySelector("#tasksDone").innerHTML = String( "done: " + done);
            }    
                if (haken.getAttribute("class") == "far fa-circle") {
                done == done; // done bleibt gleich, weil die gelöschte Aufgabe unerledigt war
                open--; // unerledigte aufgabe wurde gelöscht, daher zählt open eins nach unten
                document.querySelector("#tasksOpen").innerHTML = String( "open: " + open);
                document.querySelector("#tasksDone").innerHTML = String( "done: " + done);
            }    
            
        }
    
          // Reset To-Do-List bei Klick auf F1
        document.addEventListener("keyup", function (event: KeyboardEvent): void { 
            if (event.keyCode == 112) {
                deleteTaskbox();
                input.value = "";
    
            }
        });
    
        // Delete-Button wird an neues newDiv-Element gehängt
        newDiv?.appendChild(deleteButton);    
    
        addTaskBox?.appendChild(newDiv);
    
    }

    //Mikro-Icon in TS deklarieren, um mit dieser arbeiten zu können
    let mikro: HTMLElement = document.querySelector(".fa-microphone-alt");

    //Sprachsteuerung: Artyom wird erstmal deklariert und ein Typ:any zugewiesen (TS braucht eine Typzuweisung)
    declare var Artyom: any;

    window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    // addCommands; so ähnlich wie ein Objekt, in dem die Parameer in einem Array oder einzelnen Kommando ausgegeben werden; 
    // Durch die Parameter in addCommands wird die Spracheingabe überhaupt möglich
    artyom.addCommands({
        //Bei Klick auf das Mikro muss der Nutzer "Neue Aufgabe" sagen und danach die neue Aufgabe erwähnen z.B. Putzen => Neue Aufgabe Putzen
        //das *-Zeichen ist ein Platzhalter (Wildcard) für die individuelle Spracheingabe des Nutzers
        indexes: ["Neue Aufgabe *"],
        // smart: true =>  denn wir benutzen wildcards; Artyom erkennt ohne true keine Wildcards
        smart: true,
        // wird "Neue AUfgabe" gesagt, wird die funktion unter "action" getriggert
        action: function(i: any, wildcard: string): void {
            // Spracheingabe wird als input.value gespeichert und der Funktion addNewTask übergegeben, so dass es der neuen Taskbox angehängt werden kann
            input.value = wildcard;
            addNewTask(); 
            document.querySelector("input").value = "";
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    
    // fucntion startContinousArtyom
    function startContinuousArtyom(): void {
        artyom.fatality(); 
    
        setTimeout(
            function(): void {
                // Objekt mit verschiedenen Parametern, die die Sprachsteuerung mit unterschiedlichen Eigenschaften ausstattet
                artyom.initialize({ 
                    lang: "de-DE", //Sprache: deutsch
                    continuous: true, // Artyom hört durchgehend zu
                    listen: true, // Spracherkennung wird gestartet
                    interimResults: true,
                    debug: true // es wird alles in der Konsole ausgegeben
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            150); //
    }

    //Klick-Event bei Klick auf Mikro-Icon
    document.querySelector("#mikro").addEventListener("click", function (): void {

       if (!microphone) {
           //Bei erstem Klick wird Sprachsteuerung gestartet
           startContinuousArtyom();
           // Sprachsteuerung an, daher Bedingung true
           microphone = true;
           //Icon-Farbe rot
           mikro.setAttribute("style", "color: #af331d");
       } else {
           //Bei zweitem Klick wird Sprachsteuerung gestoppt
           artyom.fatality();
           // Sprachsteuerung wurde gestoppt, daher ist die Bedingung, dass Mikro an ist falsch
           microphone = false;
           //Icon-Farbe orange
           mikro.setAttribute("style" , "color: #e4842a");
       }
   }); 
       
});
    }
    