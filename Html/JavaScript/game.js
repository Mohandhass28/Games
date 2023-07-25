/**@type{HTMLCanvasElement} */
import player from "./player.js"
import { input, Test } from "./inputHandler.js"
import { BackGround } from "./Background.js"
import { enemies, } from "./enemies.js"
import { distroy } from "./collutation.js"

window.addEventListener('load', () => {

    const boom_list = []
    const loading = document.querySelector('.loading_screen')
    loading.style.display = 'none'
    const canvas = document.getElementById('root')
    const ctx = canvas.getContext('2d')
    const img = document.getElementById('imgr')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const Background = new BackGround(img, window.innerWidth, window.innerHeight)
    const game_player = new player(canvas.width, canvas.height, Background)
    const enemiesimg = document.getElementById('ene')
    const inputs = new input()
    const EnemiesList = [new enemies(enemiesimg, window.innerHeight, window.innerWidth, game_player)]
    const Test_input = new Test()
    const boom = document.getElementById('boo')
    let gameovero = false
    let fream = 0
    const animat = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Background.draw(ctx)
        Background.update()
        game_player.draw(ctx)
        game_player.update(Test_input.lastpress, Test_input.lastKey)

        EnemiesList.forEach((o, index) => {
            o.draw(ctx)
            o.updata()
            if (o.x > window.innerWidth + 1000 || o.x < -1000 || o.y > window.innerHeight + 1000 || o.y < -1000) {
                EnemiesList.splice(index, 1)
                EnemiesList.push(new enemies(enemiesimg, window.innerHeight, window.innerWidth, game_player))
            }
        })

        EnemiesList.forEach((o, index) => {
            const dx = game_player.x - (o.x) + 35
            const dy = game_player.y - (o.y) + 35
            const pypotinuse = Math.sqrt(dx * dx + dy * dy)
            let distancs = (game_player.playerWidth) / 2 + (o.width) / 2
            if (distancs >= pypotinuse && game_player.currentState.state == 'ROLL' && !o.collide) {
                o.collide = true
                EnemiesList.splice(index, 1)
                boom_list.push(new distroy(boom, o.x, o.y))
            }
            else if (distancs >= pypotinuse && !(game_player.currentState.state === 'ROLL') && !o.collide) {
                game_player.gameover = true
            }
        })

        if (!(!boom_list.length)) {
            boom_list.forEach((p, index) => {
                p.update(p.x - Background.speed, p.y)
                p.draw(ctx)
                if(p.fream > 30){
                boom_list.splice(index ,1)
                }
            })
        }
        if (!(fream % 60)) {
            EnemiesList.push(new enemies(enemiesimg, window.innerHeight, window.innerWidth, game_player))
        }
        console.log()

        if (!game_player.gameover) {
            requestAnimationFrame(animat)
        }
        fream++
    }
    animat()


})

