
export default class Player{

constructor(color){
    this.level= 0; 
    this.color= color;
    this.hand= [];
    this.playedHand= [];  
  
}
 getHand(){
    return this.hand; 
}
getPlayedHand(){
    return this.playedHand;
    
}

addToHand(card){
this.hand= hand.push(card); 
}

levelUp(){
   this.level+=1; 
}
}