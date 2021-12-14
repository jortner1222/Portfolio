// import Game from "./gamePlay";
// import Pieces from "./Pieces";
// import Player from "./player";
//import { setUpDiscardButtons } from "./main";

export function discardCard(card, hand) {
  
  let index = hand.indexOf(card);
  hand.splice(index, 1);
  return hand;
}
export function discardToken(token, hand) {
  
    let index = hand.indexOf(token);
    console.log ("discardToken found" +hand[index].name);
    hand.splice(index, 1);
   
    return hand; 
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

export function drawToken(bagId){

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
    item.innerHTML = card.value + " " + card.suit;
    let discardButton = document.createElement("button");
    discardButton.className = "playDiscard";
    discardButton.innerHTML = "discard";
    item.appendChild(discardButton);
    return item;  
 }

 export function renderToken(token){
    const item = document.createElement("div");
    item.id = token.name;
    //   item.setAttribute('draggable', true);
    item.innerHTML = token.value + " " + token.suit;
  
    let discardButton = document.createElement("button");
    discardButton.className="tokenDiscard";
    discardButton.innerHTML = "discard";
    item.appendChild(discardButton);
    
    return item;
 }
