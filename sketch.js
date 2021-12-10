var bgImg;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img,zombie5Img,sheriffImg,daggerImg;
var dagger,sheriff;
var zombie1group;
var zombie2group;
var zombie3group;var zombie4group;var zombie5group;


function preload(){
    bgImg = loadImage("background.jpg");
    zombie1Img = loadImage("zombie1.png");
    zombie2Img = loadImage("zombie2.png");
    zombie3Img = loadImage("zombie3.png");
    zombie4Img = loadImage("zombie4.png");
    zombie5Img = loadImage("zombie5.png");
    sheriffImg = loadImage("sheriff.png");
    daggerImg  = loadImage("dagger.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    var sheriff = createSprite(775,600);
    sheriff.addImage(sheriffImg);
    sheriff.scale = 0.1;
    var dagger = createSprite(775,600);
    dagger.addImage(daggerImg);
    dagger.scale = 0.25;
    dagger.velocityX = -4;
zombie1Group = createGroup();
zombie2Group = createGroup();
zombie3Group = createGroup();
zombie4Group = createGroup();
zombie5Group = createGroup();

}
function draw(){
    background(bgImg);

  
    zombie1();
    zombie2();
    zombie3();
    zombie4();
    zombie5();


    drawSprites();
}

function zombie1(){
 if (frameCount % 150 === 0){
    var zombie = createSprite(1400,Math.round(random(600,650)),100,100);
    zombie.velocityX = -2;
     zombie.scale = 0.25;
    
     zombie.addImage(zombie1Img);
     zombie1Group.add(zombie);
  }
}
function zombie2(){
    if (frameCount % 130 === 0){
       var zombie2 = createSprite(200,Math.round(random(600,650)),100,100);
       zombie2.velocityX = 2;
        zombie2.scale = 0.25;
       
        zombie2.addImage(zombie2Img);
        zombie2Group.add(zombie2);
     }
   }
   function zombie3(){
    if (frameCount % 140 === 0){
       var zombie3 = createSprite(1500,Math.round(random(600,650)),100,100);
       zombie3.velocityX = -2;
        zombie3.scale = 0.25;
       
        zombie3.addImage(zombie3Img);
        zombie3Group.add(zombie3);
     }
   }
   function zombie4(){
    if (frameCount % 130 === 0){
       var zombie4 = createSprite(100,Math.round(random(600,650)),100,100);
       zombie4.velocityX = 2;
        zombie4.scale = 0.25;
       
        zombie4.addImage(zombie4Img);
        zombie4Group.add(zombie4);
     }
   }
   function zombie5(){
    if (frameCount % 160 === 0){
       var zombie5 = createSprite(1300,Math.round(random(600,650)),100,100);
       zombie5.velocityX = -5;
        zombie5.scale = 0.25;
       
        zombie5.addImage(zombie5Img);
        zombie5Group.add(zombie5);
     }
   }
   
