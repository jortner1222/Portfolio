
export default class Player{

constructor(color){
    this.level= 0; 
    this.color= color;
    this.hand= [];
    this.tokenHand= []; 
    this.playedHand= [];  
  
}
 getHand(){
    return this.hand; 
}
getPlayedHand(){
    return this.playedHand;
    
}
getTokenHand(){
    return this.tokenHand;
}
getLevel(){
    return this.level;
}

addToHand(card){
this.hand= hand.push(card); 
}

levelUp(){
   this.level+=1; 
   return this.level;
}
}