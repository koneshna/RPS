let compChoice = {value: ""}

function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3)
    if (choiceNum == 0){
        compChoice.Value = 'rock';
    }
    else if (choiceNum == 1){
        compChoice.Value = 'paper';
    }
    else if (choiceNum == 2){
        compChoice.Value = 'scissors'
    }
    return choiceNum;
}