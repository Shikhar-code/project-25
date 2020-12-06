class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("paper.png");
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("blue");
    var pos = this.body.position;
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);
   }
}
