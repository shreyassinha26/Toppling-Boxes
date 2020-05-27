class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        console.log(options);
        this.chain = Constraint.create(options);
        
        
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA != null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            

            strokeWeight(4);
            stroke(48 , 22 , 8);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            
            if( pointA.x >= 300){
                this.chain.bodyA = null;
            }
            
        }
        
        
        
        
    }
    setA(bodyA){
        this.chain.bodyA = bodyA;
    }
    
    
}
