class Drops{
    constructor(x,y){
        var options={
            friction:0.1,
            restitution:0.2,
            density:1
        }  
        this.body=Bodies.circle(x,y,5,options);  
        this.x=x;
        this.y=y;
        this.radius=5;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    updateDrops(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
    }
}