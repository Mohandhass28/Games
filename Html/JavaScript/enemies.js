/**@type {HTMLCanvasElement} */
export class enemies {
    constructor(img, gameheight, gamewidth, player) {
        this.gamewidth = gamewidth
        this.gameheight = gameheight
        this.x = this.gamewidth
        this.y = Math.random() * this.gameheight
        this.width = 70;
        this.height = 70;
        this.speed = -3
        this.image = img;
        this.imgwidth = 293;
        this.imgheight = 155;
        this.fream = 0;
        this.delay = 0;
        this.player = player
        this.collide = false
        this.remove = 25
        this.val = 0
    }
    updata() {
        // this.speed = speed  
        this.x += this.speed - this.player.background.speed;
        // this.y += -this.speed;
        if (this.delay % 2 == 0) {
            this.fream > 4 ? this.fream = 0 : this.fream++;
        }
        this.delay ++
    }
    draw(ctx) {
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.fream * this.imgwidth, 0, this.imgwidth,
            this.imgheight, this.x, this.y, this.height, this.width);
    }
}
