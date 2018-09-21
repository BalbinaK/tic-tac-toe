function win(who) {
  var endGameAlert = document.createElement('div');
  game.appendChild(endGameAlert);
  endGameAlert.classList.add('alert')
endGameAlert.innerHTML = 'Player ' + who +  ' wins!';
}
