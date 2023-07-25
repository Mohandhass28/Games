/**@type{HTMLCanvasElement} */
const canvas = document.getElementById('canvasl')
const ctx = canvas.getContext('2d')
const praticalCount = 1
const canvas_height = canvas.height = 700
const canvas_width = canvas.width = 700
let canvaspos = canvas.getBoundingClientRect()
let partica = []



class partical{
    constructor(x,y){
        this.x = x
        this.y = y
        // this.speedx = Math.random() * 20 - 10
        // this.speedy = Math.random() * 20 - 10
        this.speedx = 3
        this.speedy = 3
        // this.size = Math.random() * 10 + 5
        this.size = 10
        this.radius = this.size
    }
    update(){
        this.x += this.speedx
        this.y += this.speedy
        // this.size -= 0.1
        if(this.x < 0 || this.x > canvas_width){
            this.speedx = this.speedx * - 1
        }
        if (this.y < 0 || this.y > canvas_height){
            this.speedy = this.speedy * - 1
        }
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
    }
}


const mouse = canvas.addEventListener('click',(e)=>{
    let xpos = (e.x - canvaspos.left) 
    let ypos = (e.y - canvaspos.top)
    for(let i = 0; i < praticalCount; i++){
        partica.push(new partical(xpos, ypos))
    }
})

// const mouses = canvas.addEventListener("mousemove",(e)=>{
//     let xpos = (e.x - canvaspos.left) 
//     let ypos = (e.y - canvaspos.top)
//     for(let i = 0; i < praticalCount; i++){
//         partica.push(new partical(xpos, ypos))

//     }
// })



const draw_obj = () =>{
    for(let i = 0; i < partica.length; i++){
        partica[i].update()
        partica[i].draw()
        for(let j = 0; j < partica.length; j++){
            let dx = partica[i].x - partica[j].x
            let dy = partica[i].y - partica[j].y
            let distance = Math.sqrt(dx * dx + dy * dy)
            if (distance <= 150){
                ctx.beginPath()
                ctx.strokeStyle = 'red'
                ctx.moveTo(partica[i].x, partica[i].y)
                ctx.lineTo(partica[j].x, partica[j].y)
                ctx.stroke()
            }
            const totalradius = partica[i].radius + partica[j].radius
            if(totalradius <= distance){
                partica[i].speedx *= -1
                partica[i].speedy *= -1 
                partica[j].speedx *= -1
                partica[j].speedy *= -1
            }

        }
        if(partica[i].size < 0.1){
            partica.splice(i,1)
            i--
        }
    }
}



const animation = () => {
    ctx.clearRect(0,0,canvas_width, canvas_height)
    draw_obj()    
    requestAnimationFrame(animation)
}

animation()
