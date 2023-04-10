function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
      return "rock";
    } else if (randNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    // Who is the winner
    if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper.";
    } else if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else {
      return "You lose!";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      let validInput = false;
      while (!validInput) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
          validInput = true;
          const computerSelection = getComputerChoice();
          const result = playRound(playerSelection, computerSelection);
          console.log(result);
          if (result.startsWith("You win")) {
            playerScore++;
          } else if (result === "You lose!") {
            computerScore++;
          }
        } else {
          console.log("Invalid input. Please choose rock, paper, or scissors.");
        }
      }
    }
  
    console.log(`Final score: You ${playerScore}, Computer ${computerScore}`);
  
    playAgain();
  }
  
  function playAgain() {
    const playAgain = prompt("Do you want to play again: (y)es or (n)o?");
    if (playAgain === "y") {
      game();
    } else if (playAgain === "n") {
      console.log("Okay goodbye!");
    } else {
      console.log("Please type 'y' for yes or 'n' for no.");
    }
  }
  
  game();
  