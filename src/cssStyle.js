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

export{cssStyles}