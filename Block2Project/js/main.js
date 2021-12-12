import Game from "./gamePlay.js";
import { draw, discardCard, giveFromHand, renderCard } from "./helpers.js";

let game = new Game();
game.dealCards();
window.addEventListener("load", setUpGame); 
// document.getElementById("player2").addEventListener("click", setPlayer(1));
//document.getElementById("playerArea").addEventListener(onchange, function() {setUpButtons});

function setPlayer(player) {
  let display = document.getElementById("playerArea");
  let currentPlayer = game.players[player];
  renderHand(display, currentPlayer.hand);
  console.log(game.players[player].color);
  display.style.backgroundColor = game.players[player].color;
}

function setUpGame() {
  setPlayer(0);
  setUpButtons(); 
}

function setUpButtons() {
  document.getElementById("player1").onclick = function () {
    setPlayer(0);
  };
  document.getElementById("player2").onclick = function () {
    setPlayer(1);
  };
  
  let discardButtons= document.querySelectorAll(".discard");
 
  console.log(discardButtons);
  for(let i= 0; i < discardButtons.length; i++){
    discardButtons[i].addEventListener('click', () => {
        console.log("click worked.");
        discardCard(game.getCurrentPlayer().hand[i], game.getCurrentPlayer().hand);
        renderHand(document.getElementById("playerArea"), game.getCurrentPlayer().hand);
       
      });
  }
  document.getElementById("card").onclick= function() {
    let deck= game.pieces.deck; 
      console.log("drew 1");
      console.log( "current player is " + game.getCurrentPlayer().hand)
      let newCard= draw(deck);
      let hand= game.getCurrentPlayer().hand;
      console.log("new Card is " +newCard.value +newCard.suit);
      hand.push(newCard);
      renderHand(document.getElementById("playerArea"),hand );
    //   checkButtons(); 
  };
}

// function checkButtons(){
// if (document.querySelector(".discard").hasAttribute(onclick)) {
//     return;
//   } else {
//     setUpButtons();
//   }
// };
function renderHand(parent, hand) {
    parent.innerHTML = "My Hand";
    hand.forEach((card) => {
      parent.appendChild(renderCard(card));
    });
  setUpButtons();
  }

  // document.getElementById("token").onclick=

