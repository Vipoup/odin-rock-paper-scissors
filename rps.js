function getComputerChoice(){
    let randChoice = Math.floor(Math.random() * 3);
    switch(randChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break; 
    }
}

function getInput(){
    playerChoice = prompt("Choose [rock, paper, scissors].");
    check = true;
    while(check){
        playerChoice = playerChoice.toLowerCase();
        if(playerChoice === "rock" || 
        playerChoice === "paper" ||
        playerChoice === "scissors"){
            check = false;
            return playerChoice;
        }else{
            playerChoice = prompt("Invalid choice. Choose [rock, paper, scissors]");
        }
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === "rock" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "paper"){

        return 0;
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "scissors" && computerChoice === "paper" ||
    playerChoice === "paper" && computerChoice === "rock"){

        return 1;
    } else {

        return 2;
    }
}

function playGame(){
    let playerChoice, computerChoice;
    let roundWinner;
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        playerChoice = getInput();
        computerChoice = getComputerChoice();
        roundWinner = playRound(playerChoice, computerChoice);

        switch(roundWinner){
            case 0:
                console.log(`You:${playerChoice} || Computer: ${computerChoice} || Tied`);
                break;
            case 1:
                console.log(`You:${playerChoice} || Computer: ${computerChoice} || You have Won!`);
                playerScore++;
                break;
            case 2:
                console.log(`You:${playerChoice} || Computer: ${computerChoice} || You have lost.`);
                computerScore++;
                break;
        }

        console.log(`Current Score: Player-${playerScore}, Computer-${computerScore}`);
    }

    console.log(`Final Score: Player-${playerScore}, Computer-${computerScore}`);

    if(playerScore > computerScore){
        return "You win!"
    }else if(playerScore < computerScore){
        return "You lose."
    }else{
        return "Tied."
    }
}