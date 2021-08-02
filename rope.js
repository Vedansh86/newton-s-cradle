class rope{
	constructor(body1,body2, width , height){
		this.width=width
		this.height=height
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.width, y:this.height}
		}
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display(){
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.width
		var Anchor2Y=pointB.y+this.height

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}
}