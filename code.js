

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


function game() {
    let pcScore = 0;
    let playerScore = 0;

    for (let index = 0; index < 5; index++) {

        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Choose rock, paper or scissors: ")

        let result = findWinner(playerSelection.toLowerCase(), computerSelection)
        console.log(result)

        if (result[4] === "W")
            playerScore++
        else if (result[4] === "L")
            pcScore++
        else {
            playerScore++
            pcScore++
        }

        console.log("Computer score: " + pcScore)
        console.log("Player score: " + playerScore)

    }

    if(pcScore > playerScore)
    {
        console.log("Computer WON the game!!!")
    }
    else if(pcScore < playerScore)
    {
        console.log("You WON the game!!!")
    }
    else{
        console.log("Game ended in a TIE!!!")
    }
}


game()