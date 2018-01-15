class Player{

 constructor(name,image)
 {
 this.name=name;
 this.calScore();
 this.numCoins=0;
 this.image =image;
 // this.character=new character();
 // this.character.name=null;
 // this.character.characterImageId=null;
 // this.character.xLow=0;
 // this.character.xHigh=0;
 // this.character.height=0+'px';
 // this.character.width=0+'px';
 }

set name(n)
{
this._name=n;
}

set image(image)
{
this._image=image;
}


get name()
{
return this._name;
}

get image()
{
return this._image;
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
  document.getElementById("score").textContent = this.calScore();
}

calScore()
{
this.score=this.numCoins*10;
return this.score
}

}
