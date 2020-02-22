"use strict";

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//only 5 highscores will be shown
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

const saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    //score: Math.floor(Math.random() * 100),
    score: mostRecentScore,
    name: username.value //once user is authenticated we use their names
  };
  //logic to sort scores from highest to lowest and everything more than 5 results cut
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("./index.html");
};
