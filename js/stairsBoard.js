class stairsFactory{

  get stairNumber(){
      if ( typeof stairsFactory.stairNum == 'undefined' ) {
        stairsFactory.stairNum =1;
      }
      else{
        stairsFactory.stairNum++;
      }
    return stairsFactory.stairNum ;
  }

  get width(){

    let stairNum=stairsFactory.stairNum;
    let stairWidth=0;
    if(stairNum%50==0)
      {
        stairWidth=495;
      }
      else{
        let max=300;
        let min=120;
        stairWidth= Math.floor(Math.random() * (max - min + 1) ) + min;
      }
     return stairWidth;
  }

  get height(){
    let stairsHeight=[5,5,5,5,5,5,5];
    let stairHeight=0;
    let stairNum=stairsFactory.stairNum;
    stairHeight=stairsHeight[1/*Math.floor(stairsFactory.stairNum/100)*/];
    return stairHeight;
  }

  get rowPos(){//margin-left
    let stairNum=stairsFactory.stairNum;
    let stairPos=0;
    if(stairNum%50==0)
      {
        stairPos=0;
      }
      else{
        let max=195;
        let min=0;
        stairPos= Math.floor(Math.random() * (max - min + 1) ) + min;
      }
     return stairPos;
  }
/*  set stairShape(){//pic

}*/
  stairAtrribute(){
    this.stairNum=this.stairNumber;
    this.stairWidth=this.width;
    this.stairHeight=this.height;
    this.marginLeft=this.rowPos;
  }
}//end stairsFactory class
//////////////////////////////////////////////////////////////////////////////////
class gameBoard {

 constructor(){
   this.board = document.getElementById('boardStairs');
   this.stairsPosition =[];
   this.coinsPosition =[];
   this.stairsAtrr={};
   this.stairs = document.getElementsByClassName("stairs");
   this.coins = document.getElementsByClassName("coins");
   //this.stairsPosition= getStairsPosition(stairs);
   //this.charPlayer=new character("ttttt")

  // console.log("charPlayer")
   this.stairsInterval=[];
   this.coinsInterval=[];

 }
  buildStair(){
      let stair=new stairsFactory();
       stair.stairAtrribute();
     return stair;
    }

  createHtmlStairs(){
        let stair=this.buildStair();
        let stairHtml = document.createElement('div');
        stairHtml.setAttribute('class','stairs');
        stairHtml.setAttribute('number',stair.stairNum);
        stairHtml.style.width=stair.stairWidth+'px';
        stairHtml.style.height=stair.stairHeight+'px';
        stairHtml.style.marginLeft=stair.marginLeft+'px';
        
        let coinHtmlDiv = document.createElement('div');
        let coinHtml = document.createElement('img');

        coinHtmlDiv.setAttribute('id',stair.stairNum+"coin");

        coinHtmlDiv.setAttribute('class','coins');

        coinHtmlDiv.style.marginLeft=(stair.rowPos)+'px';
        coinHtmlDiv.style.marginTop=(stair.rowPos+10)+'px';
        coinHtml.style.width = "30px";
        coinHtml.style.height = "30px";
        coinHtml.style.bottom = "10px";
        coinHtml.src ="img/coin2.png";

        coinHtmlDiv.appendChild(coinHtml);


        return [stairHtml,
                coinHtmlDiv];
    }

   createHtmlSpace(){

        let space= document.createElement('div');
        space.setAttribute('class','space');
        return space;
    }

 generateBoardStairs(num){

      let stair=0;
      let coin = 0;
      let space=0;
      let lastStair=0;
      let stairObj =0;

      for(let i=0;i<num;i++)
      {
        stairObj = this.createHtmlStairs();
        stair=stairObj[0];
        coin=stairObj[1];

        space=this.createHtmlSpace();
        lastStair=document.getElementsByClassName('stairs')[0];
        if(lastStair==undefined){
          this.board.appendChild(stair);
          this.board.appendChild(coin);
          this.generateCoinObj(stair.getAttribute('number'));

        //  console.log()
        }
        else {

          this.board.insertBefore(space, lastStair);
          //this.board.insertBefore(coin,space);
          this.board.insertBefore(stair, space);
          this.board.insertBefore(coin, lastStair);
          this.generateCoinObj(stair.getAttribute('number'));

        }
      }
    }

