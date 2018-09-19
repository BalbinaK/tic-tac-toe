var table = document.querySelector('tbody');
var x = document.querySelectorAll('x');

//dodaj warunek, że komórka nie może być już z klasą x lub o
table.addEventListener('click', function (event) {
  event.target.classList.add('x');
  drawItem('o');

  function drawNumberFromRange(size) {
    return Math.floor(Math.random() * size);
  }

  function drawCellFromSelector(selector) {
    var availableCells = document.querySelectorAll(selector);
    var randomIndex = drawNumberFromRange(availableCells.length);
    return availableCells[randomIndex];
  }

  function drawItem(name) {
    var randomCell = drawCellFromSelector('td:not(.x):not(.o)');
    randomCell.classList.add(name);
  }
})