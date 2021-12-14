import Card from "./card.js";

export default class Pieces {
  constructor() {
    this.deck = this.createDeck();
    this.drawBag = this.createDrawBag();
    this.redGems= this.createGems("red");
    this.greenGems=this.createGems("green")
  }

  
 
  getDeck(){
    return this.deck; 
  }

  getDrawBag(){
    return this.drawBag; 
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

createGems(color){
  let gems =[];
  for (let i=0; i<8; i++)
  {
    gems.push(new Card(1, color));
  }
  return gems; 
}
getGems(color){
  if(color=="red")
  return this.redGems;
  else
  return this.greenGems; 
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
  console.log ("Cards in Deck " +deck.length); 
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
      "Add A Gem",
      "Level Up",
    ];
    for( let i= 0; i<5; i++){
      for(let x=0; x<5; x++){
      drawBag.push(new Card(1,suit[i]))
      }
    }
    for(let i=5; i<suit.length; i++){
      for(let x=0; x<3; x++){
        drawBag.push(new Card(1, suit[i]));
      }
    }
    // for (let i = 0; i < 8; i++) {
    //   for (let x = 0; x < 5; x++) {
    //     drawBag.push(new Card(1, suit[x]));
    //   }
    // }
    // for (let i = 6; i < suit.length; i++) {
    //   for (let x = 0; x < 3; x++) {
    //     drawBag.push(new Card(1, suit[i]));
    //   }
    // }
    drawBag = this.shuffle(drawBag);
    console.log(drawBag);
    console.log ("Gems in Bag " +drawBag.length); 
    return drawBag; 
  }

 
}

