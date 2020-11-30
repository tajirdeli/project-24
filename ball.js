class BALL{
constructor(){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(20,600,30,options)
this.x=20
this.y=600
this.radius=30
World.add(world,this.body)}
display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
   fill ("purple")
    ellipse(0,0,this.radius,this.radius)
    pop();

    
    }
}




