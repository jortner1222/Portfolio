import Card from "./card.js";

export default class Pieces {
  constructor() {
    this.deck = this.createDeck();
    this.drawBag = this.createDrawBag();
  }

  draw(deck, number) {
    let cards = [];
    for (let i = 0; i <= number; i++) {
      cards.push(deck.shift());
    }
    return cards;
  }

  shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      let newIndex = Math.floor(Math.random() * array.length);
      let tempCard = array[i];
      array[i] = array[newIndex];
      array[newIndex] = tempCard;
    }
    return array;
  }
  addToHand(card){
    hand.push(card); 
}

discardCard(card){
    let index= hand.indexOf(card.name);
    hand.splice(index,1); 
}

giveFromHand(card){
    let copy= card; 
    let index= hand.indexOf(card.name);
    hand.splice(index,1);
    return copy; 

}

  createDeck() {
    var deck = [];
    let suit = [" plants", " snails", " potions", " bones", " mushrooms"];
    let value = ["2", "3"];
    for (let i = 0; i < 9; i++) {
      suit.forEach((item) => {
        deck.push(new Card(value[0], item));
      });
    }
    for (let i = 0; i < 3; i++) {
      suit.forEach((item) => {
        deck.push(new Card(value[1], item));
      });
    }
    deck = this.shuffle(deck);
    console.log(deck);
    return deck;
  }

  createDrawBag() {
    var drawBag = [];
    let suit = [
      " plants",
      " snails",
      " potions",
      " bones",
      " mushrooms",
      "addGem",
      "LevelUp",
    ];
    for (let i = 0; i < 8; i++) {
      for (let x = 0; x < 5; x++) {
        drawBag.push(new Card(1, suit[x]));
      }
    }
    for (let i = 5; i < suit.length; i++) {
      for (let x = 0; x < 3; x++) {
        drawBag.push(new Card(1, suit[i]));
      }
    }
    drawBag = this.shuffle(drawBag);
    console.log(drawBag);
  }
 
}
