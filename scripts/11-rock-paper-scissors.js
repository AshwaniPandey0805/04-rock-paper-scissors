let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

// if(!score){   // (score === null) => (!score) -> true
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }
let isAutoPlaying = false;
let intervalID;


function autoPlay(){
    if(!isAutoPlaying){
        intervalID = setInterval(function(){
            const playerMove = pickComputermove();
            playerGame(playerMove);
    
        }, 1000);
        isAutoPlaying = true;

    }else{
        clearInterval(intervalID);
        isAutoPlaying = false;

    }
    
}
    





function playerGame(playerMove){

    const computerMove = pickComputermove();
    let result = '';
    
    console.log(playerMove);


    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else if(computerMove === 'scissors'){
            result = 'Tie';
        }

       

    }

    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'scissors'){
            result = 'You Win';
        }

       
    }

    if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
    }

    if(result ===  'You Win'){
        score.wins = score.wins + 1;
    } else if(result === 'You Lose'){
        score.losses = score.losses + 1;
    }else if(result === 'Tie'){
        score.ties = score.ties + 1;
    }

    document.querySelector('.js-result')
        .innerHTML = `${result}`;

    document.querySelector('.js-moves')
        .innerHTML = `You
        <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
        Computer`;

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

//             alert(`You picked paper. Computer picked ${computerMove}. ${result}
// Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`);
}




function updateScoreElement(){

    document.querySelector('.js-score-element')
        .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}

function pickComputermove(){
    const randomVariable = Math.random();
    let computerMove = '';

    if (randomVariable >= 0 && randomVariable < 1/3){
        computerMove = 'rock';
    }
    else if ( randomVariable >= 1/3 && randomVariable < 2/3){
        computerMove = 'paper';
    }
    else if(randomVariable >= 2/3 && randomVariable < 1){
        computerMove = 'scissors';
    }

    return computerMove;

}