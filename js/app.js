

// Weapons Rock, PAper or Scissors
let weapones = ["rock","paper","scissors"];
// player score
let playerScore = 0;
//computer score
let computerScore = 0;


// computer play choose the weapon randomly
function computerPlay(){
    let selection = Math.floor(Math.random() * weapones.length);
    return weapones[selection];
}

//player tern prompte plyer to choose weapon
function playerPlay()
{
    const msg = `Choose P for Paper, R for Rock and S for Scissors`
    //let selection = window.prompt(msg, "").toLowerCase();
    switch(selection)
    {
        case "p":
          selection = "paper";
          break;
        case "r":
          selection = "rock";
          break;
        case "s":  
          selection = "scissors"
          break;      
    }     
            
    //return player selection  
    return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection) 
{    
    //paper beats rock
    //rock beats scissors
    //scissors beats papper
    let result = "";
    if (playerSelection === computerSelection){
           result = "Tie"; 
    }  
    else if(playerSelection == "rock")
    {
        if(computerSelection == "scissors"){
            result = "Player Win";
            playerScore += 1;
        }else{
            result = "Computer Win";
            computerScore += 1;
        }
    } else if(playerSelection == "paper")
    {
        if(computerSelection == "rock"){
            result = "Player Win";
            playerScore += 1;
        }else{
            result = "Computer Win";
            computerScore += 1;
        }
    }else if(playerSelection == "scissors"){
        if(computerSelection == "paper")
        {
            result = "Player Win";
            playerScore += 1;
        }else{
            result = "Computer Win";
            computerScore += 1;
        }
    }

    
    return result;
}



 function game()
 {

    let winner = "";
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    winner = playRound(playerSelection,computerSelection)

    console.log(winner);

    //reset scores
    // playerScore = 0;
    // computerScore = 0;
 }



game();



