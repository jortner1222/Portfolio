import Pieces from "./Pieces.js";
import Player from "./player.js";
import { draw, drawMany, discardCard, giveFromHand } from "./helpers.js";

export default class Game{
    constructor(){
        this.players = this.getPlayers();
        this.pieces = new Pieces(); 
        
    }
dealCards(){
    this.players.forEach(player => {
    player.hand = drawMany(this.pieces.deck,3); 
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
getCurrentPlayer()
     {  
         var player;
         if(document.getElementById("player1").checked)
         {player= this.players[0];
        
      }
         else {
             player=this.players[1];
             
         }
          
         return player;
     }






};

