let player_score = 0;
let cpu_score = 0;
let cards = document.querySelectorAll('div.play-option');
const player_score_text = document.querySelector('div.score-player-1');
const cpu_score_text = document.querySelector('div.score-player-2');
const start_btn = document.querySelector('div.start-btn');
start_btn.addEventListener('click',game_start);
console.log(start_btn);

function readCard(){
    let div = this;
    let player_choice = div.getElementsByClassName('text')[0].textContent
    console.log(`Player:${player_choice}`);
    game_stop_listening();
    div.style = `transition:0.8s;transform: translate(0px,-120%)`
    div.addEventListener('transitionend',function(e){
        div.style = `transition:0.8s;transform: translate(0px,0px)`
        div.addEventListener('transitionend',function(e){game_listen();})
     })
    console.log(playRound(player_choice));
    score_update();

}

function score_update(){
    
    player_score_text.textContent = `You:${player_score}`;
    cpu_score_text.textContent = `Cpu:${cpu_score}`;
    if(player_score == 5||cpu_score==5) game_end();
}

function game_start(e) {
    console.log(e);
    player_score = 0;
    cpu_score = 0;
    start_btn.style.visibility='hidden';
    score_update();
    game_listen();
    
}

function game_end() {
    //player_score = 0;
    //cpu_score = 0
    game_stop_listening();
    start_btn.style.visibility='visible';
    if(cpu_score==5){start_btn.classList.add('lose-text');start_btn.textContent = "You Lost";}else{
        start_btn.classList.add('win-text');start_btn.textContent = "You Won";
    }
    game_stop_listening();
}
function game_stop_listening() {
    //player_score = 0;
    //cpu_score = 0
    cards.forEach(card => card.removeEventListener('click',readCard));
}
function game_listen() {
    //player_score = 0;
    //cpu_score = 0
    cards.forEach(card => card.addEventListener('click',readCard));
}


function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    const opptions = ["Rock", "Paper", "Scissors"];
    let computer_choice = opptions[random];
    console.log(`Cpu:${computer_choice}`);
    const Cpu_card = document.querySelector(`div.${computer_choice}`);
    Cpu_card.style = `transition:0.8s;transform: translate(0px,120%)`
    Cpu_card.addEventListener('transitionend',function(e){
       // if(e.propetrtyName !== 'transform') return;
        Cpu_card.style = `transition:0.8s;transform: translate(0px,0px)`

    })
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