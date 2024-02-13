let texts;
function continueGame() {
  texts = createRandomNumber();
}


function play() {
  hideElementById("home-section");
  showElementById("play-ground");
  continueGame();
}
let lifeSupp = 10;
let valueresult = 0;
function palyAgain(){
    hideElementById("score-section");
    showElementById("play-ground");
    lifeLine(10)
    lifeSupp = 10
    valueresult = 0;
    displayResult(valueresult)
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
}
lifeLine(10)
