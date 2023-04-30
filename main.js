//const divs = document.querySelector('div');
//console.log(divs);
//console.log(divs);
//divs.forEach(div => div.addEventListene('click',getCard));
let player_score = 5;
let cpu_score = 0;
let cards = document.querySelectorAll('div.play-option');
let rounds = 0
const player_score_text = document.querySelector('div.score-player-1');
const cpu_score_text = document.querySelector('div.score-player-2');

//cards.forEach(card => card.addEventListener('click',readCard));
function readCard(e){
    let div = this;
    let player_choice = div.getElementsByClassName('text')[0].textContent
    console.log(`Player:${player_choice}`);
    console.log(playRound(player_choice));
    score_update();
    if(rounds == 1) game_end();
    rounds--;

}

function score_update(){
    
    player_score_text.textContent = `You:${player_score}`;
    cpu_score_text.textContent = `Cpu:${cpu_score}`;
}

function game_start() {
    player_score = 0;
    cpu_score = 0;
    rounds = 5;
    score_update();
    cards.forEach(card => card.addEventListener('click',readCard));
}

function game_end() {
    //player_score = 0;
    //cpu_score = 0
    cards.forEach(card => card.removeEventListener('click',readCard));
}



function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    const opptions = ["Rock", "Paper", "Scissors"];
    let computer_choice = opptions[random];
    console.log(`Cpu:${computer_choice}`);
    return computer_choice;
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
                    cpu_score++;
                    return "You Lose! Paper beats Rock"
                    break;
                case "scissors":
                    player_score++;
                    return "You Win! Rock beats Scissors"
                    
                    break;
            }
            break;
        case "paper":
            switch (computer) {
                case "rock":
                    player_score++;
                    return "You Win! Paper beats Rock"
                    
                    break;
                case "paper":
                    return "Tie"
                    break;
                case "scissors":
                    cpu_score++;
                    return "You Lose! Scissors beats Paper"
                    
                    break;
            }
            break;
        case "scissors":
            switch (computer) {
                case "rock":
                    cpu_score++;
                    return "You Lose! Rock beats Scissors"
                    
                    break;
                case "paper":
                    player_score++;
                    return "You Win! Scissors beats Paper"
                    
                    break;
                case "scissors":
                    return "Tie"
                    break;
            }
            break;
        default:
            return "wrong_input"
    }

}