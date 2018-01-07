class Coin {
	constructor(position , size , type ,score ){
		this.position = position;
		this.size = size;
		this.type = type;
		this.score = score;
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

