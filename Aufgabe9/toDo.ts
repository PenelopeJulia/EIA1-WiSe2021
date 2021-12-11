namespace toDoList {

// HTML-ELemente
const taskbox: HTMLElement = document.getElementById ("taskbox");

let textfeld: HTMLElement = document.getElementById("textfield");

let todoArray = [];

// Index-Variable für Counter
let index: number = 0;

taskbox.appendChild(textfeld);


// Bei Klick auf dass Plus-Zeichen wird Text in einem Array gespeichert und 
function addTaskClick (): void {
console.log("klick");

    

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
*/


//Bei Klick auf den Add Task-Button wird die Funktion addtaskClick aufgerufen
document.querySelector("#addTaskButton").addEventListener("mousedown", addTaskClick);

//EnterTask


}