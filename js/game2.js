var count = 3;
var bottom=150;
var rights=[];
var lefts=[];

var right = 50;
var bot = 0;
var rig=650; 
var currIndx = -1;
var i =0;
var x = 30;
var y = 3;
var z = 3;
var w = 0;
var flag = true;
var right =[600,950,600];// parseInt((Math.random()*800));    
var mainDiv = document.getElementById("mainDiv");
var char = document.getElementById("char");

mainDiv.appendChild(char);
char.style.right="650px";
char.style.bottom="0px";


/*
* return true if boll is outside
*/
var isOutRight = function(right,currentEdgeRight){
    return right < currentEdgeRight;
}
var isOutLeft = function(right,currentEdgeRight){
    return right > currentEdgeRight;
}

var dropBoll = function(){
 // if(flag === true){
    var intervalID = setInterval(function(){
        flag = false;
        char.style.bottom = (bot-=5)+"px";
        console.log("interval 2"+flag);
        w++;
        if( w === 30 ){
          w=0;
          flag=true;
          clearInterval(intervalID);
        }
    },5);
 // }
}

while(count--){
    var random = 8;//parseInt((Math.random()*10)+3);
    if(random > 9 )random -=2;
    lefts.push(right[i]+20);
     
     while(random--){
       iceImg = document.createElement("img");
       iceImg.style ="position:absolute;width: 70px;";
       iceImg.src = "imgs/ice.png"; 
       iceImg.style.right=right[i]+"px";
       iceImg.style.bottom=bottom+"px";
       mainDiv.appendChild(iceImg);
       right[i]-=50;
    }
    rights.push(right[i]+30);
    i++;


    bottom+=150;  
   }
   console.log(lefts);
   console.log(rights)


//...........................................................
  document.addEventListener('keydown',function(e){
     if(isOutRight(rig,rights[currIndx]) || isOutLeft(rig,lefts[currIndx])){
        if(currIndx >= 0){
            console.log("in")
            dropBoll();
            currIndx--;
        }
    }
    //space
   if(e.keyCode == 32){
        currIndx++;
        if(x === 30 && bot < 500 /*&& flag*/){
          x = 0;
          flag = false;
          var intervalID = setInterval(function () {
          console.log("interval 1"+flag);
          char.style.bottom = (bot < 500 )?(bot+=5)+"px":(bot+"px");
          x++;
          if (x === 30) {
             flag = true;
              window.clearInterval(intervalID);
          }
           }, 5);//5px
       }

   }
    //right
   else if(e.keyCode == 39){
      if(z === 3){
          z=0;
          var intervalID = setInterval(function () {
       
        //  char.style.left = (rig <95) ?((rig+=5)+"px"):rig=rig;
          char.style.right = ((rig-=5)+"px");

          z++;
          if (z === 3) {
              window.clearInterval(intervalID);
          }
         }, 5);
      }
   }
   //left
   else if(e.keyCode == 37){
      if(y === 3){

          y=0;
          var intervalID = setInterval(function () {
       
          //char.style.left = (rig >= 5) ? ((rig-=5)+"px"):rig=rig;
          char.style.right =  ((rig+=5)+"px");
              y++;
              if (y === 3){
                  window.clearInterval(intervalID);
              }
             }, 5);
      }
   }
   //up
   else if(e.keyCode == 38){
        
       // char.style.bottom = (bot < 90 )?(bot+=5)+"px" :bot=bot;
        char.style.bottom = (bot+=5)+"px";
   }
    //down
   else if(e.keyCode == 40){
        
       // char.style.bottom = (bot < 90 )?(bot+=5)+"px" :bot=bot;
        char.style.bottom = (bot-=5)+"px";
   }
  });
 
 
