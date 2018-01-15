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
        this.regularcoin = document.getElementById(this.id);

        //this.coinNode =  this.generateCoinNode();
    }
    
    /*
    *       move coin in vertically 
    *       @return intervalID
    */
    move(){
        let rotate  = 0;
        let _this = this;
        function moveCoinNode() {
            rotate += 20;
            _this.regularcoin.style.WebkitTransform = "rotatey("+rotate+"deg)";
            _this.detectTouch(_this); 
        };
        var intervalID = setInterval(moveCoinNode, 100);
        return intervalID;
    }

    /*
    *       hide coin
    *       @param intervalID
    */
    hide(intervalID){
         //var regularcoin = document.getElementById(this.id);
         this.regularcoin.style.display = "none";
         console.log("hide")
    }

    detectTouch(_this,score){
        let characterBottom = document.getElementById("charImg").getBoundingClientRect().bottom;
        let characterLeft = document.getElementById("charImg").getBoundingClientRect().left;
        
        let coinBottom = _this.regularcoin.getBoundingClientRect().bottom;
        let coinLeft = _this.regularcoin.getBoundingClientRect().left;
       
        if(
            characterBottom - coinBottom <= 90
            && Math.abs(characterLeft - coinLeft <= 80)
        ){
            console.log("score"+_this.score)
            console.log("win");
            _this.hide();
            gameObj.Player.calCoins();

        }
    }

    /*
     * detect touch of coin with character
     *
    */
    DetectTouchIntervel(){
        //height of character = 60 , coin 30
        //width of char = 50 ,coin 30
     //   let regularcoin = document.getElementById(this.id);
        let _this = this;
        var intervalID = setInterval(_this.detectTouch(_this),10);
    }

    
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
    set regularcoin(regularcoin){
        this._regularcoin = regularcoin;

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
        console.log(this._score)
        return this._score;
    }

    get regularcoin(){
        return this._regularcoin ;
    }

    get id()
    {
        return this._id;
    }
/*
    *       stop coin movement
    *       @param intervalID
    */
    // stopMovement(intervalID){
    //      window.clearInterval(intervalID);
    //  //    var regularcoin = document.getElementById(this.id);
    //      this.regularcoin.style.WebkitTransform = "rotate(0deg)";
    // }
    
}

