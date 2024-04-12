function todayButtonInner(){
    document.getElementById("buttonToday").addEventListener("click", () => {
        document.getElementById("homeDiv").hidden = true
        document.getElementById("weekDiv").hidden = true
        document.getElementById("todayDiv").innerHTML = "" // change this to the thing that will populate todayDiv
        document.getElementById("todayDiv").hidden = false
        console.log("today Button")
    })
}

function homeButtonInner(){
    document.getElementById("buttonHome").addEventListener('click', () => {
        document.getElementById("homeDiv").hidden = false
        document.getElementById("weekDiv").hidden = true
        document.getElementById("todayDiv").hidden = true

        //logic for inner div content here
        console.log("home Button")
    })
}

function weekButtonInner(){
    document.getElementById("buttonWeek").addEventListener("click", () => {
        document.getElementById("homeDiv").hidden = true
        document.getElementById("weekDiv").hidden = false
        document.getElementById("todayDiv").hidden = true

        //logic for inner div content here
        console.log("week Button")
    })
}

export{ todayButtonInner, homeButtonInner,weekButtonInner}