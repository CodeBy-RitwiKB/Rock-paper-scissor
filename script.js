let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll('.choice');
const outcome = document.querySelector('#msg');

const userScoreCard = document.querySelector('#user');
const computerScoreCard = document.querySelector('#computer');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random()*3);
    return options[randomChoice];
}  

const drawGame = () => {
    outcome.innerText = `Game was Draw! Both chose the same option`;
    outcome.style.backgroundColor = "#154D71";
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin) {
        userScore++;
        userScoreCard.innerText = userScore;
        outcome.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        outcome.style.backgroundColor = "#4CAF50";
} else {
        computerScore++;
        computerScoreCard.innerText = computerScore;
        outcome.innerText = `You Lose! ${computerChoice} beats Your ${userChoice}`;
        outcome.style.backgroundColor = "#F44336";
    }
};

const playGame= (userChoice) => {
    // Generate computer choice
    const computerChoice = genCompChoice();

    if(userChoice === computerChoice) {
        // draw game
        drawGame();
    } else {
      let userWin = true;
        if(userChoice === 'rock') {
            // scissors,paper
            userWin = computerChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper') {
            // rock,scissors
            userWin  = computerChoice === 'scissors' ? false : true;
    } else {
        // rock,paper
        userWin= computerChoice === 'rock' ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  } 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Toggle dark/light mode
const modeBtn = document.createElement('button');
modeBtn.innerText = "Toggle Dark/Light Mode";
modeBtn.classList.add('toggle-mode-btn'); // Add class for styling
modeBtn.style.float = "right"; // Move button to far right
modeBtn.style.marginRight = "10px";
modeBtn.style.marginLeft = "auto";
modeBtn.style.marginTop = "20px";

// Place the button inside the h1
const heading = document.querySelector('h1');

heading.appendChild(modeBtn);
heading.style.position = "relative"; // Ensure h1 can contain floated elements
let mode = 'light';

modeBtn.addEventListener('click', () => {
    if (mode === 'light') {
        mode = 'dark';
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        modeBtn.innerText = "Switch to Light Mode";
    } else {
        mode = 'light';
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        modeBtn.innerText = "Switch to Dark Mode";
    }
});

// Set initial button text based on starting mode
modeBtn.innerText = "Switch to Dark Mode";