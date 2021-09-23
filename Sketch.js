//var PLAY = 1;
//var END = 0;
//var gameState = PLAY;

var girl1,girlImg1,girl2,girlImg2;
var boy1,boy1Img,boy1,boy2Img;

var bushGroup, bushImage;
var treeFroup,treeImage;
var rockGroup,rockImage;

var coinGroup,coinImage;
var starGroup,starImage;

var background,backgrounImg;
//var score=0;

//var gameOver, restart;

function preload(){
    girl1Img=loadImage("sprites/girl2.png");
    girl2Img=loadImage("sprites/girl.jpg");
    boyImg=loadImage("sprites/boy2.png");
    boy2Img=loadImage("sprites/boy.png");
    backgroundImg=loadImage("sprites/bg1.jpg");
    bushImage=loadImage("sprites/bush.png");
    treeImage=loadImage("sprites/obstacle2.jpg");
    rockImage=loadImage("sprites/obstacle.png");
    starImage=loadImage("sprites/star.jpg");
    coinImage=loadImage("sprites/coin.jpg");
}
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
}
function draw(){
    background(backgroundImg);

    text("Score: "+ score, 500,50);

    if (ground.y < 0){
        ground.y = ground.height/2;
      }
    
}
/*function spwanTrees(){
    if (frameCount % 60 === 0) {
        var tree = createSprite(600,120,40,10);
        tree.y = Math.round(random(80,120));
        tree.addImage(treeImage);
        tree.scale = 0.5;
        tree.velocityX = -3;
        
         //assign lifetime to the variable
        tree.lifetime = 200;
        
        //adjust the depth
        tree.depth = trex.depth;
        boy2.depth = boy2.depth + 1;
        
        //add each cloud to the group
        treesGroup.add(tree);
      }
}*/
/*function spwanBush(){

}
function spwanRock(){

}
function spwanCoin(){

}
function spwanStar(){
    
}*/