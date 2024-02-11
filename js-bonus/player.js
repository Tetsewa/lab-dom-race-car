class Player extends Component {
        constructor(gameScreen, left, top, width, height, imgSrc) {
          super(gameScreen, left, top, width, height, imgSrc);
      
          this.directionX = 0;
          this.directionY = 0;
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

    
    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
      }

}

