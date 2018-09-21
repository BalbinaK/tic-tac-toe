var table = document.querySelector('tbody');
var field0 = document.querySelector('.field0');
var field1 = document.querySelector('.field1');
var field2 = document.querySelector('.field2');
var field3 = document.querySelector('.field3');
var field4 = document.querySelector('.field4');
var field5 = document.querySelector('.field5');
var field6 = document.querySelector('.field6');
var field7 = document.querySelector('.field7');
var field8 = document.querySelector('.field8');

//dodaję warunek, że komórka nie może być już z klasą x lub o
table.addEventListener('click', function (event) {
  var availableCells = document.querySelectorAll('td:not(.x):not(.o)');

  if (event.target.classList.contains('x') || event.target.classList.contains('o')) {
    return;
  }

  event.target.classList.add('x');
  checkResult('x');
  drawItem('o');
  checkResult('o');

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
  if (field3.classList.contains(player) && field4.classList.contains(player) && field5.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
  if (field6.classList.contains(player) && field7.classList.contains(player) && field8.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
  if (field0.classList.contains(player) && field3.classList.contains(player) && field6.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
  if (field1.classList.contains(player) && field4.classList.contains(player) && field7.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
  if (field2.classList.contains(player) && field5.classList.contains(player) && field8.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
  if (field0.classList.contains(player) && field4.classList.contains(player) && field8.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
  if (field2.classList.contains(player) && field4.classList.contains(player) && field6.classList.contains(player)) {
    console.log('player ' + player + ' wins!')
    return true;
  }
}
