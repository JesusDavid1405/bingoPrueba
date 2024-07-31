// bingo.js
document.addEventListener('DOMContentLoaded', () => {
    const bingoCard = document.getElementById('bingo-card');
    const numRows = 5;
    const numCols = 5;
    const numbers = Array.from({ length: numRows * numCols }, (_, i) => (i + 1) * 3);

    
    // Función para generar la tarjeta de Bingo
    function generateBingoCard() {
        bingoCard.innerHTML = '';
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const cell = document.createElement('div');
                cell.classList.add('bingo-cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.textContent = numbers[i * numCols + j];
                bingoCard.appendChild(cell);
            }
        }
    }
    
    // Función para marcar una "X" en una celda aleatoria
    function markX() {
        const cells = document.querySelectorAll('.bingo-cell');
        const unmarkedCells = Array.from(cells).filter(cell => !cell.classList.contains('marked'));
        if (unmarkedCells.length > 0) {
            const randomCell = unmarkedCells[Math.floor(Math.random() * unmarkedCells.length)];
            randomCell.classList.add('marked');
        }
    }

    // Función para marcar tres "X" en celdas aleatorias
    function markThreeX() {
        for (let i = 0; i < 3; i++) {
            markX();
        }
    }

    // Función para dibujar una línea vertical en una columna aleatoria
    function drawVerticalLine() {
        const cells = document.querySelectorAll('.bingo-cell');
        const col = Math.floor(Math.random() * numCols);
        cells.forEach(cell => {
            if (parseInt(cell.dataset.col) === col) {
                cell.classList.add('line');
            }
        });
    }
    
    generateBingoCard();


});
