class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img")
        this.element.style.position = `absolute`
        this.element.src = imgSrc
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.gameScreen.appendChild(this.element)




    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;


        // boundaries

        //for left position
        if (this.left < 10) {
            this.left = 10
        }

        //for top position
        if (this.top < 10) {
            this.top = 10
        }
 //for right position
        if(this.top > (this.gameScreen.height - 200))
        {
            this.top = this.gameScreen.height - 200
        }
 //for bottom position
        if(this.left > (this.gameScreen.width - 80))
        {
            this.left = this.gameScreen.width - 80
        }

    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    
    didCollide(obstacles) {
    if (this.player===obstacles){
        return true
    }
    else 
    {return false}
    }

}

