import Game from "./gamePlay.js";
import Pieces from "./Pieces.js";

let game= new Game(); 
game.dealCards();

document.getElementById("player1").addEventListener("click", setPlayer(0));
document.getElementById("player2").addEventListener("click", setPlayer(1));
function setPlayer(player){
    let display= document.getElementById("playerArea");
    let currentPlayer= game.players[player];  
    console.log(game.players[player]);
    game.renderHand(display, currentPlayer.hand);
}


 