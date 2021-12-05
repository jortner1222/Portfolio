import Pieces from "./Pieces.js";
import Player from "./player.js";

export default class Game{
    constructor(){
        this.players = this.getPlayers();
        this.pieces = new Pieces(); 
        console.log(this.players);
    }
dealCards(){
    this.players.forEach(player => {
    player.hand = this.pieces.draw(this.pieces.deck,3); 
    console.log(player.hand);
    });
    
}
 getPlayers(){
    
    let players= []; 

    let player1 = new Player("red");
    let player2 = new Player("green");
  

    players.push(player1,player2);
    return players;
}

 renderHand(parent, hand) {
     parent.innerHTML= " ";
    hand.forEach(card => {
      parent.appendChild(this.renderCard(card));
    });
  
  }

renderCard(card){
  const item= document.createElement("div");
  item.id= card.name;
//   item.setAttribute('draggable', true); 
  item.innerHTML= card.value+" "+ card.suit; 

  let discardButton= document.createElement('button');
    discardButton.innerHTML= "discard";
   // discardButton.addEventListener('click', card.discardCard(card)); 
    item.appendChild(discardButton); 
  return item; 
  }

};