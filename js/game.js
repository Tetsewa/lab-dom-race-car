class Game {
 constructor (){
    this.startScreen=document.getElementById("game-intro");
    this.gameScreen=document.getElementById("game-screen");
    this.gameEndScreen=document.getElementById("game-end");
    this.player=null;
    this.height=600;
    this.width=500;
    this.obstacles=[];
    this.score=0;
    this.lives=3;
    this.gameIsOver=false;
    this.gameIntervalId=null;
    this.gameLoopFrequency=1000/60
 }   
 start(){
    this.gameScreen.style.height=`${this.height}px`;
    this.gameScreen.style.width=`${this.width}px`;

    this.startScreen.style.display="none";
    this.gameScreen.style.display="block";

    this.player = new Player(
      this.gameScreen,
      100, 420,
      80, 200,
      "./images/car.png"
    )

    this.gameIntervalID= setInterval(()=>{
        this.gameLoop()
        
    }, this.gameLoopFrequency)
       
 }
 gameLoop(){
    console.log("in the game loop")
    this.update();

    if (this.gameIsOver){
        clearInterval(this.gameIntervalId)
    } 
 }

 update(){

 }
}
