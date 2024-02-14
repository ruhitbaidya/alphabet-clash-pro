function hideElementById(elementId){
    let hideElement = document.getElementById(elementId);
    hideElement.classList.add("hidden")
}

function showElementById(elementId){
    let showElement = document.getElementById(elementId);
    showElement.classList.remove("hidden")
}


function createRandomNumber(){
    let latter = 'abcdefghijklmonpqrstuvwxyz/';
    let arrLetter = latter.split("");

    let randomNumber = Math.floor(Math.random() * arrLetter.length)

    let showLatter = document.getElementById("showLetter").innerText = latter[randomNumber];
    findButtonById(showLatter)
    return showLatter;
}

function findButtonById(elementId){
     let element = document.getElementById(elementId);
        element.classList.add("bg-orange-400");     
}
function findButtonByIdremove(elementId){
    let element = document.getElementById(elementId);
       element.classList.remove("bg-orange-400");     
}

function displayResult(result){
    let display = document.getElementById("displayResult");
    display.innerText = result;
}
let timer = 00;
function lifeLine(text){
    let lifeLose = document.getElementById("life");
    lifeLose.innerText = text;
    if(text == 0){
        timer = 00;
    }
}


function timers(){
    if(timer == 60){
        timer = 00;
    }
    timer = timer + 1;    
    return timer
}
