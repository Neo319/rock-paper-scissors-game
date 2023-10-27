console.log("Hello world!");

function getComputerChoice() {
    let choice = Math.random()
    if (choice <= 0.33) {return "rock";}
    else if (choice >0.33 && choice <= 0.66) {return "paper";}
    else return "scissors";
}


const rock = document.getElementById ("rock");
const paper = document.getElementById ("paper");
const scissors = document.getElementById ("scissors");
const results = document.getElementById ("results");
const winDisplay = document.getElementById ("winner");

let playerWins = 0;
let comWins = 0;
let ties = 0;

rock.addEventListener ("click", () => {
    playRound("rock");
});

paper.addEventListener ("click",  () => {
    playRound("paper");
});

scissors.addEventListener ("click", () => {
    playRound("scissors");
});

function playRound(playerChoice) {
    let winner = ''
    let comChoice = getComputerChoice();
        
    if (comChoice === playerChoice) {
        winner = "tie";
    }
    if  ((comChoice == "rock" && playerChoice == "scissors")  ||
    (comChoice == "paper" && playerChoice == "rock")  || 
    (comChoice == "scissors" && playerChoice == "paper")) {
        winner = "com wins";
    }
    if  ((playerChoice == "rock" && comChoice == "scissors")  ||
    (playerChoice == "paper" && comChoice == "rock")  || 
    (playerChoice == "scissors" && comChoice == "paper")) {
        winner = "player wins";    
    }
    results.textContent = `playing user: ${playerChoice} com: ${comChoice} -- ${winner}`;

    if (winner === "tie") {ties++}
    else if (winner === "com wins") {comWins++}
    else if (winner === "player wins") {playerWins++}
    else console.log("there has been an error...");

    score.textContent = `Score: player = ${playerWins}; com = ${comWins}; ties = ${ties}`;

    if (playerWins == 5) {winDisplay.textContent = "PLAYER WINS"}
    else if (comWins == 5) {winDisplay.textContent = "COM WINS"};

    if (playerWins == 5 || comWins == 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

}








// function game() {
//     console.log("beginning game")

//     // CALL VARIABLES FIRST
//     let playerWins = 0;
//     let comWins = 0;
//     let ties = 0;


//     for (i = 0; i <= 4; i++) {
//         console.log (`round ${i + 1}`)

//         let playerChoice = getPlayerChoice();
//         let computerChoice = getComputerChoice();


//         let roundResult = playRound(computerChoice, playerChoice);

//         if (roundResult == "player wins") {playerWins++;}
//         if (roundResult == "com wins") {comWins++;}
//         if (roundResult == "tie") {ties++;}

//         console.log(`round ${i+1} roundResult: ${roundResult}`);
//         console.log(`player score: ${playerWins}`);
//         console.log(`com score: ${comWins}`);
//         console.log(`ties: ${ties}`);
//     }

//     if (playerWins > comWins) {console.log("Player Wins!!")}
//     else if (comWins > playerWins) {console.log("Computer Wins!!")}
//     else if (playerWins == comWins) {console.log("Draw!!")}
//     else {console.log("there has been an error...")}

// }

// game();