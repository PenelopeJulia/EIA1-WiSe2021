var toDoList;
(function (toDoList) {
    var total = 0;
    // Auf ID aus HTML zugreifen
    var addTaskBox = document.getElementById("addTaskBox");
    // neues Div-Element einbauen, an welches die neuen Taskboxen angehängt werden
    var newDiv = document.createElement("div");
    newDiv.textContent = "";
    // newDiv wird an das Eltern-Element addTaskBox gehängt
    addTaskBox.appendChild(newDiv);
    // Bei Klick auf das Plus wird die Funktion addNewTask aufgerufen und ausgeführt
    document.querySelector("#addTaskButton").addEventListener("click", addNewTask);
    // Input-Element in TS deklarieren
    var input = document.querySelector("#textfield");
    //Funktion, die bei Klick auf Plus-Button neues InputText-Element ans Div(addBoxDiv) hängt
    function addNewTask() {
        // Counter für Taskboxs in total
        total++;
        document.querySelector("#toDoCounter").innerHTML = String(total + " in total");
        var textVonEingabefeld;
        // Der Inhalt (textVonEingabefeld) des Input-Felds wird als input.value gespeichert
        if (input.value != "")
            textVonEingabefeld = input.value;
        // Bei Klick auf das Plus wird das Input-Feld geleert
        input.value = "";
        // Let-Variablen lokal deklarieren
        var addTaskBox = document.getElementById("addTaskBox");
        var newDiv = document.createElement("div");
        // Text in newDiv wird an textVonEingabefeld zurückgegeben
        newDiv.textContent = textVonEingabefeld;
        // Der newDiv-Container bekommt eine ID
        newDiv.id = "newDivBox";
        // Erstellen eines Haken-Elementes
        var haken = document.createElement("input");
        //Haken-Typ wird deklariert und ein ID zugewiesen
        haken.type = "checkbox";
        haken.id = "checkbox";
        // Haken wird zur neuen Taskbox hinzugefügt
        newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(haken);
        // Erstellen eines Delete-Buttons
        var deleteButton = document.createElement("button");
        // dem Delete-Button wird eine Klasse zugewiesen, gestalterische Bearbeitung nun in CSS möglich
        deleteButton.className = "fas fa-times";
        // Klickevent für wenn der Delete-Button gedrückt wird
        deleteButton.addEventListener("click", deleteTaskbox);
        // Delete-Funktion
        function deleteTaskbox() {
            //neues newDiv-Kinderelement wird bei Klick auf den Delete-Button vom Elternelement entfernt
            newDiv.parentElement.removeChild(newDiv);
            //Counter für wenn der Delete-Button gedrückt wird, die Total-Number - 1 ist
            total--;
            document.querySelector("#toDoCounter").innerHTML = String(total + " in total");
        }
        // Delete-Button wird an neues newDiv-Element gehängt
        newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(deleteButton);
        addTaskBox === null || addTaskBox === void 0 ? void 0 : addTaskBox.appendChild(newDiv);
    }
})(toDoList || (toDoList = {}));
//# sourceMappingURL=toDo.js.map