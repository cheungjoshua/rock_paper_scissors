
function computerPlay() 
{
    let r_p_s = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random()*r_p_s.length | 0);
    return r_p_s[random];
}

function playRound() 
{
    let player = prompt("Choice rock , paper or scissors", "".toLowerCase());
    let computer = computerPlay();
    
    if(player == "rock")
    {
        if(computer == "paper")
        {
            computerScore++;
            return lose;
        }
        else if(computer == "scissors")
        {
            playerScore++;
            return win;
        }
        else
        {
            return tie; 
        }
    }
    else if(player == "paper")
    {
        if(computer == "scissors")
        {
            computerScore++;
            return lose;
        }
        else if(computer == "rock")
        {
            playerScore++;
            return win;
        }
        else
        {
            return tie; 
        }
    }
    else if(player == "scissors")
    {
        if(computer == "rock")
        {
            computerScore++;
            return lose;
        }
        else if(computer == "paper")
        {
            playerScore++;
            return win;
        }
        else
        {
            return tie; 
        }
    }
}

let computerScore = 0;
let playerScore = 0;
let win = "You win";
let lose = "You lose";
let tie = "It is a tie";

function game() 
{
        
    
}

game();