

let gameObj=null;
//Function To Display Popup
function div_show(divName) {
document.getElementById(divName).style.display = "block";
}
//Function to Hide Popup
function div_hide(divName){
document.getElementById(divName).style.display = "none";
}

function selectPlayer(){
  let selectedPlayer=0;
     if(document.getElementById('Poppy').checked)
        selectedPlayer=document.getElementById('Poppy').value;
     else if(document.getElementById('Branch').checked)
          selectedPlayer=document.getElementById('Branch').value;
  return selectedPlayer;
}

function getPlayerName(){
  let name=null;

     if(document.getElementById('playerName').value!="")
        name=document.getElementById('playerName').value;

  return name;
}

function getPlayer()
{
  
}

let playBtnMenue=document.getElementById("playBtn");
playBtnMenue.addEventListener('click',openPopup);
function openPopup(){
  div_show("playersPage");
}

let playBtn=document.getElementById("submit")
playBtn.addEventListener('click',clkFn);
function clkFn(){
       playerChar=selectPlayer();
       playerName=getPlayerName();
       playerImage = "img/"+"happy"+selectPlayer()+".jpg";
       if(playerChar!=null &&playerName!=null)
       {
          div_hide("playersPage");
          div_hide("menuePage");
          div_show("playingBoard");
          gameObj=new game();

          //let game=new gameBoard();
          //game.startGame();
        }
  }

let closeBtn=document.getElementById("closePic");
closeBtn.addEventListener('click',closeFn);
function closeFn(){
   div_hide("playersPage");
}

let playerChar=null;
let playerName=null;
