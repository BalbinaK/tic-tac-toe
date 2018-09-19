var endGameAlert = document.createElement('div');
game.appendChild(endGameAlert);
endGameAlert.classList.add('alert')

var cells = document.querySelector('td')

function cellTaken(cell) {
  return cell(!'td:not(.x):not(.o)');
}
//nie wiem jak sprawdzić warunek posiadania klasy "x" lub "o"
if (cells.forEach(function (item) {
  if (item.class === 'x' || item.class === 'o') {
    endGameAlert.classList.add('draw').innerHTML('No one wins');
  }
}
