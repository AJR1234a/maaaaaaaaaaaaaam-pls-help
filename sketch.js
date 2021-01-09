const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11
//var gameState = "onSling";

//var score = 0;
var backgroundImg,background2Img,background3Img,background4Img,background5Img,background6Img;
var background1;
function preload() {
    image1=loadImage("IMAGE1.png");
    image2=loadImage("IMAGE2.png");
    image3=loadImage("IMAGE3.png");
    image4=loadImage("IMAGE4.png");
    image5=loadImage("IMAGE5.png");
    image6=loadImage("IMAGE6.png");
    image7=loadImage("IMAGE7.png");
    image8=loadImage("IMAGE8.png");
    image9=loadImage("IMAGE9.png");
    image10=loadImage("IMAGE10.png");
    image11=loadImage("IMAGE11.png");
    backgroundImg=loadImage("background.jpg");
    background2Img=loadImage("background2.jpg");
    background3Img=loadImage("background3.jpg");
    background4Img=loadImage("background4.jpg");
    background5Img=loadImage("background5.jpg");
    background6Img=loadImage("background6.jpg");
    

}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    background1=createSprite(400,400);
    background1.addImage("background",backgroundImg);
    background1.scale=2;
    background2=createSprite(400,400);
    background2.addImage("background2",backgroundImg);
    background2.scale=2;
   }

function draw(){
        background(0);
    
       
    
    Engine.update(engine);
    //background1.velocityY= 2;
     
    if (keyDown(UP_ARROW)){
        background1.scale=background1.scale+0.2;
    }
    if (keyDown(DOWN_ARROW)){
        background1.scale=background1.scale-0.2;
    }
    if (background1.scale=1){
     background1=background2
     
    }
    
drawSprites();

 
   }

