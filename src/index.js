import { createMainDom, addNewListener, closeDialog } from "./main";
import { Todo } from "./createTodo";

const todoList = [];

createMainDom();
addNewListener();


function createBaseTodo(){
    const firstTodo = new Todo("Meow", "Find a cat and make it meow", "today", "urgent", false);
    const secondTodo = new Todo("Bark", "Find a dog to bark", "tomorrow", "Not Urgent", false);

    todoList.push(firstTodo,secondTodo)
}
createBaseTodo();
closeDialog(todoList);

for(let i=0;i<todoList.length;i++){
    console.table(todoList[i])
} 

//* Its console.tabling at the start, but closeDialog only works when I close the form, so I need something that will happen after closeDialog is used