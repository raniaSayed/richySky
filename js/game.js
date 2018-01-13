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

  stopStairs(){
      this.gameBoardObj.stopStairsInterval();
  }

  moveStairs(){
      this.gameBoardObj.stairsMove();
  }

  increaseY(){
      this.charPlayer.location.yPosition -= 9;
  }
}
