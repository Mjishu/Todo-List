import { Todo } from "./createTodo";
import {format ,compareAsc} from "date-fns";

function createMainDom(){
    const content = document.getElementById("content");
    const openCreate = document.createElement("button");
    openCreate.setAttribute("id", "createButton")
    openCreate.textContent = "Add New";
    content.append(openCreate);

    const priorityHolder = document.getElementById("priorityHolder");
    const buttonValues = ["Low", "Medium", "High"]
    for(let i=0; i<3; i++){
        const priorityButton = document.createElement("input");
        priorityButton.setAttribute("type", "radio");
        priorityButton.setAttribute("value", buttonValues[i].toLowerCase());
        priorityButton.textContent = buttonValues[i];
        priorityButton.setAttribute("name", "priorityButtons");
        priorityButton.setAttribute("id", 'button' + buttonValues[i])
        priorityHolder.appendChild(priorityButton);
    }
    

}

function addNewListener(){
    const openCreate = document.getElementById("createButton");
    const dialog = document.querySelector("dialog");

    openCreate.addEventListener("click", () => {
        dialog.showModal();
    })
    
}

const Title = document.getElementById("formTitle");
const Desc = document.getElementById("formDesc");
const dateInput = document.getElementById("Date"); 
const Status = document.getElementById("Status");

function radioButtonChecker(){
    var  ele = document.getElementsByName("priorityButtons");
      for (let i=0; i < ele.length; i++){
          if (ele[i].checked){
              return ele[i].value;
          }
      }
}

function closeDialog(todoList){
    const dialog = document.querySelector("dialog");
    const formSubmit = document.getElementById("formSubmit");

    //todo Put the radio button value checker here or in addeventlistener
    formSubmit.addEventListener("click", () => {
        dialog.close()

        const newDate = format(new Date(dateInput.value), "dd/MM/yyyy");
        console.log(newDate);
        const newTodo = new Todo(Title.value,Desc.value,newDate, radioButtonChecker(), Status.checked); //! Priority needs to be fixed before I can add it here; aka find a way to get the button thats clicked
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



export{createMainDom, addNewListener, closeDialog}




//todo: Get the different values for the priority buttons and somehow get them to save to this.priority? 
//todo: Get the date to say the date like: 11th April '23

