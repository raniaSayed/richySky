class game
{
  constructor()
  {
     this.gameBoardObj=new gameBoard();
     this.gameBoardObj.startGame();
     this.charPlayer=new character("ttttt");
     this.player = new Player(getPlayerName());

     this.charOnStair = false;
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
  get Player(){
    return this.player;
  }
}
