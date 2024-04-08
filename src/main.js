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

//? Closes dialog but need to add logic to save values in different function || Should  I import functions from another module to this? Ill look it up first before I do that; else Ill just do it main module
function closeDialog(){
    const dialog = document.querySelector("dialog");
    const formSubmit = document.getElementById("formSubmit");

    formSubmit.addEventListener("click", () => {
        dialog.close()
    })
}

export{createMainDom, addNewListener, closeDialog}