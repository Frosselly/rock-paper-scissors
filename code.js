

const rock = "rock"
const scissors = "scissors"
const paper = "paper"

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let string = "mystery";
    switch (choice) {
        case (1):
            string = rock
            break;
        case (2):
            string = paper
            break;
        case (3):
            string = scissors
            break;
    }
    return string
}




function findWinner(playerSelection, computerSelection) {
    let result = "undefined.."

    if (playerSelection === computerSelection) {
        result = "It's a TIE!"
    }
    else if (playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper ||
        playerSelection === paper && computerSelection === rock) {
        result = "You WIN! " + playerSelection + " beats " + computerSelection
    }
    else {
        result = "You LOSE! " + computerSelection + " beats " + playerSelection
    }

    return result
}


function game(playerSelection) {

    computerSelection = getComputerChoice();

    let result = findWinner(playerSelection?.toLowerCase() || '', computerSelection)
    console.log(result)

    if (result[4] === "W") {
        addPoint('.playerScore')
    }
    else if (result[4] === "L") {
        addPoint('.computerScore')
    }
    else {
        addPoint('.playerScore')
        addPoint('.computerScore')
    }



}

function addPoint(className) {
    const score = document.querySelector(className);
    score.textContent = parseInt(score.textContent) + 1;
    //console.log("Added to " + className + " currScore: " + score.textContent);
}

function findResults(playerScore, pcScore) {
    const resultsBox = document.querySelector('.result');


    if (pcScore > playerScore) {
        resultsBox.textContent = "Computer WON the game!!!"
    }
    else if (pcScore < playerScore) {
        resultsBox.textContent = "You WON the game!!!"
    }
    else {
        resultsBox.textContent = "Game ended in a TIE!!!"
    }
}


//let currRound = 0;


const choice = document.querySelector('.choices');
const choices = choice.querySelectorAll('div');

let playerScore = 0;
let pcScore = 0;


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        

        if (playerScore < 5 && pcScore < 5) {
            game(choice.classList[0].toString());
            //addPoint('.round')
        }

        playerScore = parseInt(document.querySelector('.playerScore').textContent);
        pcScore = parseInt(document.querySelector('.computerScore').textContent);

        if (playerScore == 5 || pcScore == 5)
            findResults();
    })
})





// const choice = document.querySelector('.choices');
// const choices = choice.querySelectorAll('div');

// choices.forEach((choice) => {
//     choice.addEventListener('click', () => {
//         choice.classList[0];
//     })
// })



game()