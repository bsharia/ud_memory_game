// Select the board
const board = document.getElementById("gameBoard");

// Create a list of emoji to use
// const cards = ['🦄', '🐶', '🐱', '🦊', '🦝', '🐻'];
const cards = ['🐶', '🐱', '🐶', '🐱'];

// Randomize | shuffle card
cards.sort(() => Math.random() - 0.5);

// Dynamically Create a 2 x 2  div grid
for (let i = 0; i < cards.length; i++){
    const gCard = document.createElement("div");
    gCard.className = "game-card";
    gCard.textContent = cards[i];
    board.appendChild(gCard);
}

// Dynamically randomly set the content of each div to the  emoji

// Add onClick listener to the board
// get the targeted click and store in a variable
// listen for a second click and compare if the contents are equal
    // if equal, mark both div as done
    // else toggle div back 