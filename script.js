const board = document.getElementById('board');

const cells = document.querySelectorAll(".cell");

let currentPlayer = '☠️';

let gameActive = true;

function checkWinner() {
  const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
  [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];

for (let combo of winningCombos) {
  const [a, b, c] = combo;
  if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
    cells[a].style.backgroundColor = 'blue';
    cells[b].style.backgroundColor = 'blue';
    cells[c].style.backgroundColor = 'blue';
    gameActive = false;
    return true;
    
  }
}

if([...cells].every(cell => cell.textContent !=='')) {
  gameActive = false;
  return true;
}
return false;
}

function handleClick() {
  if(!gameActive || this.textContent !== '')return;
  
  this.textContent = currentPlayer;
  if (checkWinner()) {
    alert(currentPlayer + ' Mama huevo,Comer Pinga');
    return;
  }
  if (currentPlayer === '☠️') {
    currentPlayer = '🤓';
  } else {
    currentPlayer = '☠️';
  }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
