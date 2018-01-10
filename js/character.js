class Character {
    // Parameters
    // ##########
    // name(String): name of the character 
    // characterImageId(String): value of id attribute of the character image
    // xLow(Number): the distance from left of the screen to the left border of the game 
    // xHigh(Number): the distance from left of the screen to the right border of the game
    // height(Number): height of the character image
    // width(Number): width of the character image
    constructor(name, characterImageId, xLow, xHigh, height, width) {
        this.name = name;
        this.character = document.getElementById(characterImageId);
        this.height = height;
        this.width = width;
        this.xLow = xLow;
        this.xHigh = xHigh;
        this.location = new Position();
        this.location.xPosition = Math.floor(((this.xHigh - this.xLow) / 2) - (0.5 * this.width));
        this.location.yPosition = 0;
        this.character.style.position = 'absolute';
        this.character.style.left = this.location.xPosition + 'px';
        this.character.style.bottom = this.location.yPosition + 'px';
        this.character.style.height = this.height + 'px';
        this.character.style.width = this.width + 'px';
        this.interval = undefined; // To keep track of intervals of left and right moves 
        this.jumpInterval = undefined; // To keep track of intervals of up and down moves
        this.setupCharacter(); // initialize the character

        // position of stairs and coins handling to be added !!!
    }

    moveLeft() {
        this.location.xPosition -= 4;
        this.character.style.left = this.location.xPosition + 'px';
    }

    moveRight() {
        this.location.xPosition += 4;
        this.character.style.left = this.location.xPosition + 'px';
    }

    jump() {
        this.location.yPosition += 4;
        this.character.style.bottom = this.location.yPosition + 'px';
    }

    down() {
        this.location.yPosition -= 4;
        this.character.style.bottom = this.location.yPosition + 'px';
    }

    setupCharacter() {
        document.onkeydown = (e) => {
            if (this.interval === undefined && (e.keyCode === 37 || e.keyCode === 39)) {
                this.interval = setInterval(() => {
                    switch(e.keyCode) {
                        case 37:
                        if (this.location.xPosition <= 0) {
                            clearInterval(this.interval);
                            return;
                        }
                        this.character.setAttribute('src', '18_left.png');
                        this.moveLeft();
                        break;
                        case 39:
                        if (this.location.xPosition >= (this.xHigh - this.xLow - this.width)) {
                            clearInterval(this.interval);
                            return;
                        }
                        this.character.setAttribute('src', '01_right.png');
                        this.moveRight();
                        break;
                    }
                    
                }, 10);
            }
        }
        
        document.onkeyup = (e) => {
            if (e.keyCode === 37 || e.keyCode === 39) {
                clearInterval(this.interval);
                this.interval = undefined;
                this.character.setAttribute('src', '11_front.png');

            }
        }

        document.onkeypress = (e) => {
            if (this.jumpInterval === undefined && e.keyCode === 32) {
                this.jumpInterval = setInterval( () => {
                    if (this.location.yPosition >= 300) {
                        clearInterval(this.jumpInterval);
                        this.jumpInterval = setInterval( () => {
                            if (this.location.yPosition <= 0) {
                                clearInterval(this.jumpInterval);
                                this.jumpInterval = undefined;
                                return;
                            }
                            this.down();
                        }, 5);
                    }
                    this.jump();
                }, 5);
            }
        }
    }
}

var c = new Character('Ball', 'ball', 100, 1600, 96, 72);
