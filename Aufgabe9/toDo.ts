namespace toDoList {

// HTML-ELemente
let addTaskBox: HTMLElement = document.getElementById("addTaskBox");


let newDiv: HTMLElement = document.createElement("div");

newDiv.textContent = "";

addTaskBox.appendChild(newDiv);

document.querySelector("#addTaskButton").addEventListener("click", addNewTask);

let input: HTMLInputElement = document.querySelector("#textfield");

//Funktion, die bei Klick auf Plus-Button neues InputText-Element ans Div(addBoxDiv) hängt

function addNewTask (): void {

    let textVonEingabefeld;

    if (input.value != "") textVonEingabefeld = input.value;

    input.value = "";

    let addTaskBox = document.getElementById("addTaskBox");

    let newDiv = document.createElement("div");

    newDiv.textContent = textVonEingabefeld; 
    newDiv.id = "newDivBox";

    //Add event listener, when this clicked.
    //Delete parent

    //Create check box
    let checkbox: HTMLInputElement = document.createElement("input");

    //Declare Type and add checkbox
    checkbox.type  = "checkbox";
    checkbox.id = "checkbox";

    //Insert into DOM.
    newDiv?.appendChild(checkbox);
    
    //Add Delete-Button
    let deleteButton: HTMLElement = document.createElement("button");

    //Add id to Delete-button
    deleteButton.className = "fas fa-times";
    deleteButton.type = "button"

    deleteButton.addEventListener("click", deleteTaskbox);

    function deleteTaskbox (): void {
        newDiv.parentElement.removeChild(newDiv);
    }

    newDiv?.appendChild(deleteButton);    

    addTaskBox?.appendChild(newDiv);

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


}



/*
taskbox.appendChild(textfeld);
let inputTextfeld;

let input: HTMLInputElement = document.querySelector("#textfield");
if (input.value != "") inputTextfeld = input.value;
input.value = "";

}

function deleteTaskbox (): void {
    
}

//Interface für Objekt-Array erstellen
interface taskboxEigenschaften {



}

//Objekt-Array für Taskbox erstellen (Eigenschaften und Fuktionen?)
let task: taskboxEigenschaften [] = [
{

}, 
{
    
}

];

//Taskbox-Zähler   //unvollständig
/*for (let index: number = 0; index < task.length; index++) {
    console.log(task[index].name);
}



//Bei Klick auf den Add Task-Button wird die Funktion addtaskClick aufgerufen
document.querySelector("#addTaskButton").addEventListener("mousedown", addTaskIfClick);
*/
//EnterTask


}