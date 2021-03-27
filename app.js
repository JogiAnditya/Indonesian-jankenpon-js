const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // computer options
    const computerOptions = ["batu", "kertas", "gunting"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        // animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector(".winner");
    // check tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Seri ♊";
      return;
    }
    // check for batu
    if (playerChoice === "batu") {
      if (computerChoice === "gunting") {
        winner.textContent = "Kamu Menang 👍";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu Kalah 💔";
        cScore++;
        updateScore();
        return;
      }
    }
    // chek for kertas
    if (playerChoice === "kertas") {
      if (computerChoice === "gunting") {
        winner.textContent = "Kamu Kalah 💔";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu Menang 👍";
        pScore++;
        updateScore();
        return;
      }
    }
    // check gunting
    if (playerChoice === "gunting") {
      if (computerChoice === "batu") {
        winner.textContent = "Kamu Kalah 💔";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu Menang 👍";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // call all inner function
  startGame();
  playMatch();
};

game();