   generateOneStair(){
      this.generateBoardStairs(1)
    }

   getStairsPosition(){
       let stairs=this.stairs;
      for (var i=0 ;i<stairs.length;i++){
        this.stairsPosition[i]=stairs[i].getBoundingClientRect().top;
      }
    }
     getCoinsPosition(){
       let coins=this.coins;
      for (var i=0 ;i<coins.length;i++){
        this.coinsPosition[i]=coins[i].getBoundingClientRect().top;
      }
    }

   getStairsPosition2(){

     let stairs=this.stairs;
     let boardHeight=580;
      let stairsPos=[];
      let sNum=0;
      let xyPos=new Position();
      let width=null;
      let height=null;

    //  console.log(stairs.length)
      for (var i=stairs.length-1 ;i>=0;i--){
         xyPos.xPosition= parseInt(stairs[i].style.marginLeft);
         xyPos.yPosition= boardHeight-parseInt(getComputedStyle(stairs[i]).top);         
         width= parseInt(stairs[i].style.marginLeft)+parseInt(stairs[i].style.width);
         height= parseInt(stairs[i].style.height);
         stairsPos[sNum++]={xObstacle:xyPos.xPosition ,yObstacle:xyPos.yPosition,width:width,height:height};
      //  console.log(stairs[i]);
        //console.log(stairsPos[sNum-1]);
      //  console.log(startPos.xPosition,"  ",startPos.yPosition," ,,",endPos.xPosition,"  ",endPos.yPosition,"")

    }
    return stairsPos;
   }
   deleteStair(index){
      let stair = document.getElementsByClassName('stairs')[index];
      let coin = document.getElementsByClassName('coins')[index];
      let space = document.getElementsByClassName('space')[0];

      this.board.removeChild(stair);
      this.board.removeChild(coin);
      this.board.removeChild(space);

    }

    stopStairsInterval(){
        for(let i=0;i<this.stairsInterval.length;i++){
            clearInterval(this.stairsInterval[i]);
         //   clearInterval(this.coinsInterval[i]);
        }
    }

   updateBoardStairs(){
        //clear all stairs intervals
        this.stopStairsInterval();
        this.generateOneStair();
        this.getStairsPosition();///get new stairs Position.
        this.getCoinsPosition();///get new stairs Position.
        this.getStairsPosition2();
        this.stairsMove();
        gameObj.increaseY();



    }

  move(stair,coin, index) {
        // this.getStairsPosition2(this.stairs)
        if (this.stairsPosition[index]==550) {
          this.deleteStair(index);
          this.updateBoardStairs();
        }
        else {
          this.stairsPosition[index]+=1;
          stair.style.top = this.stairsPosition[index] + 'px'; 
       //   this.coinsPosition[index]+=1;
        //  coin.style.top = this.coinsPosition[index] + 'px';
        }
      }

  stairsMove(){

      for(let i=0;i<this.stairs.length;i++)
      {
        this.stairsInterval[i] = setInterval(this.move.bind(this), 10, this.stairs[i],this.coins[i],i);
      //  this.coinsInterval[i] = setInterval(this.move.bind(this), 10, this.coins[i],i);
      }
    }

  startGame(){
      this.generateBoardStairs(7);
       this.stairs = document.getElementsByClassName("stairs");
       this.coins = document.getElementsByClassName("coins");
       this.getStairsPosition();
       this.getCoinsPosition();

       document.getElementById("player").textContent = getPlayerName();

      // this.getStairsPosition2();
     //  this.stairsMove();//osition(stairs);
       //this.charPlayer = new character();
    }
     generateCoinObj(currStairNum){
      //create coin object

        let coinObj = new Coin(null, currStairNum+"coin" , new Size(30,30) , "regular" ,10);
        coinObj.move();
     //   coinObj.DetectTouchIntervel();
    }

}
