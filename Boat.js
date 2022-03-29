class Boat{
    constructor(x,y,w,h,boatPos){
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.boatPosition = boatPos;
        this.image = loadImage("./assets/boat.png");
        World.add(world, this.body);
    }

    remove(){
        
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.w, this.h);

        pop();
    }
}