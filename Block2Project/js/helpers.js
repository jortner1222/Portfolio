// import Game from "./gamePlay";
// import Pieces from "./Pieces";
// import Player from "./player";
//import { setUpDiscardButtons } from "./main";

export function discardCard(card, hand) {
  console.log(card.name + "discarded");
  let index = hand.indexOf(card);
  hand.splice(index, 1);
}

export function giveFromHand(card) {
  let copy = card;
  let index = hand.indexOf(card.name);
  hand.splice(index, 1);
  return copy;
}

export function draw(deck) {
  let card = deck.shift();
  return card;
}

export function drawMany(deck, number) {
  let cards = [];
  for (let i = 0; i <= number; i++) {
    cards.push(deck.shift());
  }
  return cards;
}


export function renderCard(card) {
  const item = document.createElement("div");
  item.id = card.name;
  //   item.setAttribute('draggable', true);
  item.innerHTML = card.value + " " + card.suit;

  let discardButton = document.createElement("button");
  discardButton.className = "discard";
  discardButton.innerHTML = "discard";
  item.appendChild(discardButton);
  let playButton= document.createElement("button");
  playButton.className="played";
  playButton.innerHTML= "play";
  item.appendChild(playButton);
  return item;
}
 export function renderPlayedCard(card){
    const item = document.createElement("div");
    item.id = card.name;
    console.log ("render card name is "+ card.name);
    //   item.setAttribute('draggable', true);
    item.innerHTML = card.value + " " + card.suit;
  
    let discardButton = document.createElement("button");
    discardButton.className = "playDiscard";
    discardButton.innerHTML = "discard";
    item.appendChild(discardButton);
    return item;  
 }
