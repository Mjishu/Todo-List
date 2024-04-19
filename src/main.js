import { Todo } from "./createTodo";
import {format ,compareAsc} from "date-fns";
import { individualDom , clearCreateForm} from "./createDom";


function addNewListener(){
    const openCreate = document.getElementById("createButton");
    const dialogOne = document.getElementById("CreateElements");

    openCreate.addEventListener("click", () => {
        dialogOne.showModal();
        
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
    const dialog = document.getElementById("CreateElements"); 
    const formSubmit = document.getElementById("formSubmit");
    const formClose = document.getElementById("exitForm");

    formSubmit.addEventListener("click", () => {
        dialog.close()

        const newDate = format(new Date(dateInput.value), "do MMM y");
        const newTodo = new Todo(Title.value,Desc.value,newDate, radioButtonChecker(), Status.checked); 
        individualDom(Title.value,Desc.value,newDate, radioButtonChecker(), Status.checked);
        todoList.push(newTodo);
        console.table(todoList);
        clearCreateForm();
       
    })
    formClose.addEventListener("click", () => {
        dialog.close();
        clearCreateForm();
    })

}

export{ addNewListener, closeDialog}


