// JavaScript for Tic-Tac-Toe game
document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const message = document.getElementById("message");
    const newGameButton = document.getElementById("new-game");
    
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;
    
    // Function to check for a win
    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }
        
        if (!gameBoard.includes("")) {
            return "Tie";
        }
        
        return null;
    };
    
    // Function to handle a move
    const handleMove = (cell, index) => {
        if (gameBoard[index] === "" && !gameOver) {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            
            const winner = checkWin();
            if (winner) {
                if (winner === "Tie") {
                    message.textContent = "It's a Tie!";
                } else {
                    message.textContent = `Player ${winner} wins!`;
                }
                gameOver = true;
            }
        }
    };
    
    // Event listeners for cell clicks
    board.addEventListener("click", (e) => {
        if (e.target.classList.contains("cell")) {
            const cell = e.target;
            const index = parseInt(cell.getAttribute("data-index"));
            handleMove(cell, index);
        }
    });
    
    // Event listener for New Game button
    newGameButton.addEventListener("click", () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        board.querySelectorAll(".cell").forEach((cell) => {
            cell.textContent = "";
        });
        currentPlayer = "X";
        gameOver = false;
        message.textContent = "";
    });
    
    // Create the game board cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", i);
        board.appendChild(cell);
    }
});