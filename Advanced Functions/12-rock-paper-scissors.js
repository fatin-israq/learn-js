let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let isAutoPlaying = false;
let intervalID;

updateScoreElement();

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-move").innerHTML = "";
  stopPlay();
}

function autoplay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      let playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector(".auto-play-btn").innerHTML = "Stop Play";
  } else {
    stopPlay();
  }
}

function stopPlay() {
  clearInterval(intervalID);
  isAutoPlaying = false;
  document.querySelector(".auto-play-btn").innerHTML = "Auto Play";
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-move"
  ).innerHTML = `You played <img src="../Images/${playerMove}-emoji.png" alt="${playerMove}">. Computer played <img src="../Images/${computerMove}-emoji.png" alt="${computerMove}">.`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

let autoElement = document.querySelector(".js-auto-btn");
let resetElement = document.querySelector(".js-reset-btn");

autoElement.addEventListener("click", () => {
  autoplay();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoplay();
  }
});

let resetQueElement = document.querySelector(".reset-question");

resetElement.addEventListener("click", () => {
  resetQueElement.innerHTML =
    '<p>Are you sure you want to reset the score? <button class="js-reset-yes">Yes</button> <button class="js-reset-no">No</button></p>';

  document.querySelector(".js-reset-yes").addEventListener("click", () => {
    reset();
    resetQueElement.innerHTML = "";
  });

  document.querySelector(".js-reset-no").addEventListener("click", () => {
    resetQueElement.innerHTML = "";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    resetQueElement.innerHTML =
      '<p>Are you sure you want to reset the score? <button class="js-reset-yes">Yes</button> <button class="js-reset-no">No</button></p>';
  }

  document.querySelector(".js-reset-yes").addEventListener("click", () => {
    reset();
    resetQueElement.innerHTML = "";
  });

  document.querySelector(".js-reset-no").addEventListener("click", () => {
    resetQueElement.innerHTML = "";
  });
});
