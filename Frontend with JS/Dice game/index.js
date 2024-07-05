function rollDice() {
  //For the random dice 1.
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //dice1.png - dice6.png
  randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

  //for the random dice2.
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
}

document.getElementById("roll").addEventListener("click", rollDice);
