const gameboard = document.querySelector(".gameboard");
const resetbutton = document.querySelector("#resetbutton");
const playerName = document.querySelector("#playerName");

let gameState = {
  players: ["X", "O"],
  playerName: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  count: 0,
};

function boardState() {
  gameState.board[0][0] = document.getElementById("00").innerHTML;
  gameState.board[0][1] = document.getElementById("01").innerHTML;
  gameState.board[0][2] = document.getElementById("02").innerHTML;
  gameState.board[1][0] = document.getElementById("10").innerHTML;
  gameState.board[1][1] = document.getElementById("11").innerHTML;
  gameState.board[1][2] = document.getElementById("12").innerHTML;
  gameState.board[2][0] = document.getElementById("20").innerHTML;
  gameState.board[2][1] = document.getElementById("21").innerHTML;
  gameState.board[2][2] = document.getElementById("22").innerHTML;
  console.log(gameState.board);
}

function renderBoard() {
  gameboard.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cells");
      cell.setAttribute("id", `${i}${j}`);
      gameboard.appendChild(cell);
      console.log("board rendering");
    }
  }
}

playerName.addEventListener("click", nameInput);
gameboard.addEventListener("click", (e) => {
  if (!e.target.innerHTML) {
    gameState.count % 2 === 0
      ? (e.target.innerHTML = "X")
      : (e.target.innerHTML = "O");
    gameState.count++;
    boardState();
  }
});

function nameInput(event) {
  if (event.target.className === "startbutton") {
    const player1Name = document.querySelector("input[name = player1Name]");
    const player2Name = document.querySelector("input[name = player2Name]");
    gameState.playerName[0] = player1Name.value;
    gameState.playerName[1] = player2Name.value;
    console.log(gameState);
    render();
  } else if (event.target.className === "resetbutton") {
    reset();
    render();
    console.log("name input working");
  }
}

function playerNames() {
  if (gameState.playerName[0] === "X") {
    playerName.innerHTML = `
    <input id='player1Name' name ='player1Name' placeholder ='Enter Name'> 
    <input id='player2Name' name ='player2Name' placeholder ='Enter Name'>
    <button class='startbutton'>start</button>
    `;
  } else {
    playerName.innerHTML = `
    <p> player 1: ${gameState.playerName[0]}
    player 2: ${gameState.playerName[1]}</p>
    <button class= 'resetbutton'>RESET</button>
  `;
  }
}

function reset() {
  gameState = {
    players: ["X", "O"],
    playerName: ["X", "O"],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    count: 0,
  };
  document.getElementById("00").innerHTML = "";
  document.getElementById("01").innerHTML = "";
  document.getElementById("02").innerHTML = "";
  document.getElementById("10").innerHTML = "";
  document.getElementById("11").innerHTML = "";
  document.getElementById("12").innerHTML = "";
  document.getElementById("20").innerHTML = "";
  document.getElementById("21").innerHTML = "";
  document.getElementById("22").innerHTML = "";
  console.log("reset working");
}

function render() {
  playerNames();
  renderBoard();
}
render();
