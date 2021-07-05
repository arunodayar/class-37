var canvas, backgroundImage;
var car1,car2,car3,car4,cars;

var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(windowWidth-38,windowHeight-38);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);

  }
  if(gameState===1){
    game.play();
  }
}
