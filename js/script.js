let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const content = createDivWithClasses('content', 'text-center', 'mt-3', 'd-flex',);
const line = createDivWithClasses('line');
const btnRock = createButton('Rock');
const btnPaper = createButton('Paper');
const btnScissors = createButton('Scissors');
const scoreContainer = createDivWithClasses('scoreContainer', 'text-center', 'd-flex', 'justify-content-between');
const playerContainer = createDivWithClasses('playerContainer');
const playerIcon = createImage('images/user.png', 'playerIcon');
const computerContainer = createDivWithClasses('computerContainer');
const computerIcon = createImage('images/monitor.png', 'computerIcon');
const playerScoreDisplay = document.createElement('p');
playerScoreDisplay.textContent =`Score: ${playerScore}`
const computerScoreDisplay = document.createElement('p');
computerScoreDisplay.textContent =`Score: ${computerScore}`

appendElements(scoreContainer, playerContainer, line, computerContainer);
appendElements(content, btnRock, btnPaper, btnScissors);
appendElements(playerContainer, playerIcon, playerScoreDisplay);
appendElements(computerContainer, computerIcon, computerScoreDisplay);

container.appendChild(scoreContainer);
container.appendChild(content);

function createDivWithClasses(...classes) {
    const div = document.createElement('div');
    div.classList.add(...classes);
    return div;
}

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

function createImage(src, ...classes) {
    const image = document.createElement('img');
    image.src = src;
    image.classList.add(...classes)
    return image;
}

function appendElements(parent, ...children) {
    children.forEach(child => parent.appendChild(child));
}

btnRock.addEventListener('click', () => playRound('rock'));
btnPaper.addEventListener('click', () => playRound('paper'));
btnScissors.addEventListener('click', () => playRound('scissors'));

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randNum = Math.floor(Math.random() * choices.length);
  return choices[randNum]
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
  const result = determineWinner(playerSelection, computerSelection);
  console.log(result);
}

function determineWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
      return "It's a tie!";
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
      playerScore++;
      playerScoreDisplay.textContent = `Score: ${playerScore}`; // Update player score display
      return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
      computerScore++;
      computerScoreDisplay.textContent = `Score: ${computerScore}`; // Update computer score display
      return `You lose! ${computerSelection} beats ${playerSelection}.`;

  }
}

function game() {
    console.log(`Final score: You ${playerScore}, Computer ${computerScore}`);
  
    playAgain();
}
  
game();
  