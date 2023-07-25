/**@type{HTMLCanvasElement} */
const canvas = document.getElementById('canvasl')
const ctx = canvas.getContext('2d')
const pos = canvas.getBoundingClientRect()
const canvas_width = canvas.width = 700
const canvas_height = canvas.height = 700

const count = 1520
let partical_arr = []

mouse = {
    x : undefined,
    y : undefined,
    radius:120
}

const event = canvas.addEventListener('mousemove',(e)=>{
    mouse.x = e.x - pos.x
    mouse.y = e.y - pos.y
})




class partical {
    constructor(size=3,color='red' ,x=Math.random()*canvas_width,y=Math.random()*canvas_height){
        this.x = x
        this.y = y
        this.basex = this.x
        this.basey = this.y
        this.size = size
        this.color = color
        this.forcex = null
        this.forcey = null
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
    update(){
        let dx = mouse.x - this.x 
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        this.forcex = dx / 55 
        this.forcey = dy / 55 
        console.log(this.forcex, this.forcey, distance)

        if (distance < mouse.radius){
            this.x -= this.forcex 
            this.y -= this.forcey
            
        }
        else{
            
            if(this.x !== this.basex) {
                let x = this.x - this.basex
                this.x -= x / 10
            }
            if(this.y !== this.basey){
                let y = this.y - this.basey
                this.y -= y / 10
            }
        }

        
    }
}

for(let i = 0; i < count; i++){
    partical_arr.push(new partical())
}

let draw_partical = () => {
    partical_arr.forEach((ob)=>{
        ob.draw()
        ob.update()
    })
}




let animation = () => {
    ctx.clearRect(0,0,canvas_width, canvas_height)
    draw_partical()
    // mouse.x = undefined
    // mouse.y = undefined
    requestAnimationFrame(animation)    
}
animation()