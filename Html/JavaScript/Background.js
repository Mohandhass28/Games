export class BackGround{
    constructor(image,gamewidth,gameheight,speed=0){
        this.gamewidth = gamewidth
        this.gameheight = gameheight
        this.width = 2400
        this.height = 720
        this.x = 0
        this.y = 0
        this.x2 = 2400
        this.image = image
        this.speed = speed
    }
    update(){
        this.x -= this.speed
        this.x2 -= this.speed
        if(this.x <= -this.width){
            this.x = this.width - this.speed + this.x2
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width - this.speed + this.x
        }
        

    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height+100)
        context.drawImage(this.image, this.x2, this.y, this.width, this.height+100)
        
        
    }
}
