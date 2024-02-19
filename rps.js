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

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === "rock" || 
    playerChoice === "paper" ||
    playerChoice === "scissors"){
        //continue
    }else{
        return "Invalid choice. Choose [rock, paper, scissors]";
    }

    if(playerChoice === "rock" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "paper"){

        return `You:${playerChoice} || Computer: ${computerChoice} || Tied`;
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "scissors" && computerChoice === "paper" ||
    playerChoice === "paper" && computerChoice === "rock"){

        return `You:${playerChoice} || Computer: ${computerChoice} || You have Won!`;
    } else {

        return `You:${playerChoice} || Computer: ${computerChoice} || You have lost.`;
    }
}