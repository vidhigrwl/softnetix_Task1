let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = parseInt(cell.id.split('-')[1]);
        if (board[index] === '') {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer === 'X' ? 'x-mark' : 'o-mark'); // Add class based on currentPlayer
            cell.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
            } else if (board.every(square => square !== '')) {
                alert("It's a draw!");
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

resetButton.addEventListener('click', resetGame);

function checkWin(player) {
    return winningCombos.some(combination => {
        return combination.every(index => board[index] === player);
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
