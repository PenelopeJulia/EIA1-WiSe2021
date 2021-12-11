var toDoList;
(function (toDoList) {
    // HTML-ELemente
    var taskbox = document.getElementById("taskbox");
    var textfeld = document.getElementById("textfield");
    var todoArray = [];
    // Index-Variable für Counter
    var index = 0;
    taskbox.appendChild(textfeld);
    // Bei Klick auf dass Plus-Zeichen wird Text in einem Array gespeichert und 
    function addTaskClick() {
        console.log("klick");
    }
    function deleteTaskbox() {
    }
    //Objekt-Array für Taskbox erstellen (Eigenschaften und Fuktionen?)
    var task = [
        {},
        {}
    ];
    //Taskbox-Zähler   //unvollständig
    /*for (let index: number = 0; index < task.length; index++) {
        console.log(task[index].name);
    }
    */
    //Bei Klick auf den Add Task-Button wird die Funktion addtaskClick aufgerufen
    document.querySelector("#addTaskButton").addEventListener("mousedown", addTaskClick);
    //EnterTask
})(toDoList || (toDoList = {}));
//# sourceMappingURL=toDo.js.map