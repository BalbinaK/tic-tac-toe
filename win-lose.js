function win() {
  var endGameAlert = document.createElement('div');
  game.appendChild(endGameAlert);
  endGameAlert.classList.add('alert')

  if (checkResult(x)) {
    return endGameAlert.innerHTML(x + " won")
  }
  if (checkResult(o)) {
    return endGameAlert.innerHTML(o + " won")
  } else {
    return endGameAlert.innerHTML("no one wins")
  }
}
