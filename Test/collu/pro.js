/**@type{HTMLCanvasElement} */

import distroy from '../newanimation/anmiation.js'

const canvas = document.getElementById('canvasl')
const ctx = canvas.getContext('2d')

const canvas_height = canvas.height = 700
const canvas_width = canvas.width = 700

const image_width = 200
const Image_height = 179

let newimage = new Image()
newimage.src = 'boom.png'

const OB = [] 

let bodyelement = document.querySelector('#canvasl')
let canvaspos = bodyelement.getBoundingClientRect()

bodyelement.addEventListener("click", (e)=>{
    
    let xpos = (e.x - canvaspos.left) - 50
    let ypos = (e.y - canvaspos.top) - 50
    OB.push(new distroy(newimage,image_width,Image_height, canvas_height, 
        canvas_width, xpos, ypos))
})

console.log(OB)
const fun = () =>{
    requestAnimationFrame(fun)
    ctx.clearRect(0,0,canvas_width, canvas_height)
    OB.forEach((o,index)=>{
        o.update()
        o.draw(ctx)
        if(o.fream >= 75){
            OB.splice(index, 1)
        }
    })

}

fun()