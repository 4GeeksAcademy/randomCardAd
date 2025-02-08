import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard() {
  //write your code here
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cardSuit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomCardSuit = Math.floor(Math.random() * cardSuit.length);

  let suitName = cardSuit[randomCardSuit];
  let finalSuit = "";

  if (suitName === "Diamonds") {
    finalSuit = "♦";
  } else if (suitName === "Spades") {
    finalSuit = "♠";
  } else if (suitName === "Hearts") {
    finalSuit = "♥";
  } else {
    finalSuit = "♣";
  };

  document.getElementById('infoCardNumber').innerHTML = cardNumber[randomCardNumber];
  document.getElementById('infoCardSuit').innerHTML = finalSuit;
  document.getElementById('infoCardSuitBottom').innerHTML = finalSuit; 
    
};

window.onload = randomCard;