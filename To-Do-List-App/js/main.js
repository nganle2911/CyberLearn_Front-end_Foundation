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
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");
    // console.log(status);

    if (status == "todo") {
        toDoList.removeToDo(tdIndex);
        showToDoList(ulToDo);
    } else if (status == "completed") {
        completedList.removeToDo(tdIndex);
        showCompletedList(ulCompleted);
    } else {
        alert("Cannot delete todo!");
    }
    
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
    } else if (status == "completed") {
        let undoItem = completedList.tdList.slice(tdIndex, tdIndex+1);
        let objToDo = new ToDo(undoItem[0].textToDo, "todo");
        moveToDo(completedList, toDoList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompletedList(ulCompleted);
    } else {
        alert("Cannot move todo!");
    }
}

window.completedToDo = completedToDo;

const moveToDo = (depart, arrival, obj, tdIndex) => {
    // *Remove todo from depart 
    depart.removeToDo(tdIndex);

    // *Add this todo to arrival 
    arrival.addToDo(obj);
}

const sortASC = () => {
    let ulTodo = getELE("todo");
    toDoList.sortToDoList(false);
    showToDoList(ulTodo);
}

window.sortASC = sortASC;

const sortDES = () => {
    let ulTodo = getELE("todo");
    toDoList.sortToDoList(true);
    showToDoList(ulTodo);
}

window.sortDES = sortDES;