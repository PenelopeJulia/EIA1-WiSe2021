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
                open++;
                done--;
                document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
                document.querySelector("#tasksDone").innerHTML = String("done: " + done);
            }
            else {
                haken.setAttribute("class", "far fa-check-circle");
                open--;
                done++;
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
            done--;
            document.querySelector("#tasksInTotal").innerHTML = String("total: " + total);
            document.querySelector("#tasksDone").innerHTML = String("done: " + done);
            document.querySelector("#tasksOpen").innerHTML = String("open: " + open);
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
})(toDoList || (toDoList = {}));
//document.querySelector("#toDoCounter").innerHTML = String(total + " in total");
//# sourceMappingURL=toDo.js.map