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
