const canvas = document.getElementById('canvasl');
const ctx = canvas.getContext('2d');
const speed = 10

class layer{
    constructor(image, modifedspeed, canvas_height, canvas_width){
    this.x = 0;
    this.y = 0  ;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.modspeed = modifedspeed;
    this.speed = speed * this.modspeed;
    this.image = image
    this.canvas_height = canvas_height
    this.canvas_width = canvas_width
    }
    updata(){
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed
        }
        this.x = this.x - this.speed
        this.x2 = this.x2 - this.speed
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
        ctx.drawImage(this.image,this.x2,this.y,this.width, this.height)
    }
}

export default layer