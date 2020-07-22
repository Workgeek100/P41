const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter. Bodies;

var engine, world;
var batman, rain, umbrella, thunder;
var rainDrops = [];
var maxDrops = 50;
var drops = [];
var thunderFrame=0;
var rand;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
    batman = loadImage("batman.png");
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");
    thunder3 = loadImage("thunder3.png");
    thunder4 = loadImage("thunder4.png");
}

function setup(){
   canvas = createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;
   
   
   umbrella = new Umbrella(200,400);

   if(frameCount % 50===0){
       for(var i=0; i<maxDrops; i++){
           drops.push(new Drops(random(0,400),random(0,400)));
       }
   }
}

function draw(){
    background(0);
    //creating thunder
    rand=Math.round(random(1,4));
    if(frameCount%100===0){
        thunderFrame=frameCount;
        thunder = createSprite(random(10,380),random(0,100),20,100);
        switch(rand){
           case 1: thunder.addImage(thunder1);
           break;
           case 2: thunder.addImage(thunder2);
           break
           case 3: thunder.addImage(thunder3);
           break
           case 4: thunder.addImage(thunder4);
           break
           default: break
        }
        thunder.scale = random(1,5,1.8);
    }
     
    if(thunderFrame+5===frameCount && thunder){
        thunder.destroy();
    }
    Engine.update(engine);
    umbrella.display();
    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].updateDrops();
    }
    drawSprites();
}   

