import { isEqual,startOfDay,format, isThisWeek, parse} from "date-fns";
import { priorityColor } from "./cssStyle";

const content = document.getElementById("content");
const titleElement = document.getElementById("TitleElement");    
const descElement = document.getElementById("DescElement");
const dateElement = document.getElementById("DateElement");
const  priorityElement = document.getElementById("PriorityElement");
const statusElement = document.getElementById("StatusElement");

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
    const today = document.getElementById("todayDiv");
    const week = document.getElementById("weekDiv")
    const currentDate = format(new Date(), "do MMM y");
    const content = document.getElementById("content")
    
    todoHolder.style.border = "1px solid black";
    todoHolder.style.minWidth = "150px"
    todoHolder.style.maxWidth = "200px"
    todoHolder.style.padding = '15px'
    todoHolder.style.textAlign = 'center'; //* might get rid of these styles, just using it to setup
    
    const todoTitle = document.createElement("p"); 
    todoTitle.innerHTML = title

    const todoDate = document.createElement("p");
    todoDate.innerHTML = date

    const todoPriority = document.createElement("p");
    todoPriority.className = "todoPriority"
    todoPriority.innerHTML = priority

    const todoStatus = document.createElement("button");
    todoStatus.innerHTML = status
    todoStatus.className = "statusButton"

    const detailButton = document.createElement("button");
    detailButton.innerHTML = "Details";
    detailButton.className = "detailButton";

   todoHolder.append(todoTitle,todoDate,todoPriority,todoStatus,detailButton);
   const parsedDate = parse(date, "do MMM yyyy", new Date());
   const newDateFormat = format(parsedDate, "yyyy M d")

    if(date === currentDate){ //* its an issue with the if statement or something, I can only apend it to one of the variables
        console.log(title + " appending to today")
        today.appendChild(todoHolder)
        week.append(todoHolder.cloneNode(true))
        home.appendChild(todoHolder.cloneNode(true))
    }
    else if(isThisWeek(new Date(newDateFormat))){
        week.appendChild(todoHolder);
        home.appendChild(todoHolder.cloneNode(true))
    }
    else{
        console.log("appending home");
        home.appendChild(todoHolder)
    }
   //console.log(isThisWeek(new Date(newDateFormat)))
   priorityColor();
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
    clearOpenDetails();
    const dialogOpen = document.getElementById("openDetails");
    populateOpenDetails(title,desc,date,priority,status)
    dialogOpen.show();

    //todo Populate the different P.values with their info^
    console.log("open Details")
}


function clearOpenDetails(){
    titleElement.innerHTML = "";
    descElement.innerHTML = "";
    dateElement.innerHTML = "";
    priorityElement.innerHTML = "";
    statusElement.innerHTML = "";

}

function clearCreateForm(){
    document.getElementById("formTitle").value = "";
    document.getElementById("formDesc").value = "";
    document.getElementById("Date").value = "";//is a date input
    document.getElementById("Status").checked = false; //is a checkbox
    var radioBtns = document.getElementById("priorityHolder").querySelectorAll("input[type='radio']");
    radioBtns.forEach(function(radioButton){
        radioButton.checked =false;
    });
}

function populateOpenDetails(t,dd,d,p,s){
    titleElement.innerHTML = "Title: " + t ;
    descElement.innerHTML = "Description: " + dd;
    dateElement.innerHTML = "Date: " + d;
    priorityElement.innerHTML = "Priority: " + p;
    statusElement.innerHTML = "Status: " + s;
}



export{createMainDom, individualDom, mainDivCreate, projectButtons, openDetails, clearCreateForm}