class Bird extends BaseClass{
    constructor(x,y){ //properties are mentioned inside constructor. always use this.
       super(x,y,50,50);
      this.image = loadImage("sprites/bird.png")
    }

    //functions of the Class
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        super.display(); //over riding function display  of the base class
    }
}