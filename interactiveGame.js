// First Interactive Game

let playGame = confirm("Shall We Play Rock, Paper, or Scissors");
if(playGame){
    //play
    let playerChoice = prompt("Please enter Rock,Paper, or Scissors");
    if(playerChoice){
        let player1 = playerChoice.trim() .toLowerCase();
        if(
            player1 === "rock" ||
            player1 === "paper"||
            player1 === "scissors"
         ) {
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice === 1 ? "rock" 
                : computerChoice === 2 ? "paper"
                : "scissors";
            let result = 
                player1 === computer 
                ? "Tie Game!"
                :player1 === "rock" && computer === "paper"
                ? `player1: ${player1} \nComputer: ${computer}\nComputer Wins!`
                :player1 === "paper" && computer === "scissors"
                ? `player1: ${player1} \nComputer: ${computer}\nComputer Wins!`
                :player1 === "scissors" && computer === "rock"
                ? `player1: ${player1} \nComputer: ${computer}\nComputer Wins!`
                : `player1: ${player1} \nComputer: ${computer}\nPlayer1 Wins!`;
                alert(result);
                let playAgain = confirm("Play Again?");
                playAgain ? location.reload() : alert("Ok, Thanks for Playing");
        }
        else{
            alert("You didn't Enter Rock, Paper, or Scissors");
        }
    }   
        else{
            alert("I Guess, You have Changed Your Mind. Maybe Next Time.");
        }
    }
        else{
            alert("Ok, Maybe Next Time.");
        }        