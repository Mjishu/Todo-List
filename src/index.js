import {addNewListener, closeDialog, todoListMain } from "./main";
import { createMainDom, individualDom, mainDivCreate , projectButtons, openDetails, } from "./createDom";
import { Todo } from "./createTodo";
import { todayButtonInner, homeButtonInner, weekButtonInner, weekPopulate,homePopulate,todayPopulate} from "./populateProjects";
import { cssStyles, priorityColor } from "./cssStyle";

const todoList= [];

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
        })})}



function DialogCloses(){
    document.getElementById("dialogClose").addEventListener("click", () =>{
        document.getElementById("openDetails").close();
})}

DialogCloses();
cssStyles();

var statusButton = document.querySelectorAll(".statusButton");
function toggleStatus(){
    statusButton.forEach(function(button,index){
        button.addEventListener("click", function (){
            const itemIndex = todoList[index];
            itemIndex.status = !itemIndex.status
            button.innerHTML = itemIndex.status
        })
    })
}
//! Where to put these 2 so that they work even with  newly created elements
toggleStatus();
createDetail();

//todo Add memory functionality
//todo Turn status into a button that switches from true to false based on button click(make it no look like a button unless hovered maybe? idk)
//! Details button doesn't work for new items, probably because of where its being called come back to this...
//! Week project doesnt load project that is also in today? Make a new clone maybe?
