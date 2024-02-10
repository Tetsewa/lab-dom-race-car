class player{
    constructor(gameScreen, left, top, width, height, directionX, directionY, element){
        this.gameScreen=gameScreen;
        this.left=left;
        this.top=top;
        this.width=width;
        this.height=height;
        this.directionX=0;
        this.directionY=0;
        this.element= document.createElement("img")

    
    
    }

   
    createElement(img) {
        const image= document.createElement('img');
        image.src = img


        this.gameScreen.appendChild(this.element)
        image.style.position="absolute";
        
        image.style.left=`${this.left}px`;
        image.style.top=`${this.top}px`;
        image.style.width=`${this.width}px`
        image.style.height=`${this.height}px`
    }

    move(){
        this.left+=this.directionX;
        this.top+=this.directionY;

    //for left position
        if (this.left<10){
            this.left=10
        }

    //for top position
        if (this.top<10){
        this.top=10
        }

    //for right position

    //for bottom position


    this.updatePosition()
    
    updatePosition(){

    }

    didCollide(obstacles){

    }

}

