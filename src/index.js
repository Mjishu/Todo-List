import {addNewListener, closeDialog, todoListMain } from "./main";
import { createMainDom, individualDom, mainDivCreate , projectButtons, openDetails, } from "./createDom";
import { Todo } from "./createTodo";
import { todayButtonInner, homeButtonInner, weekButtonInner, weekPopulate,homePopulate,todayPopulate} from "./populateProjects";
import { cssStyles } from "./cssStyle";

const todoList= [];

createMainDom();
addNewListener();


mainDivCreate();
function createBaseTodo(){
    const firstTodo = new Todo("Meow", "Find a cat and make it meow", "19th Apr 2024", "high", false);
    const secondTodo = new Todo("Bark", "Find a dog to bark", "18th Apr 2024", "low", false);

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


function DialogCloses(){
    document.getElementById("dialogClose").addEventListener("click", () =>{
        document.getElementById("openDetails").close();
})}

DialogCloses();
cssStyles();




function statusAndDetails(){
    document.addEventListener("click", function(event) {
        if(event.target.classList.contains("detailButton")){
            const index = [...document.querySelectorAll('.detailButton')].indexOf(event.target);
            const itemIndex = todoList[index];
            openDetails(itemIndex.title,itemIndex.desc,itemIndex.date,itemIndex.priority,itemIndex.status);
        }

        if (event.target.classList.contains("statusButton")){
            const index = [...document.querySelectorAll('.statusButton')].indexOf(event.target);
            const itemIndex = todoList[index];
            itemIndex.status = !itemIndex.status;
            event.target.innerHTML = itemIndex.status;
        }
})}
statusAndDetails();

function storeMemory(){
    for(let i=0; i<todoList.length;i++){
        const todoItem = todoList[i]
        localStorage.setItem(`Title_${i}` , todoItem.title);
        localStorage.setItem( `Description_${i}`,todoItem.desc );
        localStorage.setItem( `Date_${i}`, todoItem.date);
        localStorage.setItem( `Priority_${i}`, todoItem.priority);
        localStorage.setItem( `Status_${i}`, todoItem.status);
    }
}
storeMemory() //? Where to call this so that it gets called for the newly created elements as well


function loadMemory(){ //? ChatGPT code; read it when im more awake...
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const index = parseInt(key.split('_')[1]);
        
        // Check if the key is related to a todo item
        if (!isNaN(index)) {
            const property = key.split('_')[0];
            todoList[index][property.toLowerCase()] = value;
        }
    }
}
//* Changing status value doesnt update the memory ;;;

