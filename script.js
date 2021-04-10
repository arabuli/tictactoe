let game = {
  // Object for storing marker placed on board
  boardObject: {},

  startGame: function () {
    let startGame = document.createElement("button");
    startGame.textContent = "Start";
    startGame.classList.add("start-game");
    let startTitle = document.getElementsByClassName("start-title")[0];
    startTitle.appendChild(startGame);

    startGame.addEventListener("click", function () {
      let gameBoardSelector = document.getElementsByClassName("game-board")[0];
      if (gameBoardSelector.childNodes.length > 3) {
        while (gameBoardSelector.firstChild) {
          gameBoardSelector.firstChild.remove();
        }
        game.boardObject = {};
        game.drawGameBoard();
      } else {
        game.drawGameBoard();
      }
      game.addMarker();
    })
  },

  // Draw gameboard in html.
  drawGameBoard: function () {
    let gameBoardSelector = document.getElementsByClassName("game-board")[0];
    for (let i = 0; i < 9; i++) {
      let divCreate = document.createElement("div");
      divCreate.setAttribute("id", i)
      gameBoardSelector.appendChild(divCreate);
    }
  },

  // Let player place marker on board.
  addMarker: function () {
    let gameBoardSelector = document.getElementsByClassName("game-board")[0];
    let everyCell = Array.prototype.slice.call(gameBoardSelector.children);
    let marker = "0";
    for (let i = 0; i < everyCell.length; i++) {
      everyCell[i].addEventListener("click", function (e) {
        if (everyCell[i].textContent == "" && marker == "0") {
          marker = "X";
          game.boardObject[i] = marker;
          everyCell[i].textContent = game.boardObject[i];
          game.checkWinner();
        } else if (everyCell[i].textContent == "" && marker == "X") {
          marker = "0";
          game.boardObject[i] = marker;
          everyCell[i].textContent = game.boardObject[i];
          game.checkWinner();
        }
      });
    }
  },

  // Popup with winner information
  winnerPopup: function (winner) {
    let gameBoardSelector = document.getElementsByClassName("game-board")[0];
    let winnerDiv = document.createElement("div");
    winnerDiv.classList.add("winner-div");
    winnerDiv.innerHTML = winner;
    gameBoardSelector.appendChild(winnerDiv);
  },

  // Check who won.
  checkWinner: function () {
    let winner = "";
    if (game.boardObject[0] == "X" && game.boardObject[1] == "X" && game.boardObject[2] == "X" || game.boardObject[0] == "0" && game.boardObject[1] == "0" && game.boardObject[2] == "0") {
      winner = `${game.boardObject[0]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[0] == "X" && game.boardObject[3] == "X" && game.boardObject[6] == "X" || game.boardObject[0] == "0" && game.boardObject[3] == "0" && game.boardObject[6] == "0") {
      winner = `${game.boardObject[0]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[0] == "X" && game.boardObject[4] == "X" && game.boardObject[8] == "X" || game.boardObject[0] == "0" && game.boardObject[4] == "0" && game.boardObject[8] == "0") {
      winner = `${game.boardObject[0]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[2] == "X" && game.boardObject[4] == "X" && game.boardObject[6] == "X" || game.boardObject[2] == "0" && game.boardObject[4] == "0" && game.boardObject[6] == "0") {
      winner = `${game.boardObject[2]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[2] == "X" && game.boardObject[5] == "X" && game.boardObject[8] == "X" || game.boardObject[2] == "0" && game.boardObject[5] == "0" && game.boardObject[8] == "0") {
      winner = `${game.boardObject[2]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[6] == "X" && game.boardObject[7] == "X" && game.boardObject[8] == "X" || game.boardObject[6] == "0" && game.boardObject[7] == "0" && game.boardObject[8] == "0") {
      winner = `${game.boardObject[6]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[3] == "X" && game.boardObject[4] == "X" && game.boardObject[5] == "X" || game.boardObject[3] == "0" && game.boardObject[4] == "0" && game.boardObject[5] == "0") {
      winner = `${game.boardObject[3]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[4] == "X" && game.boardObject[5] == "X" && game.boardObject[7] == "X" || game.boardObject[4] == "0" && game.boardObject[5] == "0" && game.boardObject[7] == "0") {
      winner = `${game.boardObject[4]} Wins`;
      game.winnerPopup(winner);
    } else if (game.boardObject[1] == "X" && game.boardObject[4] == "X" && game.boardObject[7] == "X" || game.boardObject[1] == "0" && game.boardObject[4] == "0" && game.boardObject[7] == "0") {
      winner = `${game.boardObject[1]} Wins`;
      game.winnerPopup(winner);
    }
  },
}

game.startGame();