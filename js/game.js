var coin = document.getElementById("coin");
var dollarCoin = document.getElementById("dollarCoin");
coin.style.right="10px";
rotate  = 0;
flag = 0;
var x=0;
var intervalID;
coin.addEventListener("mouseenter",function(){
    if(!flag){
    var intervalID = setInterval(function () {
        // Your logic here
        rotate += 20;
        coin.style.WebkitTransform = "rotate("+rotate+"deg)"; 
        flag =1;
        if (x++ === 18) {
            console.log(x);
            window.clearInterval(intervalID);
             coin.style.WebkitTransform = "rotate(0deg)";
            flag = 0;
            x = 0;
        }
     }, 100);
}
});
coin.addEventListener("mouseleave",function(){
     window.clearInterval(intervalID);
    coin.style.WebkitTransform = "rotate(0deg)";

});
dollarCoin.style.right="10px";

dollarCoin.addEventListener("mouseenter",function(){
    if(!flag){
    var intervalID = setInterval(function () {
        // Your logic here
        rotate += 20;
        dollarCoin.style.WebkitTransform = "rotateY("+rotate+"deg)"; 
        flag =1;
        if (x++ === 18) {
            console.log(x);
            window.clearInterval(intervalID);
             dollarCoin.style.WebkitTransform = "rotateY(0deg)";
            flag = 0;
            x = 0;
        }
     }, 100);
}
});
dollarCoin.addEventListener("mouseleave",function(){
     window.clearInterval(intervalID);
    dollarCoin.style.WebkitTransform = "rotateY(0deg)";

});



var mainDiv = document.getElementById("mainDiv");
var char = document.getElementById("char");


char.style.width="100px";
char.style.right="50%";
char.style.bottom="0px";
bottom=0;

	iceImg = document.getElementById("coin");
	iceImg.style ="position:absolute;width: 70px;";
 	iceImg.style.right="50%";
	iceImg.style.bottom="30%";
 	mainDiv.appendChild(iceImg);

 
 document.addEventListener('keydown',function(e){
 	if(e.keyCode == 32){
 		var x = 0;
		var intervalID = setInterval(function () {

		   // Your logic here
 		char.style.bottom = (bottom+=5)+"%";
        coin.style.WebkitTransform = "rotate("+rotate+"deg)"; 
        rotate+=20;


		   if (++x === 8) {
		       window.clearInterval(intervalID);
               iceImg.style.display = "none";
		   }
		}, 100);
 	}else if(e.keyCode == 37){
 		
 	}

 });



