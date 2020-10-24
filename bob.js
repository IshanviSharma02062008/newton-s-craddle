class Bob {
    constructor(x, y, radius) {
      var options = {
        isStatic : false,
          'restitution':0.5,
          'friction':0.2,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      // this.width = width;
      // this.height = height;
      this.radius = radius; 
  
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill(0);
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
  };