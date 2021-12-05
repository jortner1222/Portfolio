import Pieces from "./Pieces.js";
import Player from "./player.js";

export default class Game{
    constructor(){
        this.players = getPlayers();
        this.pieces = new Pieces(); 
        console.log(this.players);
    }
dealCards(){
    this.players.forEach(player => {
    player.hand = this.pieces.draw(this.pieces.deck,3); 
    console.log(player.hand);
    });
    
}
};
function getPlayers(){
    let players= []; 

    let player1 = new Player("red");
    let player2 = new Player("green");
  

    players.push(player1,player2);
    return players;
}