class Player{

 constructor(name)
 {
 this.name=name;
 this.calScore();
 this.numCoins=0;
 this.character=new Character();
 this.character.name=NULL;
 this.character.characterImageId=NULL;
 this.character.xLow=0;
 this.character.xHigh=0;
 this.character.height=0+'px';
 this.character.width=0+'px';
 }

set name(n)
{
this._name=n;
}
get name()
{
return this._name;
}

/*set numCoins()
{
  this._numCoins++;
}

get numCoins()
{
  return this._numCoins;
}*/

calCoins()
{
  this.numCoins++;
}

calScore()
{
this.score=this.numCoins*10;
return this.score
}

}
