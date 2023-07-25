export class distroy{
    constructor(image, x=0, y=0 ,sizex=80,sizey=80){
        this.x = Math.round(x)
        this.y = Math.round(y)
        this.image= image
        this.Image_height = 179
        this.Image_width = 200
        this.fream = 0
        this.delay = 15
        this.pos = 0
        this.sizex = sizex
        this.sizey = sizey
        this.remove = false
    }
    update(x,y){
        this.x = x
        this.y = y
        this.pos = Math.floor(this.fream/this.delay) % 10
        this.fream ++
    }
    draw(ctx){
        ctx.drawImage(this.image, this.Image_width*this.pos, 0,
            this.Image_width, this.Image_height, this.x, this.y, this.sizex, this.sizey)
    }
}   

