var hypnoticBall, database;
var form, game;
var gamestate=0


function setup(){
  canvas= createCanvas(400,400)
  database = firebase.database();
  game = new Game()
  game.getstate()
  game.start()
  
}

function draw(){

}

