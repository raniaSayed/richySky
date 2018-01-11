class Pos{
 constructor(){
  this.width=null;
  this.height=null;
  this.startx=null;
  }
}

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
    let stairsHeight=[30,30,25,20,15,15,10,10,5,5];
    let stairHeight=0;
    let stairNum=stairsFactory.stairNum;
    stairHeight=stairsHeight[Math.floor(stairsFactory.stairNum/100)];
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
   this.stairsAtrr={};
   this.stairs = document.getElementsByClassName("stairsParent");

   //this.stairsPosition= getStairsPosition(stairs);
    this.stairsInterval=[];

 }
  buildStair(){
      let stair=new stairsFactory();
       stair.stairAtrribute();
     return stair;
    }

  createHtmlStairs(){
        let stair=this.buildStair();
        //create parent div

        let stairParentHtml = document.createElement('div');
        stairParentHtml.setAttribute('class','stairsParent');
        stairParentHtml.setAttribute('number',stair.stairNum);

        let stairHtml = document.createElement('div');
        let coinHtml = document.createElement('img');
        coinHtml.setAttribute('id',stair.stairNum);

        coinHtml.setAttribute('class','coins');
        
        stairHtml.setAttribute('class','stairs');
        stairHtml.setAttribute('number',stair.stairNum);
        stairHtml.style.width=stair.stairWidth+'px';
        stairHtml.style.height=stair.stairHeight+'px';
       // stairHtml.style.marginLeft=stair.rowPos+'px';
        stairHtml.style.marginLeft=stair.marginLeft+'px';


        coinHtml.style.marginLeft=(stair.rowPos)+'px';
        coinHtml.style.marginTop=(stair.rowPos+10)+'px';
        coinHtml.style.width = "30px";
        coinHtml.style.height = "30px";
        coinHtml.src ="img/coin2.png";

        stairParentHtml.appendChild(stairHtml);
        stairParentHtml.appendChild(coinHtml);


        return stairParentHtml;

    }

   createHtmlSpace(){

        let space= document.createElement('div');
        space.setAttribute('class','space');
        return space;
    }

 generateBoardStairs(num){

      let stair=0;
      let space=0;
      let lastStair=0;

      for(let i=0;i<num;i++)
      {
        stair=this.createHtmlStairs();
        space=this.createHtmlSpace();
        lastStair=document.getElementsByClassName('stairsParent')[0];
        if(lastStair==undefined){
          this.board.appendChild(stair);
          console.log(stair.getAttribute('number'));
          this.generateCoinObj(stair.getAttribute('number'));

        }
        else {
          this.board.insertBefore(space, lastStair)
          this.board.insertBefore(stair, space)
          console.log(stair.getAttribute('number'));
          this.generateCoinObj(stair.getAttribute('number'));
        }
      }
    }

   generateOneStair(){
      this.generateBoardStairs(1)
    }

   generateCoinObj(currStairNum){
      //create coin object
        let coinObj = new Coin(null, currStairNum , new Size(20,20) , "regular" ,10);
        coinObj.move();
    }

   getStairsPosition(stairs){

      for (var i=0 ;i<stairs.length;i++){
        this.stairsPosition[i]=stairs[i].getBoundingClientRect().top;
      }
    }

   getStairsPosition2(stairs){
      let stairsPos=[];
      let startPos=new Position();
      let endPos=new Position();
      let ypos=0
       //stairsAtrr
      console.log(stairs.length)
      for (var i=stairs.length-1 ;i>=0;i--){
         startPos.xPosition= stairs[i].style.marginLeft;
         startPos.yPosition= ypos+80+30;
         endPos.xPosition= parseInt(stairs[i].style.marginLeft)+parseInt(stairs[i].style.width);
         endPos.yPosition=ypos+80+30;
         ypos+=110;
         console.log("hereee  "+stairs[i].getBoundingClientRect().left,""+stairs[i].getBoundingClientRect().right)
        //startPos.xPosition=stairs[i].getBoundingClientRect().left;
        //startPos.yPosition=stairs[i].getBoundingClientRect().bottom;
        //endPos.xPosition=stairs[i].getBoundingClientRect().right;
        //endPos.yPosition=stairs[i].getBoundingClientRect().bottom;
    //    console.log("here"+stairs[i].style.marginLeft);
        console.log(stairs[i]);
        console.log(startPos.xPosition,"  ",startPos.yPosition," ,,",endPos.xPosition,"  ",endPos.yPosition,"")
        //  console.log( startPos.xPosition)
      //  console.log(stairs[i]," ",  stairsPos[i].startx,"  ",stairs[i].style.width+"  "+  stairsPos[i].top);
      }
   }
   deleteStair(index){
      let stair = document.getElementsByClassName('stairsParent')[index];
      let space = document.getElementsByClassName('space')[0];

      this.board.removeChild(stair);
      this.board.removeChild(space);

    }

   updateBoardStairs(){
        //clear all stairs intervals
        for(let i=0;i<this.stairsInterval.length;i++){
            clearInterval(this.stairsInterval[i]);
        }
        this.generateOneStair();
        this.getStairsPosition(this.stairs);///get new stairs Position.
        this.stairsMove();

    }

  move(stair,index) {
        // this.getStairsPosition2(this.stairs)
        if (this.stairsPosition[index]==550) {
          this.deleteStair(index);
          this.updateBoardStairs();
        }
        else {
          this.stairsPosition[index]+=1;
          stair.style.top = this.stairsPosition[index] + 'px';
        }
      }

  stairsMove(){

      for(let i=0;i<this.stairs.length;i++)
      {
        this.stairsInterval[i] = setInterval(this.move.bind(this), 20, this.stairs[i],i);
      }
    }

  startGame(){
      this.generateBoardStairs(7);
       this.stairs = document.getElementsByClassName("stairsParent");
    //   this.getstairsPosition(this.stairs);
       this.getStairsPosition(this.stairs);
       this.getStairsPosition2(this.stairs);
  //     this.getStairsPosition2(this.stairs)
       this.stairsMove();
    }

}
