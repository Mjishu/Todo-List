import {addNewListener, closeDialog, } from "./main";
import { createMainDom, individualDom, mainDivCreate , projectButtons, openDetails, } from "./createDom";
import { Todo } from "./createTodo";
import { todayButtonInner, homeButtonInner, weekButtonInner, weekPopulate,homePopulate,todayPopulate} from "./populateProjects";
import { cssStyles } from "./cssStyle";

const todoList = [];

createMainDom();
addNewListener();


mainDivCreate();
function createBaseTodo(){
    const firstTodo = new Todo("Meow", "Find a cat and make it meow", "15th Apr 2024", "high", false);
    const secondTodo = new Todo("Bark", "Find a dog to bark", "16th Apr 2024", "low", false);

    individualDom(firstTodo.title,firstTodo.desc,firstTodo.date,firstTodo.priority,firstTodo.status);
    individualDom(secondTodo.title,secondTodo.desc,secondTodo.date,secondTodo.priority,secondTodo.status);
    todoList.push(firstTodo,secondTodo);
}

todayPopulate();
homePopulate();
weekPopulate();

projectButtons();

todayButtonInner();
homeButtonInner();
weekButtonInner();

createBaseTodo();
closeDialog(todoList);

var buttons = document.querySelectorAll(".detailButton"); //* Accesses todoList so idk how to put it in its own module
function createDetail(){
    buttons.forEach(function(button,index){
        button.addEventListener("click", function(){
            console.log(todoList[index]);
            const itemIndex = todoList[index];
            openDetails(itemIndex.title,itemIndex.desc,itemIndex.date,itemIndex.priority,itemIndex.status);
            console.table(todoList);
        })
    })
}
createDetail();

function DialogCloses(){
    document.getElementById("dialogClose").addEventListener("click", () =>{
        document.getElementById("openDetails").close();
})}

DialogCloses();
cssStyles();

//todo: Add functionality to tabs so that each project can get appeneded to its own tab i.e tasks for today would be in home and today projects

//todo: color code for priority(low=green, mid=yellow,high=red)
    // if priority.buttonTicked = low {priority.style.color=green}; else if(priority.buttonTicked = med){priority.style.color = yellow} etc.
//todo Add memory functionality


let rawr = "rawr";

const home = document.getElementById("homeDiv")
const today = document.getElementById("todayDiv");
