// todo: Import object classes
import { ToDo } from "./todo.js";
import { ToDoList } from "./todoList.js";

let toDoList = new ToDoList();
let completedList = new ToDoList();

// todo: Function getElementById
const getELE = id => {
    return document.getElementById(id);
}

// todo: Add todo task 
const addToDo = () => {
    let txtToDo = getELE("newTask").value;
    let ulToDo = getELE("todo");
    
    if (txtToDo != "") {
        let td = new ToDo(txtToDo, "todo");
        toDoList.addToDo(td);
    } 
    
    showToDoList(ulToDo);

    getELE("newTask").value = "";
}

getELE("addItem").addEventListener("click", () => {
    addToDo();
})

// todo: Function displaying todo 
const showToDoList = (ulToDo) => {
    ulToDo.innerHTML = toDoList.renderToDo();
}

const showCompletedList = (ulCompleted) => {
    ulCompleted.innerHTML = completedList.renderToDo();
}

// todo: Function removes todo
const deleteToDo = (e) => {
    let tdIndex = e.target.getAttribute("data-index");
    let ulToDo = getELE("todo");

    toDoList.removeToDo(tdIndex);
    showToDoList(ulToDo);
}

window.deleteToDo = deleteToDo;

const completedToDo = (e) => {
    // console.log(e);
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");

    if (status == "todo") {
        // slice() function: start <= index < end 
        let completedItem = toDoList.tdList.slice(tdIndex, tdIndex+1);
        // console.log(completedItem);

        let objectToDo = new ToDo(completedItem[0].textToDo, "completed");
        // console.log(objectToDo);

        moveToDo(toDoList, completedList, objectToDo, tdIndex);
        // console.log(toDoList.tdList);
        // console.log(completedList.tdList);
        showToDoList(ulToDo);
        showCompletedList(ulCompleted);
    }
}

window.completedToDo = completedToDo;

const moveToDo = (depart, arrival, obj, tdIndex) => {
    // *Remove todo from depart 
    depart.removeToDo(tdIndex);

    // *Add this todo to arrival 
    arrival.addToDo(obj);
}
