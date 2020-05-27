class Polygon{
    constructor(x , y , sides , radius){
        var options = {
            restitution : 0.8,
            friction:1,
            density:0.6

        }
        

        this.body = Bodies.polygon(x , y, sides , radius , options);
        this.image = loadImage("hexagonal-diamond.png" );
        this.radius = radius;
        Matter.Body.setStatic(this.body , true);
         World.add(world , this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image , 0 , 0 , this.radius*2 ,  this.radius*2);
        pop();
    }
}