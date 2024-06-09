let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
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

function playGame(playerMove) {
  let result = "";
  const computerMove = pickComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Its a tie";
    } else if (computerMove === "paper") {
      result = "You lose!";
    } else if (computerMove === "scissors") {
      result = "You win!!";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!!";
    } else if (computerMove === "scissors") {
      result = "Its a tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!!";
    } else if (computerMove === "paper") {
      result = "Its a tie!";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    }
  }
  if (result === "You win!!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  } else if (result === "Its a tie") {
    score.ties += 1;
  }

  function displayOutcome() {
    document.querySelector(".js-outcome").innerHTML = result;
  }

  function displayMove() {
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You:  <img src="./images/${playerMove}-emoji.png" class="move-icon" /> Computer:
    <img src="./images/${computerMove}-emoji.png" class="move-icon" />`;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  displayOutcome();
  displayMove();

}
