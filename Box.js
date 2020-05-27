class Box extends BaseClass {
  constructor(x, y){
    super(x,y,25 ,50);
    
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(255);
    strokeWeight(0);
    rect(0 , 0 ,25 , 50);
    pop();
  }

};
