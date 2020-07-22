class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(batman,200,400,400,400);
        
    }
}