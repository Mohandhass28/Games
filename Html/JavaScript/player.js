import { input } from './inputHandler.js'
import { StandingRight, StandingLeft,SittingRState,SittingLState,RunningLeft,
    RunningRight,JumpLeft,JumpRight,JumpLiftFall,JumpRightFall,Roll } from './state.js'

export default class player {
    constructor(gamewidth, gameheight,background) {
        this.gameheight = gameheight
        this.gamewidth = gamewidth
        this.state = [new StandingLeft(this), new StandingRight(this), new SittingRState(this), 
            new SittingLState(this), new RunningRight(this), new RunningLeft(this),
            new JumpLeft(this), new JumpRight(this), new JumpRightFall(this), new JumpLiftFall(this), 
            new Roll(this)]

        this.currentState = this.state[1]
        this.image = document.getElementById('img')
        this.width = 200
        this.height = 181.83
        this.x = this.gamewidth / 2 - this.width / 2
        this.y = this.gameheight - this.height
        this.freamx = 0
        this.freamy = 0
        this.speed = 0
        this.maxspeed = 19
        this.vs = 0
        this.weight = 2
        this.maxfream = 6
        this.fream = 0
        this.background = background
        this.playerWidth = this.width - 50
        this.playerHeight = this.height
        this.gameover = false
    }
    draw(ctx) {
        const pos = Math.round((this.fream/4) % this.maxfream)
        this.freamx = pos
        ctx.drawImage(this.image, this.width * this.freamx, this.height * this.freamy, this.width, this.height,
            this.x, this.y, this.height-30, this.width-30);
        ctx.fillStyle='black';
        // ctx.strokeRect(this.x, this.y, this.playerWidth, this.playerHeight);
        

    }

    update(val, arr=[]) {
        // console.log(val)
        this.fream ++
        this.currentState.handleinput(val, arr)
        this.x += this.speed
        if (this.x <= 0) this.x = 0
        else if (this.x >= this.gamewidth - this.width-450) this.x = this.gamewidth - this.width-450

        this.y += this.vs
        if(!this.onGround()){
            this.vs += this.weight
        }
        else{
            this.vs = 0
        }
    }

    setState(stat) {
        this.currentState = this.state[stat]
        this.currentState.enter()
    }
    onGround(){
        return this.y >= this.gameheight - this.height - 30 
    }

}