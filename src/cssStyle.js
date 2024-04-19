function cssStyles(){ //todo Change Palatte
    const body = document.querySelector("body");
    const content = document.getElementById("content")
    const buttonStyle= document.querySelectorAll("button");
    buttonStyle.forEach(item =>{
        item.style.backgroundColor = "#515A5A "
        item.style.color = "#FFC300"
    })
    body.style.backgroundColor = "#283747"
    content.style.color = "#FFC300"

}

//? function to find the color of status; should get the value of the dom element of priority and then if statements for colors;
function priorityColor(){
    const priorityEle = document.getElementsByClassName("todoPriority");
    for(let i =0; i< priorityEle.length; i++){
        const priorityItem = priorityEle[i].innerHTML;
        priorityEle[i].style.textDecoration = "underline";
        priorityEle[i].style.textDecorationThickness = "3px"
        
        
        if (priorityItem === 'low'){
            priorityEle[i].style.textDecorationColor = 'green';
        }
        else if (priorityItem === "medium"){
            priorityEle[i].style.textDecorationColor = "orange";
        }
        else if (priorityItem === "high"){
            priorityEle[i].style.textDecorationColor = "red"
        }
    }
}

export{cssStyles, priorityColor}