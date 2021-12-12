import Game from "./gamePlay.js";
import {
  draw,
  discardCard,
  giveFromHand,
  renderCard,
  renderPlayedCard,
} from "./helpers.js";

let game = new Game();
game.dealCards();
window.addEventListener("load", setUpGame);
// document.getElementById("player2").addEventListener("click", setPlayer(1));
//document.getElementById("playerArea").addEventListener(onchange, function() {setUpButtons});

function setPlayer(player) {
  let playerArea = document.getElementById("playerArea");
  let playedArea = document.getElementById("playedCards");
  let currentPlayer = game.players[player];
  renderHand(playerArea, currentPlayer.hand);
  renderPlayedHand(playedArea, currentPlayer.playedHand);
  console.log(game.players[player].color);
  playerArea.style.backgroundColor = game.players[player].color;
  playedArea.style.backgroundColor = game.players[player].color;
}

function setUpGame() {
  setPlayer(0);
  setUpButtons();
}

function setUpButtons() {
  let currentPlayer = game.getCurrentPlayer();
  let hand = currentPlayer.hand;

  document.getElementById("player1").onclick = function () {
    setPlayer(0);
  };
  document.getElementById("player2").onclick = function () {
    setPlayer(1);
  };

 
  let playButtons = document.querySelectorAll(".played");
  let playedHand = currentPlayer.getPlayedHand();
  console.log("play button length " + playButtons.length);
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].onclick = function () {
     let tempCard= hand[i];
      console.log("click worked.");
      currentPlayer.getPlayedHand().push(tempCard);
      discardCard(hand[i], hand);
      renderHand(document.getElementById("playerArea"), hand);
  renderPlayedHand(document.getElementById("playedCards"), currentPlayer.getPlayedHand());
    
    };
  }
  

  document.getElementById("card").onclick = function () {
    let deck = game.pieces.deck;
    console.log("drew 1");
    console.log("current player is " + hand);
    let newCard = draw(deck);
    console.log("new Card is " + newCard.value + newCard.suit);
    hand.push(newCard);
    renderHand(document.getElementById("playerArea"), hand);
    renderPlayedHand(document.getElementById("playedCards"), currentPlayer.getPlayedHand());
    //   checkButtons();
  };

  let discardButtons = document.querySelectorAll(".discard");

  console.log(discardButtons);
  for (let i = 0; i < discardButtons.length; i++) {
    discardButtons[i].onclick= function () {
      console.log("click worked.");
      console.log(hand[i]);
      discardCard(hand[i], hand);
      renderHand(document.getElementById("playerArea"), hand);
      renderPlayedHand(document.getElementById("playedCards"), currentPlayer.getPlayedHand());
    };
  }
}


function renderHand(parent, hand) {
  parent.innerHTML = "My Hand";
  hand.forEach((card) => {
    parent.appendChild(renderCard(card));
  });
  checkButtons();
}

function renderPlayedHand(parent, hand) {
  parent.innerHTML = "My Played Cards";
  console.log("played hand length " + hand.length);
  hand.forEach((card) => {
    parent.appendChild(renderPlayedCard(card));
  });
  checkButtons();
}
// document.getElementById("token").onclick=

function checkButtons(){
if (document.querySelector(".discard").hasAttribute(onclick)) {
    return;
  } else {
    setUpButtons();
  }
};