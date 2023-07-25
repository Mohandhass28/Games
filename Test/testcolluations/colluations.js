let element = document.querySelector(".box1")
let element2 = document.querySelector(".box2")

document.addEventListener('mousemove',(e)=>{
    pos_x = e.clientX - 20
    pos_y = e.clientY - 20

    fbox1 = element.getBoundingClientRect()
    fbox2 = element2.getBoundingClientRect()

    
    if (
        e.clientX >= fbox1.left &&
        e.clientY >= fbox1.top &&
        e.clientX <= fbox1.right &&
        e.clientY <= fbox1.bottom
    ){
        element.classList.add('action')
        console.log(fbox1.left)
        }
    else{
        element.classList.remove('action')
    }

})