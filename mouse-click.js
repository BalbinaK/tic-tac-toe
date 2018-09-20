var table = document.querySelector('tbody');


//dodaję warunek, że komórka nie może być już z klasą x lub o
table.addEventListener('click', function (event) {
  var availableCells = document.querySelectorAll('td:not(.x):not(.o)');
  
  if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
  return;
}

event.target.classList.add('x');
drawItem('o');

function drawNumberFromRange(size) {
  return Math.floor(Math.random() * size);
}

function drawCellFromSelector(selector) {
  availableCells = document.querySelectorAll(selector);
  var randomIndex = drawNumberFromRange(availableCells.length);
  return availableCells[randomIndex];
}

function drawItem(name) {
  var randomCell = drawCellFromSelector('td:not(.x):not(.o)');
  randomCell.classList.add(name);
}
})