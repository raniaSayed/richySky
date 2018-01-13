class character
{
    constructor(name, x = 70, y = 0)
    {
        this.name = name;
        this.moving = false;
        this.jumping = false;
        this.falling = false;
        this.onObstacle = false;
        this.moveWithObstacle = false;
        this.onTheFloor = true;
        this.whichObstacle = 0;
        this.bordWidth = 500;
        this.blocks = null;
        this.location = new Position(x, y);
        this.image = document.getElementById("charImg").style;
        //this.imageMoving = document.getElementById("charImg").src;
        this.initCharacter();
    }

    initCharacter()
    {
        this.image.left = this.location.xPosition + "px";
        this.image.bottom = this.location.yPosition + "px";
        document.addEventListener("keydown", this.control1.bind(this));
        document.addEventListener("keyup", this.control2.bind(this));
    }

    control1(event)
    {
        if( ( event.keyCode === 37 || event.keyCode === 39 ) && !this.moving)
        {

            this.moving = setInterval(this.move.bind(this), 2, event.keyCode);
        }
    }

    control2(event)
    {
        if(event.keyCode === 37 || event.keyCode === 39){
            document.getElementById("charImg").src="img/charCenter.png"
          clearInterval(this.moving);
          this.moving = false;
        }
        else if(event.keyCode === 32 &&  !this.jumping && !this.falling)
          this.jumping = setInterval(this.jump.bind(this), 5, this.location.yPosition + 150);
    }

    move(direction) {

        if (direction == 39 && this.location.xPosition <  this.bordWidth - 50)
        {
          document.getElementById("charImg").src="img/charRight.png"
          this.location.xPosition += 2;
          this.image.left = this.location.xPosition + "px";
        }
        else if(direction == 37 && this.location.xPosition > 0){
            document.getElementById("charImg").src="img/charLeft.png"
            this.location.xPosition -= 2;
            this.image.left = this.location.xPosition + "px";
        }
        if(this.onTheFloor)
        {
          this.blocks = gameObj.getPos();
          this.onTheFloor = false;
        }
        if( ( this.location.xPosition > this.blocks[this.whichObstacle].width
              || this.location.xPosition +  50 < this.blocks[this.whichObstacle].xObstacle)
              && this.onObstacle && !this.jumping && !this.falling)
        {

            clearInterval(this.moveWithObstacle);
            this.falling = setInterval(this.fallDown.bind(this), 5);
            //clearInterval(this.moveWithObstacle);
            this.onObstacle = false;
        }
    }

    jump(ceil)
    {
        clearInterval(this.moveWithObstacle);
        // if(!interval2)
        //      interval2 = setInterval(moveBlocks, 300);
        this.location.yPosition += 5;
        if( this.location.yPosition > ceil && !this.falling)
        {
          clearInterval(this.jumping);
          this.jumping = false;
          this.falling = setInterval(this.fallDown.bind(this), 5);
          return;
        }
        this.image.bottom = this.location.yPosition + "px";
    }

    fallDown()
    {
        this.location.yPosition -= 5;
        this.search();
        if(this.location.yPosition <  0 && !this.jumping)
        {
            clearInterval(this.falling);
            this.falling = false;
            return;
        }
        this.image.bottom = this.location.yPosition + "px";
    }

    search()
    {
        gameObj.stopStairs();
        this.blocks = gameObj.getPos();
        for(let i = 0; i < 7; i++)
        {
            // console.log("char = ", this.location.yPosition);
            // console.log("block = ", this.blocks[i].yObstacle)
            if(this.location.yPosition >= this.blocks[i].yObstacle - 2 && this.location.yPosition <= this.blocks[i].yObstacle + 2)
            {
                if(this.location.xPosition + 50 >= this.blocks[i].xObstacle && this.location.xPosition  <  this.blocks[i].width)
                {
                    clearInterval(this.falling);
                    this.falling = false;
                    this.onObstacle = true;
                    //gameObj.stopStairs();
                    gameObj.moveStairs();
                    this.moveWithObstacle = setInterval(this.moveTogether.bind(this), 10);
                    this.whichObstacle = i;
                    return;
                }
            }
        }
        gameObj.moveStairs();
    }

    moveTogether()
    {
        this.location.yPosition -= 1;
        if(this.location.yPosition <=  0)
        {
            clearInterval(this.moveWithObstacle);
            this.falling = false;
            return;
        }
        this.image.bottom = this.location.yPosition + "px";
    }

}
