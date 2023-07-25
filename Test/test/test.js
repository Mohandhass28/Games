/**@type{HTMLCanvasElement} */
const canvas = document.getElementById('root')
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth


const animat = () =>{
    
    requestAnimationFrame(animat)
}

animat()