import {addNewListener, closeDialog, todayButtonInner, homeButtonInner, weekButtonInner} from "./main";
import { createMainDom, individualDom, mainDivCreate , projectButtons} from "./createDom";
import { Todo } from "./createTodo";


const todoList = [];

createMainDom();
addNewListener();


mainDivCreate();
function createBaseTodo(){
    const firstTodo = new Todo("Meow", "Find a cat and make it meow", "2024/04/18", "high", false);
    const secondTodo = new Todo("Bark", "Find a dog to bark", "2024/04/19", "low", false);

    individualDom(firstTodo.title,firstTodo.desc,firstTodo.date,firstTodo.priority,firstTodo.status)
    individualDom(secondTodo.title,secondTodo.desc,secondTodo.date,secondTodo.priority,secondTodo.status)
    todoList.push(firstTodo,secondTodo)
}
createBaseTodo();
closeDialog(todoList);

projectButtons();

todayButtonInner();
homeButtonInner();
weekButtonInner();

//* I think we are at the point we Just add the Stuff to HTML instead of the console and then style it up!

//todo: Add different tabs for different projects (make 3 for general,today, this week and then add option to make more ?)
    //? I think the best way to go about this would be to make a sub div for each one and then when its button is clicked append it to content but clear content before added?
//todo: Add an option to open the details which will show the description and the rest of the facts
//todo: color code for priority(low=green, mid=yellow,high=red)