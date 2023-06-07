const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world,box1,box2,log,render;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    render= Render.create({
        element : document.body,
        engine : engine,
        options: {width : 600, height:600},
    
    })
    box1 = new Box(200,0,70,70);
    box2 = new Box(250,100,50,80);
    ground = new Ground(200,height-20,600,20)
    
    log=new Box(100,100,100,20)
    //angleMode(DEGREES)
    Matter.Body.setAngle(log.body,40)
}

function draw(){
    background(0);
    Engine.update(engine);
    Render.run(render)
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    log.display()
    ground.display();
   
    

}
function mouseDragged(){
    Matter.Body.setPosition(log.body, {x: mouseX , y: mouseY});
}