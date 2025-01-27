window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

//Iteration 8:End Game Screen
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  function startGame() {
    const game=new Game()
    game.start()
    console.log("start game");
  }

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }


//Iteration 5
// Function that handles keydown event
function handleKeydown(event) {
  const key = event.key;
  const possibleKeystrokes = [
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
  ];

  // Check if the pressed key is in the possibleKeystrokes array
  if (possibleKeystrokes.includes(key)) {
    event.preventDefault();

    // Update player's directionX and directionY based on the key pressed
    switch (key) {
      case "ArrowLeft":
        console.log("pressed LEFT");
        game.player.directionX = -1;
        break;
      case "ArrowUp":
        console.log("pressed UP");
        game.player.directionY = -1;
        break;
      case "ArrowRight":
        console.log("pressed RIGHT");
        game.player.directionX = 1;
        break;
      case "ArrowDown":
        console.log("pressed DOWN");
        game.player.directionY = 1;
        break;
    }
  }
}

// Add the handleKeydown function as an event listener for the keydown event
window.addEventListener("keydown", handleKeydown);
};