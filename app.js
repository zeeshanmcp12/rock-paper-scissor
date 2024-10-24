console.log("✊Rock  ✋🏻Paper ✌🏽Scissors")

let choices = document.querySelectorAll(".choice");
let msgPara = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score")
let computerScorePara = document.querySelector("#computer-score")

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let choiceIdx = Math.floor(Math.random() * 3); // 3 se kam main random number generate karane k liye kisi bhi ko number ko 3 se multiply kardo.
    // console.log(choiceIdx);
    return options[choiceIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msgPara.innerText = `Game was Draw`;
    msgPara.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin === true){
        userScore++;
        userScorePara.innerText = userScore;0
        msgPara.innerText = `You Won! Your ${userChoice} beats ${computerChoice}`;
        msgPara.style.backgroundColor = "green";
    }else if (userWin === false) {
        compScore++;
        computerScorePara.innerText = compScore;
        msgPara.innerText = `You Lost! Computer ${computerChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log(`user Choice: ${userChoice}`);
    const computerChoice = genCompChoice();
    console.log(`computer Choice: ${computerChoice}`);

    if(userChoice === computerChoice){
        drawGame();
    }else {
        userWin = true; // here, we are assuming that whether we are winning here or not.
        if(userChoice === "scissor"){
            // computerChoice = scissor / paper
            userWin = computerChoice === "rock" ? false : true;
            // console.log(`Your ${userChoice} beats ${userWin}`);
        } else if (userChoice === "paper"){
            // computerChoice = rock / paper
            userWin = computerChoice === "scissor" ? false : true;
            // console.log(`is User Won: ${userWin}`);
        }else {
            // computerChoice = rock / scissor
            userWin = computerChoice === "paper" ? false : true; 
            // console.log(`is User Won: ${userWin}`);
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})



