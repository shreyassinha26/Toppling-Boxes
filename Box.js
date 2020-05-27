class Box extends BaseClass {
  constructor(x, y){
    super(x,y,25 ,50);
    this.image = loadImage("hexagon-aerial.jpg");
    this.visibility = 255;
  }
  display(){
    if(this.body.speed<10 ){
      
      push();
      angleMode(RADIANS);
      imageMode(CENTER);
      translate(this.body.position.x , this.body.position.y);
      rotate(this.body.angle);
      //this.visibility = this.visibility - 5;
      //tint(255 , this.visibility);
      image(this.image ,0 , 0  , 25 , 50);
      pop();
      
    }
    else if(this.visibility<0){

    }
    else{
      World.remove(world , this.body);
      push();
      angleMode(RADIANS);
      imageMode(CENTER);
      translate(this.body.position.x , this.body.position.y);
      rotate(this.body.angle);
      this.visibility = this.visibility - 5;
      tint(255 , this.visibility);
      image(this.image , 0 , 0 , 25 , 50);
      pop();

    }
    
    
    
  }

};
