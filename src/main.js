import { Todo } from "./createTodo";

function createMainDom(){
    const content = document.getElementById("content");
    const openCreate = document.createElement("button");
    openCreate.setAttribute("id", "createButton")
    openCreate.textContent = "Add New";
    content.append(openCreate);
}

function addNewListener(){
    const openCreate = document.getElementById("createButton");
    const dialog = document.querySelector("dialog");

    openCreate.addEventListener("click", () => {
        dialog.showModal();
        console.log("clicked")
    })
    
}

const Title = document.getElementById("formTitle");
const Desc = document.getElementById("formDesc");
const Date = document.getElementById("Date"); 
const Priority = document.getElementById("Priority");
const Status = document.getElementById("Status");

function closeDialog(todoList){
    const dialog = document.querySelector("dialog");
    const formSubmit = document.getElementById("formSubmit");


    formSubmit.addEventListener("click", () => {
        dialog.close()
        const newTodo = new Todo(Title.value,Desc.value, Date.value, Priority.value, Status.checked);
        todoList.push(newTodo);
        console.table(todoList);
    })
}

function individualDom(title,desc,date,priority,status){
    const content = document.getElementById("content");

    const todoHolder = document.createElement("div");
    //todoHolder.setAttribute("id", "todoHolder");
  

    const todoTitle = document.createElement("p"); 
    //todoTitle.className = "todoTitle";
    todoHolder.innerHTML = title

    const todoDesc = document.createElement("p");
   // todoDesc.className = "todoDesc";
    todoDesc.innerHTML = desc

    const todoDate = document.createElement("p");
   // todoDate.className = 'todoDate';
    todoDate.innerHTML = date

    const todoPriority = document.createElement("p");
    //todoPriority.className = 'todoPriority';
    todoPriority.innerHTML = priority

    const todoStatus = document.createElement("p");
   //todoStatus.className = "todoStatus";
   todoStatus.innerHTML = status

   todoHolder.append(todoTitle,todoDesc,todoDate,todoPriority,todoStatus);
   content.append(todoHolder);
}


//* For i in range (todoList) -> individualDom(t,d,d,p,s) find a place to do this?

export{createMainDom, addNewListener, closeDialog}
