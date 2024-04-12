import { isEqual,startOfDay } from "date-fns";

const content = document.getElementById("content");

function createMainDom(){
    const openCreate = document.createElement("button");
    openCreate.setAttribute("id", "createButton")
    openCreate.textContent = "Add New";
    content.append(openCreate);

    const priorityHolder = document.getElementById("priorityHolder");
    const buttonValues = ["Low", "Medium", "High"]
    for(let i=0; i<3; i++){
        const priorityButton = document.createElement("input");
        const priorityLabel = document.createElement("label");
        priorityButton.setAttribute("type", "radio");
        priorityButton.setAttribute("value", buttonValues[i].toLowerCase());
        priorityButton.setAttribute("name", "priorityButtons");
        priorityButton.setAttribute("id", 'button' + buttonValues[i])
        
        priorityLabel.setAttribute("for", "button" + buttonValues[i]);
        priorityLabel.innerText = buttonValues[i];
        priorityHolder.append(priorityButton, priorityLabel);
    }
}

function mainDivCreate(){
    const home = document.createElement("div");
    home.setAttribute("id", "homeDiv");
    
    const today = document.createElement("div");
    today.setAttribute("id","todayDiv");
    today.hidden = true

    const week = document.createElement("div");
    week.setAttribute("id","weekDiv");
    week.hidden =true

    //? Logic for add your own project here? 
    content.append(home,today,week);
    
}

function individualDom(title,desc,date,priority,status){
    const home = document.getElementById("homeDiv");
    const todoHolder = document.createElement("div");
    
    todoHolder.style.border = "1px solid black";
    todoHolder.style.minWidth = "150px"
    todoHolder.style.maxWidth = "200px"
    todoHolder.style.padding = '15px'
    todoHolder.style.textAlign = 'center'; //* might get rid of these styles, just using it to setup
    
    const todoTitle = document.createElement("p"); 
    todoHolder.innerHTML = title

    //const todoDesc = document.createElement("p");
    //todoDesc.innerHTML = desc

    const todoDate = document.createElement("p");
    todoDate.innerHTML = date

    const todoPriority = document.createElement("p");
    todoPriority.innerHTML = priority

    const todoStatus = document.createElement("p");
    todoStatus.innerHTML = status

    const detailButton = document.createElement("button");
    detailButton.innerHTML = "Details";
    detailButton.className = "detailButton";

   todoHolder.append(todoTitle,todoDate,todoPriority,todoStatus,detailButton);
   if (home){
    home.append(todoHolder)
    console.log("home connected")
   }
}

function projectButtons (){
    var names = ["Home", "Today", "Week"]
    for(let i=0;i<3; i++){
        const button = document.createElement("button");
        button.setAttribute('id', "button" + names[i]);
        button.innerHTML = names[i]
        content.append(button)

    }
}

function openDetails(title,desc,date,priority,status){
    const dialogOpen = document.createElement("dialog");
    dialogOpen.setAttribute('id', "openDetails");
    dialogOpen.show();

    const todoTitle = document.createElement("p"); 
        todoHolder.innerHTML = title
    const todoDesc = document.createElement("p");
        todoDesc.innerHTML = desc
    const todoDate = document.createElement("p");
        todoDate.innerHTML = date
    const todoPriority = document.createElement("p");
        todoPriority.innerHTML = priority
    const todoStatus = document.createElement("p");
        todoStatus.innerHTML = status

}

export{createMainDom, individualDom, mainDivCreate, projectButtons, openDetails}