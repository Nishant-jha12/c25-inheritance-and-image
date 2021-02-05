class Log extends BaseClass{
    constructor(x,y,height,angle){ //properties are mentioned inside constructor
        super(x,y,20,height,angle)
        Matter.Body.setAngle(this.body, angle)
        this.image = loadImage("sprites/wood2.png")
    }

    
}