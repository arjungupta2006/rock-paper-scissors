const score = JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
      ties: 0,
    };

    document.querySelector(
      ".js-score"
    ).innerHTML = `wins:${score.wins},losses:${score.losses},ties:${score.ties}`;

    function updatescore() {
      document.querySelector(
        ".js-score"
      ).innerHTML = `wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
    }

    function playGame(playerMove) {
      const randomNum = Math.random();
      let compmove = "";
      if (randomNum >= 0 && randomNum < 1 / 3) {
        compmove = "rock";
      } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        compmove = "paper";
      } else {
        compmove = "scissors";
      }
      let result = "";
      if (playerMove == compmove) {
        result = "tie";
        score.ties++;
      } else if (
        (playerMove == "rock" && compmove == "scissors") ||
        (playerMove == "paper" && compmove == "rock") ||
        (playerMove == "scissors" && compmove == "paper")
      ) {
        result = "you win";
        score.wins++;
      } else {
        result = "you lose";
        score.losses++;
      }

      localStorage.setItem("score", JSON.stringify(score));

      updatescore();
      document.querySelector(".js-info").innerHTML = `${result}`;
      document.querySelector(
        ".js-data"
      ).innerHTML = `You <img src="icons/${playerMove}-emoji.png" class="icon" />
    <img src="icons/${compmove}-emoji.png" class="icon" /> Computer`;
    }