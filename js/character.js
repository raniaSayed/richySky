class Character {
    // Parameters
    // ##########
    // name(String): name of the character
    // characterImageId(String): value of id attribute of the character image
    // xLeftBorder(Number): the distance from left of the screen to the left border of the game
    // xRightBorder(Number): the distance from left of the screen to the right border of the game
    // height(Number): height of the character image
    // width(Number): width of the character image
    constructor(name, characterImageId, xLeftBorder, xRightBorder, height, width) {
        this.name = name;
        this.character = document.getElementById(characterImageId);
        this.height = height;
        this.width = width;
        this.xLeftBorder = xLeftBorder;
        this.xRightBorder = xRightBorder;
        this.location = new Position();
        this.moving = undefined;
        this.jumping = undefined;
        this.initCharacter();

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

    fall() {
        this.location.yPosition -= 4;
        this.character.style.bottom = this.location.yPosition + 'px';
    }

    initCharacter() {
        this.location.xPosition = Math.floor(((this.xRightBorder - this.xLeftBorder) / 2) - (0.5 * this.width));
        this.location.yPosition = 0;
        this.character.style.position = 'absolute';
        this.character.style.left = this.location.xPosition + 'px';
        this.character.style.bottom = this.location.yPosition + 'px';
        this.character.style.height = this.height + 'px';
        this.character.style.width = this.width + 'px';
        this.moveHandler();
        this.moveStopHandler();
        this.jumpHandler();
    }

    moveHandler() {
        document.onkeydown = (e) => {
            if (!this.moving && (e.keyCode === 37 || e.keyCode === 39)) {
                this.moving = setInterval(() => {
                    switch(e.keyCode) {
                        case 37:
                        if (this.location.xPosition <= 0) {
                            clearInterval(this.moving);
                            return;
                        }
                        this.character.setAttribute('src', '18_left.png');
                        this.moveLeft();
                        break;
                        case 39:
                        if (this.location.xPosition >= (this.xRightBorder - this.xLeftBorder - this.width)) {
                            clearInterval(this.moving);
                            return;
                        }
                        this.character.setAttribute('src', '01_right.png');
                        this.moveRight();
                        break;
                    }

                }, 10);
            }
        }
    }

    moveStopHandler() {
        document.onkeyup = (e) => {
            if (e.keyCode === 37 || e.keyCode === 39) {
                clearInterval(this.moving);
                this.moving = undefined;
                this.character.setAttribute('src', '11_front.png');

            }
        }
    }

    jumpHandler() {
        document.onkeypress = (e) => {
            if (!this.jumping && e.keyCode === 32) {
                this.jumping = setInterval( (jump) => {
                    if (this.location.yPosition >= jump) {
                        clearInterval(this.jumping);
                        this.jumping = setInterval( (fall) => {
                            if (this.location.yPosition <= fall) {
                                clearInterval(this.jumping);
                                this.jumping = undefined;
                                return;
                            }
                            this.fall();
                        }, 5, this.location.yPosition - 300);
                    }
                    this.jump();
                }, 5, this.location.yPosition + 300);
            }
        }
    }
}

var c = new Character('Ball', 'ball', 100, 1600, 96, 72);
