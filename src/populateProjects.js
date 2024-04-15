let weekPopulated = false;
let homePopulated = false;
let todayPopulated = false;

function todayButtonInner(){
    document.getElementById("buttonToday").addEventListener("click", () => {
        document.getElementById("homeDiv").hidden = true
        document.getElementById("weekDiv").hidden = true
        //document.getElementById("todayDiv").innerHTML = "" // change this to the thing that will populate todayDiv
        document.getElementById("todayDiv").hidden = false
        console.log("today Button")
        
        if(!todayPopulated){
            todayPopulate();
            todayPopulated = true;
        }
    })
}

function homeButtonInner(){
    document.getElementById("buttonHome").addEventListener('click', () => {
        
        document.getElementById("homeDiv").hidden = false
        document.getElementById("weekDiv").hidden = true
        document.getElementById("todayDiv").hidden = true

        //logic for inner div content here
        console.log("home Button")
        if(!homePopulated){
            homePopulate();
            homePopulated = true;
        }
    })
}

function weekButtonInner(){
    document.getElementById("buttonWeek").addEventListener("click", () => {
        document.getElementById("homeDiv").hidden = true
        document.getElementById("weekDiv").hidden = false
        document.getElementById("todayDiv").hidden = true

        //logic for inner div content here
        console.log("week Button");
        if(!weekPopulated){
            weekPopulate();
            weekPopulated = true;
        }
    })
}

function todayPopulate(){
   const titleToday = document.createElement("h3");
   titleToday.innerHTML = "Today"
   document.getElementById("todayDiv").appendChild(titleToday)
    titleToday.className = "populateHeaders"
}

function homePopulate(){
    const titleHome = document.createElement("h3");
    titleHome.innerHTML = "Home";
    document.getElementById('homeDiv').append(titleHome)
    titleHome.className = "populateHeaders"
}

function weekPopulate(){
    const titleWeek = document.createElement("h3");
    titleWeek.innerHTML = "Week";
    document.getElementById("weekDiv").append(titleWeek)
    titleWeek.className = "populateHeaders"
}

export{ todayButtonInner, homeButtonInner,weekButtonInner}