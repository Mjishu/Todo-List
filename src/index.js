import { createMainDom, addNewListener, closeDialog } from "./main";
import { Todo } from "./createTodo";


const todoList = [];

createMainDom();
addNewListener();


function createBaseTodo(){
    const firstTodo = new Todo("Meow", "Find a cat and make it meow", "2024/04/18", "urgent", false);
    const secondTodo = new Todo("Bark", "Find a dog to bark", "2024/04/19", "Not Urgent", false);

    todoList.push(firstTodo,secondTodo)
}
createBaseTodo();
closeDialog(todoList);

for(let i=0;i<todoList.length;i++){
    console.table(todoList[i])
} 


