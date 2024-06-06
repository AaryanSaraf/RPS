function getComputerChoice(){
    if(Math.random()<=0.33){
        return "rock";
    } else if(Math.random()<=0.67){
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
        alert("Invalid choice made, choose again");
        getHumanChoice();
    }
}
humanScore=0;
computerScore=0;
function playRound(HumanChoice,ComputerChoice){
    if(HumanChoice=="rock"&& ComputerChoice=="scissor"|| HumanChoice=="scissor"&& ComputerChoice=="paper"||HumanChoice=="paper"&& ComputerChoice=="rock"){
        alert("YOU WIN!!"+HumanChoice+"beats"+ComputerChoice);
        humanScore++;
    }else if(HumanChoice=="rock"&& ComputerChoice=="paper"|| HumanChoice=="scissor"&& ComputerChoice=="rock"||HumanChoice=="paper"&& ComputerChoice=="scissor"){
        alert("YOU LOSE!"+ComputerChoice+"beats"+HumanChoice);
        computerScore++;
    }else if(HumanChoice==ComputerChoice){
        alert("ITS A DRAW! You both chose"+HumanChoice);
    }
}


function playGame(){
    for(i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>computerScore){
        alert("YOU WIN!! Your score is:"+humanScore+"Computer Score is:"+computerScore);
    }else if(humanScore<computerScore){
        alert("YOU LOSE!! Your score is:"+humanScore+"Computer Score is:"+computerScore);
    }else{
        alert("Its a DRAW!! Your score is:"+humanScore+" Computer Score is:"+computerScore)
    }
}
playGame();
