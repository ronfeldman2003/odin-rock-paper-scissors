
function game(){
    prompt("pick Rock Paper or Scissors");


}




function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    const opptions = ["Rock", "Paper", "Scissors"];
    return opptions[random];
}
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    //console.log("pc" + ":" + computer);
    switch (player) {
        case "rock":
            switch (computer) {
                case "rock":
                    return "Tie"
                    break;
                case "paper":
                    return "You Lose! Paper beats Rock"
                    break;
                case "scissors":
                    return "You Win! Rock beats Scissors"
                    break;
            }
            break;
        case "paper":
            switch (computer) {
                case "rock":
                    return "You Win! Paper beats Rock"
                    break;
                case "paper":
                    return "Tie"
                    break;
                case "scissors":
                    return "You Lose! Scissors beats Paper"
                    break;
            }
            break;
        case "scissors":
            switch (computer) {
                case "rock":
                    return "You Lose! Rock beats Scissors"
                    break;
                case "paper":
                    return "You Win! Scissors beats Paper"
                    break;
                case "scissors":
                    return "Tie"
                    break;
            }
            break;

    }

}