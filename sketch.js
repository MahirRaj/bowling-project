var background  , fullpoints , lesspoints , middletarget1,middletarget2,middletarget
var target , targetcollide , target11 , target12 , target13, target14 , target21 , target22 , target23 , target24
var players , player1 , player2 , player1ball , player2ball
var pow

function preload(){

backgroundImg = loadImage("assets/background.jpg");
fullpointsimg = loadImage("assets/fullpoints.png");
lesspointsimg = loadImage("assets/lesspoints.png");
middletargetimg = loadImage("assets/middletarget.png");
player1ballimg = loadImage("assets/player1ball.png");
player2ballimg = loadImage("assets/player2ball.png");
powimg = loadImage("assets/target.png");
targetimg = loadImage("assets/target.png");
targetcollideimg = loadImage("assets/targetcollide.png");

}

function setup(){
createCanvas(1600,700);

player1ball = createSprite(270,600,20,20);
player2ball = createSprite(1330,600,20,20)
//player1ball.x = 500;
player1ball.addImage("p1ball",player1ballimg);
player2ball.addImage("p2ball",player2ballimg);

player1ball.scale = 2.0;
player2ball.scale = 2.7;

middletarget1 = createSprite(270,60,20,20);
middletarget1.addImage("mtarget1",middletargetimg);
middletarget1.scale = 2.3;

middletarget2 = createSprite(1330,60,20,20);
middletarget2.addImage("mtarget1",middletargetimg);
middletarget2.scale = 2.3;

target11 = createSprite(200,60,20,20);
target11.addImage("t11",targetimg);
target11.scale = 2.3;
target12 = createSprite(130,60,20,20);
target12.addImage("t12",targetimg);
target12.scale = 2.3;
target13 = createSprite(340,60,20,20);
target13.addImage("t13",targetimg);
target13.scale = 2.3;
target14 = createSprite(410,60,20,20);
target14.addImage("t14",targetimg);
target14.scale = 2.3;

target21 = createSprite(1400,60,20,20);
target21.addImage("t21",targetimg);
target21.scale = 2.3;
target22 = createSprite(1470,60,20,20);
target22.addImage("t22",targetimg);
target22.scale = 2.3;
target23 = createSprite(1260,60,20,20);
target23.addImage("t23",targetimg);
target23.scale = 2.3;
target24 = createSprite(1190,60,20,20);
target24.addImage("t24",targetimg);
target24.scale = 2.3;











}

function draw(){

    
background(backgroundImg);



drawSprites();
//player1ball.velocityX = 10;

}