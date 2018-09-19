var game = document.querySelector('#game');

game.appendChild(renderBoard(3, 3));

function renderBoard(width, height) {
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  var tr, td, i, j;

  for (i = 0; i < height; i += 1) {
    tr = document.createElement('tr');

    for (j = 0; j < width; j += 1) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}


