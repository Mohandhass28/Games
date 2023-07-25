import player from '../../dog/life.js'
import layer from '../../background/background.js';
/**@type{HTMLCanvasElement} */


window.addEventListener('load', () => {

    const canvas = document.getElementById("canvasl");
    const ctx = canvas.getContext("2d");

    const canvas_width = canvas.width = 600;
    const canvas_height = canvas.height = 600;

    const playerimage = document.getElementById('player')

    let newplayer = new player(playerimage, 575, 523, 100, 100)


    let playerstate = 'idle'

    let dropdown = document.querySelector('body')
    dropdown.addEventListener('keypress', (state) => {
        switch (state.key) {
            case ' ':
                playerstate = 'jump'
                break;
            case 'w':
                playerstate = 'run'
                break;
            case 'd':
                playerstate = 'sit'
                break;
            case 's':
                playerstate = 'roll'
                break;
            case 'a':
                playerstate = 'dizzy'
                break;
            case 'e':
                playerstate = 'bit'
                break;
            case 'q':
                playerstate = 'ko'
                break;
            case 'p':
                playerstate = 'gethit'
                break;
        }
        if (playerstate === 'jump') {
            setTimeout(() => {
                playerstate = 'idle'
            }, 700)
        }
    });

    const background_img1 = document.getElementById('img1');
    const background_img2 = document.getElementById('img2');
    const background_img3 = document.getElementById('img3');
    const background_img4 = document.getElementById('img4');
    const background_img5 = document.getElementById('img5');

    let layer1 = new layer(background_img1, 0.5, canvas_height, canvas_width);
    let layer2 = new layer(background_img2, 0.9, canvas_height, canvas_width);
    let layer3 = new layer(background_img3, 1.3, canvas_height, canvas_width);
    let layer4 = new layer(background_img4, 1.7, canvas_height, canvas_width);
    let layer5 = new layer(background_img5, 0.7, canvas_height, canvas_width);

    const layerlist = [layer1, layer2, layer3, layer4, layer5];

    const fun = () => {
        console.log(layerlist)
        layerlist.forEach((obj) => {
            obj.updata();
            obj.draw(ctx);

        })
        newplayer.update(playerstate)
        newplayer.drew(ctx)
        

        requestAnimationFrame(fun);
    };

    fun();

})