

// Weapons Rock, PAper or Scissors
let weapones = ["rock","paper","scissors"];

// computer play choose the weapon randomly
function computerPlay()
{
    let selection = Math.floor(Math.random() * weapones.length);
    return weapones[selection];
}

//player tern prompte plyer to choose weapon
function playerPlay()
{

    const msg = `Choose P for Paper, R for Rock and S for Scissors`
    let selection = window.prompt(msg, "").toLowerCase();

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
    if(playerSelection == "rock" && computerSelection == "rock")
    {
        result = "You Lose!, paper beats rook";
    }
    
    
    return result;
}



 function game()
 {

    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    playRound(playerSelection,computerSelection)

    console.log(playRound(playerSelection,computerSelection))
 }




console.log(game());


