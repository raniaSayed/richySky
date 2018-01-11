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
     if(stairNum>=1 && stairNum<=100)
        stairHeight=stairsHeight[0];
        else if(stairNum>=101 && stairNum<=200)
           stairHeight=stairsHeight[1];
           else if(stairNum>=201 && stairNum<=300)
              stairHeight=stairsHeight[2];
              else if(stairNum>=301 && stairNum<=400)
                 stairHeight=stairsHeight[3];
                 else if(stairNum>=401 && stairNum<=500)
                    stairHeight=stairsHeight[4];
                    else if(stairNum>=501 && stairNum<=600)
                       stairHeight=stairsHeight[5];
                       else if(stairNum>=601 && stairNum<=700)
                          stairHeight=stairsHeight[6];
                          else if(stairNum>=701 && stairNum<=800)
                             stairHeight=stairsHeight[7];
                             else if(stairNum>=801 && stairNum<=900)
                                stairHeight=stairsHeight[8];
                                else
                                   stairHeight=stairsHeight[9];
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

        coinHtml.setAttribute('class','coins');
        
        stairHtml.setAttribute('class','stairs');
        stairHtml.setAttribute('number',stair.stairNum);
        stairHtml.style.width=stair.stairWidth+'px';
        stairHtml.style.height=stair.stairHeight+'px';
        stairHtml.style.marginLeft=stair.rowPos+'px';

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
        }
        else {
          this.board.insertBefore(space, lastStair)
          this.board.insertBefore(stair, space)
        }
      }
    }

   generateOneStair(){
      this.generateBoardStairs(1)
    }

   getStairsPosition(stairs){

      for (var i=0 ;i<stairs.length;i++){
        this.stairsPosition[i]=stairs[i].getBoundingClientRect().top;
      }
    }

   getStairsPosition2(stairs){
      let stairsPos=[];
      console.log(stairs.length)
      for (var i=0 ;i<stairs.length;i++){
        stairsPos[i]=new Pos();
        stairsPos[i].startx=stairs[i].style.marginLeft;
        stairsPos[i].width=stairs[i].style.width;
        stairsPos[i].top=stairs[i].getBoundingClientRect().top;
        console.log(stairs[i]," ",  stairsPos[i].startx,"  ",stairs[i].style.width+"  "+  stairsPos[i].top);
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
  //     this.getStairsPosition2(this.stairs)
       this.stairsMove();
    }

}
