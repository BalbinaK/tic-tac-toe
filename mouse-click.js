var table = document.querySelector('tbody');
var availableCells = document.querySelectorAll('td:not(.x):not(.o)');

//dodaj warunek, że komórka nie może być już z klasą x lub o
table.addEventListener('click', function (event) {
 // if (availableCells) {
  event.target.classList.add('x');
  drawItem('o');
  })
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