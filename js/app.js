// Select the board
const board = document.getElementById("gameBoard");

// Create a list of emoji to use
// const cards = ['🦄', '🐶', '🐱', '🦊', '🦝', '🐻'];
const cards = ['🐶', '🐱', '🐶', '🐱'];

// Randomize | shuffle card
cards.sort(() => Math.random() - 0.5);

// Dynamically Create a 2 x 2  div grid
for (let i = 0; i < cards.length; i++) {
    let gCard = document.createElement("div");
    let paraCon = document.createElement("p");
  
    // Dynamically randomly set the content of each div to the  emoji
    paraCon.textContent = cards[i];
    gCard.appendChild(paraCon);
    board.appendChild(gCard);
}


// Add onClick listener to the board\
// Toggle classes on click

// get the targeted click and store in a variable
// listen for a second click and compare if the contents are equal
    // if equal, mark both div as done
    // else toggle div back 