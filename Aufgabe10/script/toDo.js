var toDoList;
(function (toDoList) {
    // Counter
    var total = 0;
    var open = 0;
    var done = 0;
    // Auf ID aus HTML zugreifen
    var addTaskBox = document.getElementById("addTaskBox");
    // neues Div-Element einbauen, an welches die neuen Taskboxen angehängt werden
    var newDiv = document.createElement("div");
    // Input-Element in TS deklarieren
    var input = document.querySelector("#textfield");
    newDiv.textContent = "";
    // newDiv wird an das Eltern-Element addTaskBox gehängt
    addTaskBox.appendChild(newDiv);
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            if (document.querySelector("input").value != "") {
                addNewTask();
                document.querySelector("input").value = "";
            }
            else {
                alert("Add your new task!");
            }
        }
    });
    // Funktion für offene Tasks 
    // Tasks erledigt Funktion erstellen
    //Funktion, die bei Klick auf Plus-Button neues InputText-Element ans Div(addBoxDiv) hängt
    function addNewTask() {
        // Counter für Taskboxs in total
        total++;
        document.querySelector("#tasksInTotal").innerHTML = String("total: " + total);
        var textVonEingabefeld = document.createElement("h7");
        textVonEingabefeld.innerHTML = input.value;
        textVonEingabefeld.id = "text";
        // Let-Variablen lokal deklarieren
        var addTaskBox = document.getElementById("addTaskBox");
        var newDiv = document.createElement("div");
        // Text wird an newDiv bei Klick auf Plus weitergegeben
        newDiv.appendChild(textVonEingabefeld);
        // Der newDiv-Container bekommt eine ID
        newDiv.id = "newDivBox";
        // Erstellen eines Haken-Elementes
        var haken = document.createElement("div");
        //let keinHaken: HTMLElement = document.createElement("div");
        //Haken-Typ wird deklariert und ein ID zugewiesen
        haken.className = "far fa-circle";
        // Haken wird zur neuen Taskbox hinzugefügt
        newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(haken);
        haken.addEventListener("click", checkboxClick);
        open++;
        document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
        // Bei Klick auf Kreis wird ein Haken hinzugefügt; erneuter Klick wird der Haken entfernt
        function checkboxClick() {
            if (haken.getAttribute("class") == "far fa-check-circle") {
                haken.setAttribute("class", "far fa-circle");
                // Bei zweitem Klick wird erledgites Task wieder in ein unerledigtes Task umgewandelt
                open++; //open zäht wieder eins nahch oben
                done--; //done zählt wieder ein nach unten
                document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
                document.querySelector("#tasksDone").innerHTML = String("done: " + done);
            }
            // Bei erstem Klick wird Task abgehakt
            else {
                haken.setAttribute("class", "far fa-check-circle");
                open--; // eins nach unten gezählt
                done++; // eins nach oben gezählt
                document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
                document.querySelector("#tasksDone").innerHTML = String("done: " + done);
            }
        }
        // Erstellen eines Delete-Buttons
        var deleteButton = document.createElement("div");
        // dem Delete-Button wird eine Klasse zugewiesen, gestalterische Bearbeitung nun in CSS möglich
        deleteButton.className = "fas fa-trash";
        // Klickevent für wenn der Delete-Button gedrückt wird
        deleteButton.addEventListener("click", deleteTaskbox);
        // Delete-Funktion
        function deleteTaskbox() {
            //neues newDiv-Kinderelement wird bei Klick auf den Delete-Button vom Elternelement entfernt
            newDiv.parentElement.removeChild(newDiv);
            //Counter für wenn der Delete-Button gedrückt wird, die Total-Number - 1 ist
            total--;
            document.querySelector("#tasksInTotal").innerHTML = String("total: " + total);
            if (haken.getAttribute("class") == "far fa-check-circle") {
                open == open; // open bleibt gleich
                done--; // done zählt eins nach unten, da diese erledigte aufgabe gelöscht wurde
                document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
                document.querySelector("#tasksDone").innerHTML = String("done: " + done);
            }
            if (haken.getAttribute("class") == "far fa-circle") {
                done == done; // done bleibt gleich, weil die gelöschte Aufgabe unerledigt war
                open--; // unerledigte aufgabe wurde gelöscht, daher zählt open eins nach unten
                document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
                document.querySelector("#tasksDone").innerHTML = String("done: " + done);
            }
        }
        // Reset To-Do-List bei Klick auf F1
        document.addEventListener("keyup", function (event) {
            if (event.keyCode == 112) {
                deleteTaskbox();
                input.value = "";
            }
        });
        // Delete-Button wird an neues newDiv-Element gehängt
        newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(deleteButton);
        addTaskBox === null || addTaskBox === void 0 ? void 0 : addTaskBox.appendChild(newDiv);
    }
    //Mikro-Icon in TS deklarieren, um mit dieser arbeiten zu können
    var mikro = document.querySelector(".fa-microphone-alt");
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        // addCommands; so ähnlich wie ein Objekt, in dem die Parameer in einem Array oder einzelnen Kommando ausgegeben werden; 
        // Durch die Parameter in addCommands wird die Spracheingabe überhaupt möglich
        artyom.addCommands({
            //Bei Klick auf das Mikro muss der Nutzer "Neue Aufgabe" sagen und danach die neue Aufgabe erwähnen z.B. Putzen => Neue Aufgabe Putzen
            //das *-Zeichen ist ein Platzhalter (Wildcard) für die individuelle Spracheingabe des Nutzers
            indexes: ["Neue Aufgabe *"],
            // smart: true =>  denn wir benutzen wildcards; Artyom erkennt ohne true keine Wildcards
            smart: true,
            // wird "Neue AUfgabe" gesagt, wird die funktion unter "action" getriggert
            action: function (i, wildcard) {
                // Spracheingabe wird als input.value gespeichert und der Funktion addNewTask übergegeben, so dass es der neuen Taskbox angehängt werden kann
                input.value = wildcard;
                addNewTask();
                document.querySelector("input").value = "";
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            }
        });
        // fucntion startContinousArtyom
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                // Objekt mit verschiedenen Parametern, die die Sprachsteuerung mit unterschiedlichen Eigenschaften ausstattet
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true // es wird alles in der Konsole ausgegeben
                }).then(function () {
                    console.log("Ready!");
                });
            }, 150); //
        }
        document.querySelector("#mikro").addEventListener("click", function () {
            if (mikro.getAttribute("style") == "color: #af331d") {
                artyom.fatality();
                mikro.setAttribute("style", "color: #e4842a");
            }
            else {
                startContinuousArtyom();
                mikro.setAttribute("style", "color: #af331d");
            }
        });
    });
})(toDoList || (toDoList = {}));
//# sourceMappingURL=toDo.js.map