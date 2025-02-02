class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 15
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA!==null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
        
    }
    
}