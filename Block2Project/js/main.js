import Game from "./gamePlay.js";
import {
  draw,
  discardCard,
  renderCard,
  renderPlayedCard,
  discardToken,
  renderToken
} from "./helpers.js";

let game = new Game();
game.dealCards();
window.addEventListener("load", setUpGame);
// document.getElementById("player2").addEventListener("click", setPlayer(1));
//document.getElementById("playerArea").addEventListener(onchange, function() {setUpButtons});

function setPlayer(player) {
  let playerArea = document.getElementById("playerArea");
  let playedArea = document.getElementById("playedCards");
  let tokens= document.getElementById("myTokens");
  let level= document.getElementById("myLevel");
  let currentPlayer = game.players[player];
  renderHand(playerArea, currentPlayer.hand);
  renderPlayedHand(playedArea, currentPlayer.playedHand);
  renderTokens;
  renderLevel();
  console.log(game.players[player].color);
  playerArea.style.backgroundColor = game.players[player].color;
  playedArea.style.backgroundColor = game.players[player].color;
  tokens.style.backgroundColor = game.players[player].color;
  level.style.backgroundColor = game.players[player].color;
}

function setUpGame() {
  setPlayer(0);
  setUpButtons();
}

function setUpButtons() {
  let currentPlayer = game.getCurrentPlayer();
  let hand = currentPlayer.hand;
  let tokenHand= currentPlayer.getTokenHand(); 
//switch players
  document.getElementById("player1").onclick = function () {
    setPlayer(0);
  };
  document.getElementById("player2").onclick = function () {
    setPlayer(1);
  };

 //play button
  let playButtons = document.querySelectorAll(".played");
  let playedHand = currentPlayer.getPlayedHand();
  console.log("play button length " + playButtons.length);
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].onclick = function () {
     let tempCard= hand[i];
      console.log("click worked.");
      playedHand.push(tempCard);
      discardCard(hand[i], hand);
      renderHand(document.getElementById("playerArea"), hand);
      renderPlayedHand(document.getElementById("playedCards"), playedHand);
    
    };
  }
  
//draw card
  document.getElementById("card").onclick = function () {
    let deck = game.pieces.deck;
    console.log("drew 1");
    console.log("current player is " + hand);
    let newCard = draw(deck);
    console.log("new Card is " + newCard.value + newCard.suit);
    hand.push(newCard);
    renderHand(document.getElementById("playerArea"), hand);
    renderPlayedHand(document.getElementById("playedCards"), playedHand);
     checkButtons();
  };
//discard button
  let discardButtons = document.querySelectorAll(".discard");

  console.log(discardButtons);
  for (let i = 0; i < discardButtons.length; i++) {
    discardButtons[i].onclick= function () {
      console.log("click worked.");
      console.log(hand[i]);
      hand= discardCard(hand[i], hand);
      renderHand(document.getElementById("playerArea"), hand);
      renderPlayedHand(document.getElementById("playedCards"), playedHand);
    };
  }
  // discard from played
  let discardPlayButtons = document.querySelectorAll(".playDiscard");
  for (let i = 0; i < discardPlayButtons.length; i++) {
    discardPlayButtons[i].onclick= function () {
      console.log("click worked.");
      console.log(hand[i]);
      playedHand= discardCard(playedHand[i], playedHand);
      renderHand(document.getElementById("playerArea"), hand);
      renderPlayedHand(document.getElementById("playedCards"), playedHand);
    };

  }
  //discard from Tokens
  let discardTokens = document.querySelectorAll(".tokenDiscard");

  console.log(discardTokens);
  for (let i = 0; i < discardTokens.length; i++) {
    discardTokens[i].onclick= function () {
      console.log("token to discard " + tokenHand[i].name);
      tokenHand=discardToken(tokenHand[i], tokenHand);
      renderTokens(document.getElementById("myTokens"), tokenHand);
      
    };
  }
//level up
  let button= document.getElementById("levelUp");
  button.onclick= function() {
   renderLevel(); 
  }
//draw a token
  document.getElementById("token").onclick = function () {
    let tokens = game.pieces.drawBag;
    let newToken = draw(tokens);

    tokenHand.push(newToken);
    renderTokens(document.getElementById("myTokens"),tokenHand);
    
  };
}
function renderLevel(){
    let button= document.getElementById("levelUp");
    let currentPlayer = game.getCurrentPlayer();
    let addLevel= document.getElementById("myLevel");
    let newLevel= currentPlayer.levelUp(); 
    addLevel.innerHTML= "My Level: "+ newLevel;
    addLevel.appendChild(button); 
}
function renderTokens(parent,tokens) {
    parent.innerHTML= "My Tokens"
    tokens.forEach((token) => {
        parent.appendChild(renderToken(token));
      });
      
      checkButtons();
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
  hand.forEach((card) => {
    parent.appendChild(renderPlayedCard(card));
  });
  checkButtons();
}

function checkButtons(){
if (document.querySelector(".discard")!= null && document.querySelector(".discard").hasAttribute(onclick) ||
document.querySelector(".playDiscard")!= null && document.querySelector(".playDiscard").hasAttribute(onclick) ||
document.querySelector(".tokenDiscard")!= null && document.querySelector(".tokenDiscard").hasAttribute(onclick)
 ) {
    return;
  } else if(document.querySelector(".discard")== null && document.querySelector(".playDiscard")== null && document.querySelector(".tokenDiscard")== null  ) {
  return; }
  else {
    setUpButtons();
  }
};

const marker1= document.getElementById("player1Marker");
const marker2= document.getElementById("player2Marker");

marker1.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", marker1.id)
});
marker2.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", marker2.id)
});

for (const dropZone of document.querySelectorAll (".spot")){
    dropZone.addEventListener("dragover", e => {
        e.preventDefault(); 
    });
    dropZone.addEventListener("drop", e => {
        e.preventDefault(); 
        let droppedElementId= e.dataTransfer.getData("text/plain");
        let element= document.getElementById(droppedElementId);
        dropZone.appendChild(element);
        
    });
}
