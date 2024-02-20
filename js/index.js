let texts;
function continueGame() {
  texts = createRandomNumber();
}


function play() {
  hideElementById("home-section");
  showElementById("play-ground");
  continueGame();
  timerStart()
}
let lifeSupp = 10;
let valueresult = 0;
let timerset = 0;
let munit = 0;
function palyAgain(){
    hideElementById("score-section");
    showElementById("play-ground");
    lifeLine(10)
    lifeSupp = 10
    valueresult = 0;
    displayResult(valueresult);
    valueresult = 0;
    munit = 0;
}


document.addEventListener("keyup", function (e) {
  if (texts === e.key) {
    findButtonByIdremove(texts);
    console.log("match");
    valueresult = valueresult + 1;
    displayResult(valueresult)
    continueGame();
  } else {
    lifeSupp = lifeSupp - 1;
    lifeLine(lifeSupp)
    if(lifeSupp === 0){
        hideElementById("play-ground")
        showElementById("score-section")
        displaFinialResult()
    }
  }
});

function displaFinialResult(){
    document.getElementById("resultBoard").innerText = 'Your Score ' +  valueresult;
    clearInterval(()=>{
      timerStart()
    })
}
lifeLine(10)

// timer


function timerStart(){
  
  let showTime = document.getElementById("showTimers");
  setInterval(()=>{
    timerset = timers();
    if(timerset <= 9){
      timerset = "0" + timerset;
    }
    if(timerset == 60){
      munit = munit + 1;
      timerset = 0;
    }
    showTime.innerHTML = `<span>${munit} : ${timerset}</span>`;
  }, 1000);
}

