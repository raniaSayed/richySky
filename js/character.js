
image = document.getElementById('image').style;


let b = document.getElementById("blocks");
let block = document.createElement("img");
let positionFromBottom = 50;

let blocks = [];
let blocksTag = [];

let n = 0;

let interval = setInterval(generateBlocks, 1);

function generateBlocks()
{
    let block = document.createElement("img");
    block.src = "block.jpg";
    block.style.height = "50px";
    block.style.width = "200px";
    block.style.position = "absolute";
    y = positionFromBottom + 50;
    block.style.bottom = positionFromBottom + "px";
    let x = Math.floor(Math.random() * 1000) ;
    while (x > window.innerWidth -1000)
        x = Math.floor(Math.random() * 1000);
    block.style.left = x + "px";
    b.appendChild(block);
    blocksTag.push(block);
    blocks[n++] = {xObstacle : x, yObstacle : y, width : 200};
    positionFromBottom += 100;
    if(n > 10)
    clearInterval(interval);
    //console.log(blocks);
}

function moveBlocks()
{
    for(let i = 0; i < blocks.length; i++)
    {
        blocks[i].yObstacle -= 5;
        blocksTag[i].style.bottom = blocks[i].yObstacle;
    }
}

let interval2 = setInterval(moveBlocks, 300);



class Position
{
    constructor(xPosition = 0, yPosition = 0)
    {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    set xPosition(x)
    {
        this._xPosition = x;
    }

    set yPosition(y)
    {
        this._yPosition = y;
    }


    get xPosition()
    {
        return this._xPosition;
    }

    get yPosition()
    {
        return this._yPosition;
    }
}

class charachter
{
    constructor(name, x = 0, y = 0)
    {
        this.name = name;
        this.moving = false;
        this.jumping = false;
        this.falling = false;
        this.onObstacle = false;
        this.moveWithObstacle = false;
        this.whichObstacle = 0;
        this.location = new Position(x, y);
        image.left = x + "px";
        image.bottom = y + "px";
        document.addEventListener("keydown", this.arrow.bind(this));
        document.addEventListener("keyup", this.space.bind(this));
    }

    arrow (event){
        if(( event.keyCode === 37 || event.keyCode === 39 ) && !this.moving)
        {
            this.moving = setInterval(this.move.bind(this), 2, event.keyCode);
        }
    }

    space(event)
    {
        if(event.keyCode === 37 || event.keyCode === 39){
          clearInterval(this.moving);
          this.moving = false;
        }
        else if(event.keyCode === 32 &&  !this.jumping && !this.falling)
          this.jumping = setInterval(this.jump.bind(this), 5, this.location.yPosition + 300);
    }

    move(direction) {

        if (direction == 39 && this.location.xPosition <  window.innerWidth)
        {
          this.location.xPosition += 2;
          image.left = this.location.xPosition + "px";
        }
        else if(direction == 37 && this.location.xPosition > 0){
            this.location.xPosition -= 2;
            image.left = this.location.xPosition + "px";
        }
        if( ( this.location.xPosition > blocks[this.whichObstacle].xObstacle + 200 || this.location.xPosition +  50 < blocks[this.whichObstacle].xObstacle)
              && this.onObstacle && !this.jumping && !this.falling)
        {
            clearInterval(this.moveWithObstacle);
            this.falling = setInterval(this.fallDown.bind(this), 5);
            clearInterval(this.moveWithObstacle);
            if(!interval2)
                 interval2 = setInterval(moveBlocks, 300);
            //interval2 = setInterval(moveBlocks, 300);
            this.onObstacle = false;
        }
    }

    jump(ceil)
    {
        clearInterval(this.moveWithObstacle);
        if(!interval2)
             interval2 = setInterval(moveBlocks, 300);
        this.location.yPosition += 5;
        if( this.location.yPosition > ceil && !this.falling)
        {
          clearInterval(this.jumping);
          this.jumping = false;
          this.falling = setInterval(this.fallDown.bind(this), 5);
          return;
        }
        image.bottom = this.location.yPosition + "px";
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
        image.bottom = this.location.yPosition + "px";
    }

    search()
    {
        //console.log("search func entered");
        //clearInterval(interval2);
        //console.log(blocks);
        for(let i = 0; i < blocks.length; i++)
        {
            //console.log("same height");
            if(this.location.yPosition === blocks[i].yObstacle + 50)
            {
                //console.log("same height");
                if(this.location.xPosition + 50 >= blocks[i].xObstacle && this.location.xPosition  < blocks[i].xObstacle + 200 )
                {
                    //console.log("on range of obstacle");
                    clearInterval(interval2);
                    interval2 = false;
                    clearInterval(this.falling);
                    this.falling = false;
                    this.onObstacle = true;
                    this.moveWithObstacle = setInterval(this.moveTogether.bind(this), 300)
                    this.whichObstacle = i;
                    return;
                }
            }
        }
        //interval2 = setInterval(moveBlocks, 300);
    }

    moveTogether(){
        for(let i = 0; i < blocks.length; i++)
        {
            blocks[i].yObstacle -= 1;
            blocksTag[i].style.bottom = blocks[i].yObstacle;
        }
        this.location.yPosition -= 1;
        image.bottom = this.location.yPosition + "px";
    }
}

let gemy = new charachter("gemy");