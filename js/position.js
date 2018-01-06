class Position
{
    constructor(x = 0, y = 0)
    {
        this.xPosition = x;
        this.yPosition = y;
    }

    set x(x)
    {
        this.xPosition = x;
    }

    set y(y)
    {
        this.yPosition = y;
    }


    get x()
    {
        return this.xPosition;
    }

    get y()
    {
        return this.yPosition;
    }
}
