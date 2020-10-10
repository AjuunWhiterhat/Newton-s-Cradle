class Ball{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            density:1.2,
            friction:1,
            frictionStatic:0.5,
            frictionAir:0.01,
            restitution:0.8,
            
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world,this.body);
        console.log(this.body);

    }

    display(){
        var pos = this.body.position
        push();
        fill(255, 0, 254);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}