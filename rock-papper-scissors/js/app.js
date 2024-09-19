function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    showResult.textContent = "Draw!";
  }
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    showResult.textContent = "You won, bro!";
    Humanpoints++;  // Increment human points
  }
  else {
    showResult.textContent = "AI wins Human lost!";
    AIpoints++;  // Increment AI points
  }

  // Display the updated scores
  HumanpointsResult.textContent = `Human Points: ${Humanpoints}`;
  AIpointsResult.textContent = `AI Points: ${AIpoints}`;

  // Increment and display the round
  round++;
  if (round > totalRounds) {
    showResult.textContent += " Game Over!";
  }
}

// Initial game setup
const showResult = document.createElement("div");
document.body.appendChild(showResult);

const buttonR = document.getElementById("rock");
const buttonP = document.getElementById("papper");
const buttonS = document.getElementById("scissor");

buttonR.addEventListener('click', () => playGame('rock'));
buttonP.addEventListener('click', () => playGame('paper'));
buttonS.addEventListener('click', () => playGame('scissors'));

let Humanpoints = 0;
let AIpoints = 0;
let round = 1;
const totalRounds = 3;



