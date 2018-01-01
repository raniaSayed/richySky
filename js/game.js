

var mainDiv = document.getElementById("mainDiv");
var char = document.getElementById("char");

var hr = document.createElement("hr");
class character {
	constructor (right, left, top, bottom) {
        this.right = right;
        this.left = left;
        this.top = top;
        this.bottom = bottom;
    }
    setRight(right) {
        this.right = right;
    } 
    setTop(top) {
        this.top = top;
    }
    getRight(){
    	return this.right;
    }
    getTop(){
    	return this.top;
    }

}

chObj = new character();

mainDiv.insertBefore(hr,char);
char.style.width="100px";
char.style.right="50%";
char.style.bottom="0px";
bottom=0;
var right = parseInt((Math.random()*100)+10);
var random = parseInt((Math.random()*10)+3);
if(random > 8 )random -=2;


while(random--){
	iceImg = document.createElement("img");
	iceImg.style ="position:absolute;width: 70px;";
 	iceImg.src = "imgs/ice.png"; 
 	iceImg.style.right=right+"%";
	iceImg.style.bottom="30%";
 	mainDiv.appendChild(iceImg);
 	right-=5;
 }
 document.addEventListener('keydown',function(e){
 	if(e.keyCode == 32){
 		var x = 0;
		var intervalID = setInterval(function () {

		   // Your logic here
 		char.style.bottom = (bottom+=5)+"%"

		   if (++x === 8) {
		       window.clearInterval(intervalID);
		   }
		}, 100);
 	}else if(e.keyCode == 37){
 		
 	}

 });



