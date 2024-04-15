import {addNewListener, closeDialog, } from "./main";
import { createMainDom, individualDom, mainDivCreate , projectButtons, openDetails, } from "./createDom";
import { Todo } from "./createTodo";
import { todayButtonInner, homeButtonInner, weekButtonInner } from "./populateProjects";
import { cssStyles } from "./cssStyle";

const todoList = [];

createMainDom();
addNewListener();


mainDivCreate();
function createBaseTodo(){
    const firstTodo = new Todo("Meow", "Find a cat and make it meow", "2024/04/13", "high", false);
    const secondTodo = new Todo("Bark", "Find a dog to bark", "2024/04/12", "low", false);

    individualDom(firstTodo.title,firstTodo.desc,firstTodo.date,firstTodo.priority,firstTodo.status);
    individualDom(secondTodo.title,secondTodo.desc,secondTodo.date,secondTodo.priority,secondTodo.status);
    todoList.push(firstTodo,secondTodo);

}
createBaseTodo();
closeDialog(todoList);

projectButtons();

todayButtonInner();
homeButtonInner();
weekButtonInner();

var buttons = document.querySelectorAll(".detailButton"); //* Accesses todoList so idk how to put it in its own module
function createDetail(){
    buttons.forEach(function(button,index){
        button.addEventListener("click", function(){
            console.log(todoList[index])
            const itemIndex = todoList[index]
            openDetails(itemIndex.title,itemIndex.desc,itemIndex.date,itemIndex.priority,itemIndex.status)
            //todo call function to show details here
            console.table(todoList)
        })
    })
}
createDetail();


document.getElementById("dialogClose").addEventListener("click", () =>{
    document.getElementById("openDetails").close();
})

cssStyles();

//todo: Add functionality to tabs so that each project can get appeneded to its own tab i.e tasks for today would be in home and today projects
//todo//: Add an option to open the details which will show the description and the rest of the facts
//todo: color code for priority(low=green, mid=yellow,high=red)
//todo Add memory functionality

//!//Clicking Add New doesnt work! It should be due to how i grabbed the different buttons for creating the details buttons? 