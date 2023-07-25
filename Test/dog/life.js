// const canvas = document.getElementById("canvasl");
// const ctx = canvas.getContext("2d");
// const canvas_width = canvas.width = 600;
// const canvas_height = canvas.height = 600;

// console.log(canvas);

// const playerimage = new Image();

// playerimage.src = 'shadow_dog.png';

// // image width
// img_width_x = 575;
// img_width_y = 523;


// // slow down freams
// let gamefream = 0;
// let strgglefream = 5;

// newlist = []

// creaboj = [
//     {
//         name : 'idle',
//         frame : 7,   
//     },
//     {
//         name : 'jump',
//         frame : 7,
//     },
//     {
//         name:'fale',
//         frame : 7
//     },
//     {
//         name : 'run',
//         frame : 9
//     },
//     {
//         name : 'dizzy',
//         frame : 11
//     },
//     {
//         name : 'sit',
//         frame : 5
//     },
//     {
//         name : 'roll',
//         frame : 7
//     },
//     {
//         name : 'bit',
//         frame : 7
//     },
//     {
//         name : 'ko',
//         frame : 12
//     },
//     {
//         name : 'gethit',
//         frame : 4
//     },
// ]


// creaboj.forEach((state,index) => {
//     let newfra = {
//         lot : [],
//     }
//     for(let i = 0; i < state.frame; i++){
//         let xpos = i * img_width_x
//         let ypos = index * img_width_y
//         newfra.lot.push({x:xpos,y:ypos})
//     }
//     newlist[state.name] = newfra;
// });

// console.log(newlist)




// let playerstate = 'idle'

// let dropdown = document.getElementById('animations')
// dropdown.addEventListener('change',(state)=>{
//     playerstate = state.target.value
// });


// const fun = () => {
//     ctx.clearRect(0,0,canvas_width, canvas_height);

//     let pos = Math.floor(gamefream / strgglefream) % newlist[playerstate].lot.length;
//     let x = img_width_x * pos;
//     let y = newlist[playerstate].lot[pos].y;
//     ctx.drawImage(playerimage ,x ,y ,img_width_x ,img_width_y ,0 ,0 ,canvas_width , canvas_height);
//     gamefream ++;
//     requestAnimationFrame(fun);

// };

// fun();







class player {
    speard_sheet = [
        {
            name: 'idle',
            frame: 7,
        },
        {
            name: 'jump',
            frame: 7,
        },
        {
            name: 'fale',
            frame: 7
        },
        {
            name: 'run',
            frame: 9
        },
        {
            name: 'dizzy',
            frame: 11
        },
        {
            name: 'sit',
            frame: 5
        },
        {
            name: 'roll',
            frame: 7
        },
        {
            name: 'bit',
            frame: 7
        },
        {
            name: 'ko',
            frame: 12
        },
        {
            name: 'gethit',
            frame: 4
        },
    ]
    constructor(image, image_width, image_height, canvas_height, canvas_width) {
        this.x = 0
        this.y = 0
        this.image = image
        this.image_width = image_width
        this.image_height = image_height
        this.canvas_height = canvas_height
        this.canvas_width = canvas_width
        this.player_state = []
        this.creat_playerState()
        this.gamefream = 0
        this.delay = 5
        this.player_state['jump'] = { lot: [...this.player_state['jump'].lot, ...this.player_state['fale'].lot] }
    }

    creat_playerState() {
        this.speard_sheet.forEach((state, index) => {
            let newfra = {
                lot: [],
            }
            for (let i = 0; i < state.frame; i++) {
                let xpos = i * this.image_width
                let ypos = index * this.image_height
                newfra.lot.push({ x: xpos, y: ypos })
            }
            this.player_state[state.name] = newfra;
        });
    }
    update(playerstate) {
        let pos = Math.floor(this.gamefream / this.delay) % this.player_state[playerstate].lot.length;
        this.x = this.player_state[playerstate].lot[pos].x;
        this.y = this.player_state[playerstate].lot[pos].y;
        this.gamefream++
    }
    drew(ctx) {
        ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
        ctx.drawImage(this.image, this.x, this.y, this.image_width, this.image_height, -2, 460, 100, 100);

    }
}

export default player

