class game
{
  constructor()
  {
     this.gameBoardObj=new gameBoard();
     this.gameBoardObj.startGame();
     this.charPlayer=new character("ttttt");
  }
  getPos(){
    return this.gameBoardObj.getStairsPosition2();
  }
}
