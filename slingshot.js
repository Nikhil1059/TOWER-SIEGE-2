class Slingshot{
    constructor(vbodyA,vpointB){
        var options={
            bodyA:vbodyA,
            pointB:vpointB,
            thickness:30,
            length:30
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot)
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    attach(body){
        this.slingshot.bodyA=body;
    }
    display(){
        if(this.slingshot.bodyA){
        var posA=this.slingshot.bodyA.position;
        var posB=this.slingshot.pointB;
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}