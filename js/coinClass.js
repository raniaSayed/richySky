class Size{
    constructor(weigth , height){
        this.weigth = weigth;
        this.height = height;
    }
}
class Coin {
	constructor(position , size , type ,score){
        this.position = position;
		this.size = size;
		this.type = type;
		this.score = score;
        this.coinNode =  this.generateCoinNode();
	}

    generateCoinNode(){
//        let div= document.createElement('div');
        //div.setAttribute('class','coins');

        let coinNode = document.createElement("img");
        coinNode.setAttribute('class','coins');
        coinNode.src= this.type;//"coin.png"
        coinNode.style.width=this.size.weigth; //"30px";
      //  coinNode.style.position="absolute";
        coinNode.style.bottom = this.position.x+"px"; //Number(positionFromBottom +60)+ "px";
        coinNode.style.left  = this.position.y+"px"; //(x+100) + "px";
     //   move(coinNode);
        return coinNode;
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
    get coinNode()
    {
        return this._coinNode;
    }

    
}

