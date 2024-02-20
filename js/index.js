let texts;
function continueGame() {
  texts = createRandomNumber();
}
let success = document.getElementById("success");
let wrong = document.getElementById("wrong");
let aboardsDash = document.getElementById("aboardsDash");
let lifeSupp = 10;
let valueresult = 0;
let timerset = 0;
let munit = 0;
let showTimersDisplay = "";
let timers;
function play() {
  hideElementById("home-section");
  showElementById("play-ground");
  continueGame();
  startPlay();
  timerset = 0;
  munit = 0;
  timers = setInterval(myTimerFunction, 1000);
}

function palyAgain() {
  hideElementById("score-section");
  showElementById("play-ground");
  lifeLine(10);
  lifeSupp = 10;
  valueresult = 0;
  displayResult(valueresult);
  timerset = 0;
  munit = 0;
  timers = setInterval(myTimerFunction, 1000);
  aboardsDash.style.background = `#FFFFFFB3`;
}

function startPlay() {
  document.addEventListener("keyup", function (e) {
    if (texts === e.key) {
      findButtonByIdremove(texts);
      console.log("match");
      valueresult = valueresult + 1;
      displayResult(valueresult);
      continueGame();
      success.play();
    } else {
      lifeSupp = lifeSupp - 1;
      lifeLine(lifeSupp);
      if (lifeSupp === 0) {
        hideElementById("home-section");
        hideElementById("play-ground");
        showElementById("score-section");
        displaFinialResult();
      }
      wrong.play();
      aboardsDash.style.backgroundImage = `linear-gradient(white ${lifeSupp * 10}%, red)`
    }
  });
}

function displaFinialResult() {
  document.getElementById("timerShowing").innerText = showTimersDisplay;
  document.getElementById("resultBoard").innerText =
    "Your Score " + valueresult;
  clearInterval(timers);
}
lifeLine(10);

// timer

let showTime = document.getElementById("showTimers");

function myTimerFunction() {
  timerset = timerset + 1;
  if (timerset === 60) {
    munit = munit + 1;
    timerset = 0;
  }
  showTime.innerHTML = `<span>${munit <= 9 ? "0" + munit : munit} : ${
    timerset <= 9 ? "0" + timerset : timerset
  }</span>`;
  showTimersDisplay = `This Time You Play ${
    munit <= 9 ? "0" + munit : munit
  } : ${timerset <= 9 ? "0" + timerset : timerset}`;
}
console.log(showTimersDisplay);
