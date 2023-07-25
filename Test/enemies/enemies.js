/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('enemies');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

let delay = 0;
const count = 10;
let obj = [];
obhectforimage = new Image();
obhectforimage.src = 'enemy1.png';

class enemies {
    constructor(img, x = Math.random() * CANVAS_WIDTH, y = Math.random() * CANVAS_HEIGHT) {
        this.x = x
        this.y = y
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
        this.image = img;
        this.imgwidth = 293;
        this.imgheight = 155;
        this.fream = 0;
    }
    updata() {
        this.x += Math.random() * 2 - 1;
        this.y += Math.random() * 2 - 1;
        if (delay % 2 == 0) {
            this.fream > 4 ? this.fream = 0 : this.fream++;
        }
    }
    draw() {
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.fream * this.imgwidth, 0, this.imgwidth,
            this.imgheight, this.x, this.y, this.height, this.width);
    }
}

for (let i = 0; i <= count; i++) {
    obj.push(new enemies(obhectforimage));
}
const fun = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    obj.forEach((o) => {
        o.updata();
        o.draw();
    });

    delay++
    requestAnimationFrame(fun);
}

fun();