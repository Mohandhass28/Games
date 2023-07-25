/**@type{HTMLCanvasElement} */
const canvas = document.getElementById('canvasl')
const ctx = canvas.getContext('2d')
const canvas_height = canvas.height = 600
const canvas_width = canvas.width = 600

let x = 0
const fun = () => {
    ctx.clearRect(0 , 0, canvas_width, canvas_height)
    ctx.fillRect(x, 0, 100, 100)
    x++
    requestAnimationFrame(fun)
}

fun()