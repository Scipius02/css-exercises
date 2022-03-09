//import Math;

function computerPlay(playerInput) {
  playerInput = playerInput.toLowerCase();
  const options = ["rock", "paper", "scissors"];
  const randomComputerSelection = Math.floor(Math.random * 3);
  console.log(playerInput);
  console.log(randomComputerSelection);
  if (playerInput === options[randomComputerSelection]) {
    return "draw";
  } else if (playerInput == "rock" && options[randomComputerSelection] == "paper") {
    return "lose";
  } else if (playerInput == "paper" && options[randomComputerSelection] == "scissors") {
    return "lose";
  } else if (playerInput == "scissors" && options[randomComputerSelection] == "rock") {
    return "lose";
  } else if (playerInput == "rock" && options[randomComputerSelection] == "scissors") {
    return "win";
  } else if (playerInput == "paper" && options[randomComputerSelection] == "rock") {
    return "win";
  } else if (playerInput == "scissors" && options[randomComputerSelection] == "paper") {
    return "win";
  } else {
    return "invalid";
  }
}