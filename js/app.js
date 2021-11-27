

// Weapons Rock, PAper or Scissors
const weapones = {ROCK:"rock", 
                PAPER:"paper",
                SCISSORS:"scissors"};

// player score
let playerScore = 0;
//computer score
let computerScore = 0;
//round
let roundNum = 0;

//weapones objects
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScoreTxt = document.querySelector("div.player-score").children[1];
const computerScoreTxt = document.querySelector("div.computer-score").children[1];

// computer play choose the weapon randomly
function computerPlay(){
    //weapons object length
    const length = Object.keys(weapones).length;
    //available weapons
    const computerChoices = Object.keys(weapones);
    //random index in weapons range
    let idx = Math.floor(Math.random() * length);    
    //select weapon randmly
    const weapon = computerChoices[idx];
    
    //return weapon
    return weapones[weapon];
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



function play(SelectedWeapon){
    
    
    let winner = "";  
    let playerSelection = "";
    let computerSelection = "";

    //round numer
    roundNum += 1;

   
    //Computer seletction Randomly
    computerSelection = computerPlay();       
    //player Selection 
    playerSelection = SelectedWeapon;

    winner = playRound(playerSelection,computerSelection);

    console.log(`
    Round : ${roundNum}
    Player Select: ${playerSelection}
    computer Select: ${computerSelection}
    winner is: ${winner}`);            

    updateScores();
}

function updateScores(){

    playerScoreTxt.innerHTML = playerScore;
    computerScoreTxt.innerHTML = computerScore;
    
}
function game()
{
    //game status
    let playRound = true;   

    //player selection depending on choosen weapon
    rock.addEventListener('click', function(){        
        play(weapones.ROCK);        
    });

    paper.addEventListener('click',function(){
        play(weapones.PAPER);        
    });
    scissors.addEventListener('click',function(){
        play(weapones.SCISSORS);       
    });   
}




//Start the game
game();





