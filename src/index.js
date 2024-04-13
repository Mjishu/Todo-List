import {addNewListener, closeDialog, } from "./main";
import { createMainDom, individualDom, mainDivCreate , projectButtons, openDetails, cssStyles} from "./createDom";
import { Todo } from "./createTodo";
import { todayButtonInner, homeButtonInner, weekButtonInner } from "./populateProjects";

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

var buttons = document.querySelectorAll(".detailButton");
buttons.forEach(function(button,index){
    button.addEventListener("click", function(){
        console.log(todoList[index])
        const itemIndex = todoList[index]
        openDetails(itemIndex.title,itemIndex.desc,itemIndex.date,itemIndex.priority,itemIndex.status)
        //todo call function to show details here
    })
})

document.getElementById("dialogClose").addEventListener("click", () =>{
    document.getElementById("openDetails").close();
})

cssStyles();
//? Find a way to use openDetails, that for each button click it will open that tasks details

//* I think we are at the point we Just add the Stuff to HTML instead of the console and then style it up!

//todo: Add functionality to tabs so that each project can get appeneded to its own tab i.e tasks for today would be in home and today projects
//todo: Add an option to open the details which will show the description and the rest of the facts
//todo: color code for priority(low=green, mid=yellow,high=red)