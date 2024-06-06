function getComputerChoice(){
    if(Math.random()<=0.3){
        return "rock";
    } else if(Math.random()<=0.6){
        return "paper";
    }else{
        return "scissor";
    }
}
function getHumanChoice(){
    let humanchoice= prompt("Choose either ROCK, PAPER or SCISSOR");
    if(humanchoice.toLowerCase()=="rock"){
        return "rock";
    }else if(humanchoice.toLowerCase()=="paper"){
        return "paper";
    }else if(humanchoice.toLowerCase()=="scissor"){
        return "scissor";
    }else{
        console.log("Invalid choice made");
    }
}
humanScore=0;
computerScore=0;
function playRound(HumanChoice,ComputerChoice){
    if(HumanChoice=="rock"&& ComputerChoice=="scissor"|| HumanChoice=="scissor"&& ComputerChoice=="paper"||HumanChoice=="paper"&& ComputerChoice=="rock"){
        console.log("YOU WIN!!"+HumanChoice+"beats"+ComputerChoice);
        humanScore++;
    }else if(HumanChoice=="rock"&& ComputerChoice=="paper"|| HumanChoice=="scissor"&& ComputerChoice=="rock"||HumanChoice=="paper"&& ComputerChoice=="scissor"){
        console.log("YOU LOSE!"+ComputerChoice+"beats"+HumanChoice);
        computerScore++;
    }else if(HumanChoice==ComputerChoice){
        console.log("ITS A DRAW! You both chose"+HumanChoice);
    }
}


function playGame(){
    for(i=0;i<4;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>computerScore){
        console.log("YOU WIN!! Your score is:"+humanScore+"Computer Score is:"+computerScore);
    }else if(humanScore<computerScore){
        console.log("YOU LOSE!! Your score is:"+humanScore+"Computer Score is:"+computerScore);
    }else{
        console.log("YOU WIN!! Your score is:"+humanScore+"Computer Score is:"+computerScore)
    }
}
playGame();