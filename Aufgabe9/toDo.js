var toDoList;
(function (toDoList) {
    // HTML-ELemente
    var addTaskBox = document.getElementById("addTaskBox");
    var newDiv = document.createElement("div");
    newDiv.textContent = "";
    addTaskBox.appendChild(newDiv);
    document.querySelector("#addTaskButton").addEventListener("click", addNewTask);
    var input = document.querySelector("#textfield");
    //Funktion, die bei Klick auf Plus-Button neues InputText-Element ans Div(addBoxDiv) hängt
    function addNewTask() {
        var textVonEingabefeld;
        if (input.value != "")
            textVonEingabefeld = input.value;
        input.value = "";
        var addTaskBox = document.getElementById("addTaskBox");
        var newDiv = document.createElement("div");
        newDiv.textContent = textVonEingabefeld;
        newDiv.id = "newDivBox";
        //Add event listener, when this clicked.
        //Delete parent
        //Create check box
        var checkbox = document.createElement("input");
        //Declare Type and add checkbox
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        //Insert into DOM.
        newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(checkbox);
        //Add Delete-Button
        var deleteButton = document.createElement("button");
        //Add id to Delete-button
        deleteButton.className = "fas fa-times";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", deleteTaskbox);
        function deleteTaskbox() {
            newDiv.parentElement.removeChild(newDiv);
        }
        newDiv === null || newDiv === void 0 ? void 0 : newDiv.appendChild(deleteButton);
        addTaskBox === null || addTaskBox === void 0 ? void 0 : addTaskBox.appendChild(newDiv);
    }
    /*
    // Bei Klick auf dass Plus-Zeichen wird Text in einem Array gespeichert und
    function addTaskIfClick (): void {
    console.log("klick");
    
    let taskBox: HTMLDivElement = document.getElementById("taskbox");
    
    */
    /*
    let liste = document.createElement("li");
    let inputValue = document.getElementById("textfield").value;
    let text = document.createTextNode(inputValue);
    
    liste.appendChild(text);
    
    if (inputValue === "") {
        alert("Write somthing!");
    } else {
        document.getElementById("list").appendChild(liste);
    }
    document.getElementById("myInput").value = "";
    
    let addTaskButton = document.getElementById("textfield");
    */
})(toDoList || (toDoList = {}));
//# sourceMappingURL=toDo.js.map