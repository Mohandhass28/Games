/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvasl')
const ctx = canvas.getContext('2d')

class distroy{
    constructor(image, Image_width, Image_height, CANVAS_HEIGHT=700, CANVAS_WIDTH=700, x=Math.random()*500, y=Math.random()*500,sizex=100,sizey=100 ){
        this.x = Math.round(x)
        this.y = Math.round(y)
        this.image= image
        this.CANVAS_HEIGHT = CANVAS_HEIGHT
        this.CANVAS_WIDTH = CANVAS_WIDTH
        this.Image_height = Image_height
        this.Image_width = Image_width
        this.fream = 0
        this.delay = 15
        this.pos = 0
        this.sizex = sizex
        this.sizey = sizey
    }
    update(){
        this.pos = Math.floor(this.fream/this.delay) % 5
        this.fream ++
    }
    draw(){
        // ctx.clearRect(0, 0, this.CANVAS_HEIGHT, this.CANVAS_WIDTH)
        ctx.drawImage(this.image, this.Image_width*this.pos, 0,
            this.Image_width, this.Image_height, this.x, this.y, this.sizex, this.sizey)
    }
}   


export default distroy