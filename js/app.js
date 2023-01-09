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
    // let paraCon = document.createElement("p");
    gCard.className = "close";
    // paraCon.className = "hidden";
    // Dynamically randomly set the content of each div to the  emoji
    gCard.textContent = cards[i];
    // gCard.appendChild(paraCon);
    board.appendChild(gCard);
}

// Variables to track states
let opCount = 0;
let firstCard = "";
let secondCard = "";

// Add onClick listener to the board
// Toggle classes on click
board.addEventListener("click", toggleCard);

function toggleCard(event) {

    // console.log(event.target);
    if(event.target.className === "close" && opCount == 0) {
        opCount++;
        firstCard = event.target;
        firstCard.className = "open";
        
        // event.target.className = "shown";
    } else if (event.target.className === "close" && opCount === 1) {
        opCount++;
        secondCard = event.target;
        secondCard.className = "open";
        
        const matched = checkCardsMatch(firstCard.textContent, secondCard.textContent);

        if (matched) {
            // Cards stays opend
            firstCard.className = "done";
            secondCard.className = "done";
            // Reset opened Counts
        } else {
            // Close both cards
            firstCard.className = "close";
            secondCard.className = "close";
            // Reset opened counts
        }

    } else {
        opCount = 0;
    }

    
    // get the targeted click and store in a variable

    // listen for a second click and compare if the contents are equal
    // if equal, mark both div as done
    // else toggle div back 
}


function checkCardsMatch(first, second) {
    return (first === second) 
}

//TODO: ADD a 3sec delay to the second card opening right before performing check
// Add card opening and closing animation.