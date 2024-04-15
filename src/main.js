import { Todo } from "./createTodo";
import {format ,compareAsc} from "date-fns";
import { individualDom } from "./createDom";



function addNewListener(){
    const openCreate = document.getElementById("createButton");
    const dialogOne = document.getElementById("CreateElements");

    openCreate.addEventListener("click", () => {
        dialogOne.showModal();
        console.log("Meowing")
        
    })
    
}

const content = document.getElementById("content");
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
    const dialog = document.querySelector("dialog"); //! Doesnt work now that I added a second dialog option
    const formSubmit = document.getElementById("formSubmit");

    //todo Put the radio button value checker here or in addeventlistener
    formSubmit.addEventListener("click", () => {
        dialog.close()

        const newDate = format(new Date(dateInput.value), "do MMM y");
        console.log(newDate);
        const newTodo = new Todo(Title.value,Desc.value,newDate, radioButtonChecker(), Status.checked); 
        individualDom(Title.value,Desc.value,newDate, radioButtonChecker(), Status.checked);
        todoList.push(newTodo);
        console.table(todoList);
    })
}



export{ addNewListener, closeDialog}



//todo: Get the different values for the priority buttons and somehow get them to save to this.priority? 
//todo: Get the date to say the date like: 11th April '23

