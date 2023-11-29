"use strict";
const btnElement = document.getElementById("btn");
const inputElement = document.getElementById("input");
const formElement = document.getElementById("form");
const listElement = document.getElementById("list");
const readData = () => {
    const GetData = localStorage.getItem("Mylist");
    if (GetData == null)
        return [];
    return JSON.parse(GetData);
};
const tasks = readData();
const saveData = (e) => {
    e.preventDefault();
    // console.log(inputElement.value);
    const newTask = {
        name: inputElement.value,
        completed: false
    };
    createList(newTask);
    tasks.push(newTask);
    localStorage.setItem("Mylist", JSON.stringify(tasks));
};
const updateData = () => {
    localStorage.setItem("Mylist", JSON.stringify(tasks));
};
const createList = (task) => {
    const LiEl = document.createElement("li");
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.checked = task.completed;
    checkboxElement.addEventListener("change", () => {
        task.completed = checkboxElement.checked;
        updateData();
    });
    LiEl.append(task.name);
    LiEl.append(checkboxElement);
    listElement.append(LiEl);
    inputElement.value = "";
};
formElement.addEventListener("submit", saveData);
tasks.forEach(createList);
