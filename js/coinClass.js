class Size{
    constructor(weigth , height){
        this.weigth = weigth;
        this.height = height;
    }
}
class Coin {
	constructor(position ,id, size , type ,score){
        this.position = position;
        this.id = id;
		this.size = size;
		this.type = type;
		this.score = score;
        //this.coinNode =  this.generateCoinNode();
	}
    
    /*
    *       move coin in vertically 
    *       @return intervalID
    */
    move(){
        var rotate  = 0;
        var regularcoin = document.getElementById(this.id);

        function moveCoinNode() {
            rotate += 20;
            regularcoin.style.WebkitTransform = "rotatey("+rotate+"deg)"; 
        };
        var intervalID = setInterval(moveCoinNode, 100);
        return intervalID;
    }

    /*
    *       stop coin movement
    *       @param intervalID
    */
    stopMovement(intervalID){
         window.clearInterval(intervalID);
         var regularcoin = document.getElementById(this.id);
         regularcoin.style.WebkitTransform = "rotate(0deg)";
    }

//     generateCoinNode(){
// //        let div= document.createElement('div');
//         //div.setAttribute('class','coins');

//         let coinNode = document.createElement("img");
//         coinNode.setAttribute('class','coins');
//         coinNode.src= this.type;//"coin.png"
//         coinNode.style.width=this.size.weigth; //"30px";
//       //  coinNode.style.position="absolute";
//         coinNode.style.bottom = this.position.x+"px"; //Number(positionFromBottom +60)+ "px";
//         coinNode.style.left  = this.position.y+"px"; //(x+100) + "px";
//      //   move(coinNode);
//         return coinNode;
//     }
	
	set id(id)
    {
        this._id= id;
    }

    set position(position)
    {
        this._position = position;
    }

    set size(size)
    {
        this._size = size;
    }

     set type(type)
    {
        this._type = type;
    }

    set score(score)
    {
        this._score = score;
    }


	get position()
    {
        return this._position ;
    }

    get size()
    {
       return this._size;
    }

     get type()
    {
        return this._type;
    }

    get score()
    {
        return this._score;
    }
    get id()
    {
        return this._id;
    }

    
}

