class Polygon{
    constructor(x, y, radius, options){
    var options = {
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.2,
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.height=40;
        
        this.image = loadImage("Images/hexagon-geometrical-shape-outline_318-48664.jpg");
        this.body = Bodies.circle(x,y,radius, options);
    
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
       // ellipse(pos.x, pos.y, this.radius, this.height);
        image(this.image, this.x, this.y, this.radius, this.height);
        pop();
          
    
      }
    };
    
    
    
    