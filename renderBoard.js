var game = document.querySelector('#game');

game.appendChild(renderBoard(3, 3));

function renderBoard(width, height) {
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  var tr, td, i, j;
  var index = 0

  for (i = 0; i < height; i += 1) {
    tr = document.createElement('tr');

    for (j = 0; j < width; j += 1) {
      td = document.createElement('td');
      td.classList.add('field' + index)
      tr.appendChild(td);
      index++;
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}