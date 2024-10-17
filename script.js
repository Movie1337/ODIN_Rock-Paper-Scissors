let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.getElementById("human");
const computerScoreDisplay = document.getElementById("computer");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

const getComputerChoice = () => {
  const choices = ["Камень", "Ножницы", "Бумага"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
};

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = `Ничья! Оба выбрали ${humanChoice}`;
  } else if (
    (humanChoice === "Камень" && computerChoice === "Ножницы") ||
    (humanChoice === "Ножницы" && computerChoice === "Бумага") ||
    (humanChoice === "Бумага" && computerChoice === "Камень")
  ) {
    humanScore++;
    roundResult = `Вы победили! ${humanChoice} побеждает ${computerChoice}`;
  } else {
    computerScore++;
    roundResult = `Вы проиграли! ${computerChoice} побеждает ${humanChoice}`;
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = roundResult;
  resultDisplay.classList.remove("hidden");

  checkWinner();
};

const checkWinner = () => {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      resultDisplay.textContent = "Поздравляем, вы выиграли игру!";
      resultDisplay.classList.add("victory");
    } else {
      resultDisplay.textContent = "К сожалению, вы проиграли!";
      resultDisplay.classList.add("defeat");
    }
    disableButtons();
  }
};

const disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

document
  .getElementById("btnRock")
  .addEventListener("click", () => playRound("Камень"));
document
  .getElementById("btnScissors")
  .addEventListener("click", () => playRound("Ножницы"));
document
  .getElementById("btnPaper")
  .addEventListener("click", () => playRound("Бумага"));
