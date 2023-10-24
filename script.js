console.log("Hello world!");

function getComputerChoice() {
    let choice = Math.random()
    if (choice <= 0.33) {return "rock";}
    else if (choice >0.33 && choice <= 0.66) {return "paper";}
    else return "scissors";
}

function getPlayerChoice() {
    let choice = prompt ("enter your choice:");
    choice = choice.toLowerCase();

    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }
    else {
        while (true) {
            let choice = prompt (`Invalid entry! Enter "rock", "paper" or "scissors":`)
            choice = choice.toLowerCase();
            
            if (choice == "rock" || choice == "paper" || choice == "scissors") {
                return choice;
            }
        }
    }
 }

 
function playRound(comChoice, userChoice) {
    console.log (`playing user: ${userChoice} com: ${comChoice}`);
    
    if (comChoice === userChoice) {
        return "tie";
    }

    if  ((comChoice == "rock" && userChoice == "scissors")  ||
        
        (comChoice == "paper" && userChoice == "rock")  || 
    
        (comChoice == "scissors" && userChoice == "paper")) {
        return "com wins";
    }

    if  ((userChoice == "rock" && comChoice == "scissors")  ||

        (userChoice == "paper" && comChoice == "rock")  || 
    
        (userChoice == "scissors" && comChoice == "paper")) {
        return "player wins"
    }
}


function game() {
    console.log("beginning game")

    // CALL VARIABLES FIRST
    let playerWins = 0;
    let comWins = 0;
    let ties = 0;


    for (i = 0; i <= 4; i++) {
        console.log (`round ${i + 1}`)
        
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();


        let result = playRound(computerChoice, playerChoice);

        if (result == "player wins") {playerWins++;}
        if (result == "com wins") {comWins++;}
        if (result == "tie") {ties++;}

        console.log(`round ${i+1} result: ${result}`);
        console.log(`player score: ${playerWins}`);
        console.log(`com score: ${comWins}`);
        console.log(`ties: ${ties}`);
    }

    if (playerWins > comWins) {console.log("Player Wins!!")}
    else if (comWins > playerWins) {console.log("Computer Wins!!")}
    else if (playerWins == comWins) {console.log("Draw!!")}
    else {console.log("there has been an error...")}

}

game();