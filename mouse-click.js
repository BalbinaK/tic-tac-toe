var table = document.querySelector('tbody');
var field0 = document.querySelector('.field0');
  var field1 = document.querySelector('.field1');
  var field2 = document.querySelector('.field2');

//dodaję warunek, że komórka nie może być już z klasą x lub o
table.addEventListener('click', function (event) {
  var availableCells = document.querySelectorAll('td:not(.x):not(.o)');

  if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
    return;
  }

  event.target.classList.add('x');
  checkResult('x');
  //drawItem('o');

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


function checkResult(player) {
  if (field0.classList.contains(player) && field1.classList.contains(player) && field2.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
}
