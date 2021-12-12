
export default class Player{

constructor(color){
    this.level= 0; 
    this.color= color;
    this.hand= [];  
  
}
 getHand(){
    return hand; 
}

addToHand(card){
this.hand= hand.push(card); 
}

levelUp(){
   this.level+=1; 
}
}