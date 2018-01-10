class Size{
    constructor(weigth , height){
        this.weigth = weigth;
        this.height = height;
    }
}
class Coin {
	constructor(coinNode, position , size , type ,score, parentDiv ){
        this.position = position;
		this.size = size;
		this.type = type;
		this.score = score;
        generateCoinNode();
	}
    generateCoinNode(){
        this.coinNode = document.createElement("img");
        this.coinNode.src= this.type;//"coin.png"
        this.coinNode.style.width=this.size.weigth; //"30px";
        this.coinNode.style.position="absolute";
        this.coinNode.style.bottom = this.position.x+"px"; //Number(positionFromBottom +60)+ "px";
        this.coinNode.style.left  = this.position.y+"px"; //(x+100) + "px";
        let parentDiv =  document.getElementById("boardStairs");
        parentDiv.appendChild(coin);
        move(this.coinNode);
    }
	
	set coinNode(coinNode)
    {
        this._coinNode= coinNode;
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
    
}

