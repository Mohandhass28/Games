export const states = {
    STANDING_LEFT : 0,
    STANDING_RIGHT : 1,
    SITTING_RSTATE : 2,
    SITTING_LSTATE : 3,
    RUNNING_RIGHT : 4,
    RUNNING_LEFT : 5,
    JUMP_LEFT : 6,
    JUMP_RIGHT : 7,
    JUMP_LEFTFALL : 8,
    JUMP_RIGHTFALL : 9,
    ROLL : 10,
}

class state {
    constructor(state){
        this.state = state
    }   
}

class StandingLeft extends state{
    constructor(player){
        super("STANDING_LEFT")
        this.player = player
    }
    enter(){
        
        this.player.freamy = 1
        this.player.speed = 0
        this.player.maxfream = 6
    }
    handleinput(input, arr=[]){
        this.player.background.speed = 0
        if(arr.includes('PRESS d')){
            this.player.setState(states.STANDING_RIGHT)
        }
        else if (arr.includes('PRESS s')){
            this.player.setState(states.SITTING_LSTATE)
        }
        else if(arr.includes('PRESS a')){
            this.player.setState(states.RUNNING_LEFT)
        }
        else if(arr.includes('PRESS w')){
            this.player.setState(states.JUMP_LEFT)
        }
    }

}

class StandingRight extends state{
    constructor(player){
        super("STANDING_RIGHT")
        this.player = player
    }
    enter(){
        this.player.freamy = 0
        this.player.speed = 0 
        this.player.maxfream = 6
    }
    handleinput(input, arr=[]){
        this.player.background.speed = 0
        if(arr.includes('PRESS a')){
            this.player.setState(states.STANDING_LEFT)
        }
        else if (arr.includes('PRESS s')){
            this.player.setState(states.SITTING_RSTATE)
        }
        else if(arr.includes('PRESS d')){
            this.player.setState(states.RUNNING_RIGHT)
            this.player.background.speed = 10
        }
        else if(arr.includes('PRESS w')){
            this.player.setState(states.JUMP_RIGHT)
            this.player.background.speed = 12
        }
        else if(arr.includes('PRESS e')){
            this.player.setState(states.ROLL)
            this.player.background.speed = 10
        }

    }
    

}

class SittingRState extends state{
    constructor(player){
        super("SITTING_RIGHT_STATE")
        this.player = player
    }
    enter(){
        this.player.freamy = 8
        this.player.maxfream = 4
    }
    handleinput(input, arr=[]){
        if(input === 'RELEASE s' && this.player.currentState.state === this.state){
            this.player.setState(states.STANDING_RIGHT)
        }
    }

}


class SittingLState extends state{
    constructor(player){
        super("SITTING_LEFT_STATE")
        this.player = player
    }
    enter(){
        this.player.freamy = 9
        this.player.maxfream = 4
    }
    handleinput(input, arr=[]){
        if(input === 'RELEASE s' && this.player.currentState.state === this.state){
            this.player.setState(states.STANDING_LEFT)
        }
    }

}




class RunningRight extends state{
    constructor(player){
        super("RUNNING_RIGHT")
        this.player = player
    }
    enter(){
        this.player.freamy = 6
        this.player.speed = this.player.maxspeed
        this.player.maxfream = 8
    }
    handleinput(input, arr=[]){
        if(input === 'RELEASE d'){
            this.player.setState(states.STANDING_RIGHT)
            this.player.background.speed = 0
        }
        else if(input === 'RELEASE a'){
            this.player.setState(states.STANDING_LEFT)
            this.player.background.speed = 0
        }
        else if(arr.includes('PRESS w')){
            this.player.setState(states.JUMP_RIGHT)
            this.player.background.speed = 12
        }
        else if(arr.includes('PRESS w')){
            this.player.setState(states.JUMP_RIGHT)
            this.player.background.speed = 12
        }
        else if(arr.includes('PRESS e')){
            this.player.setState(states.ROLL)
            this.player.background.speed = 10
        }
    }

}




class RunningLeft extends state{
    constructor(player){
        super("RUNNING_LEFT")
        this.player = player
    }
    enter(){
        this.player.freamy = 7
        this.player.speed = -this.player.maxspeed 
        this.player.maxfream = 8
    }
    handleinput(input, arr=[]){
        if(input === 'RELEASE a'){
            this.player.setState(states.STANDING_LEFT)
        }
        else if(input === 'RELEASE d'){
            this.player.setState(states.STANDING_RIGHT)
        }
        else if(arr.includes('PRESS w')){
            this.player.setState(states.JUMP_LEFT)
        }
        
    }

}



class JumpLeft extends state{
    constructor(player){
        super("JUMP_LEFT")
        this.player = player
    }
    enter(){
        this.player.freamy = 3
        if(this.player.onGround()){
        this.player.vs = -50
        this.player.speed = - this.player.maxspeed * 0.8 
        }
        this.player.maxfream = 6
    }
    handleinput(input, arr=[]){
        if(input === 'RELEASE w' && this.player.onGround() && this.player.currentState.state === this.state){
            this.player.setState(states.STANDING_LEFT)
            
        }
        else if(input === 'PRESS d' && this.player.onGround() && this.player.currentState.state === this.state){
            
            this.player.setState(states.RUNNING_RIGHT)
            
        }
        else if (this.player.vs > 0)this.player.setState(states.JUMP_LEFTFALL)
    
        
    }

}


class JumpRight extends state{
    constructor(player){
        super("JUMP_RIGHT")
        this.player = player
    }
    enter(){
        this.player.freamy = 2
        if(this.player.onGround()){
            this.player.vs = -50
            this.player.speed = this.player.maxspeed * 0.5 + 5
        }
        this.player.maxfream = 6
    }
    handleinput(input,arr=[]){

        if(input === 'RELEASE w' && this.player.onGround() && this.player.currentState.state === this.state){
            
            this.player.setState(states.STANDING_RIGHT)
            
        }
        else if (this.player.vs > 0)this.player.setState(states.JUMP_RIGHTFALL)

        else if(arr.includes('PRESS e')){
            this.player.setState(states.ROLL)
            this.player.background.speed = 10
        }

        
        
    }

}



class JumpLiftFall extends state{
    constructor(player){
        super("JUMP_RIGHTFall")
        this.player = player
    }
    enter(){
        this.player.freamy = 4
        this.player.maxfream = 6
    }
    handleinput(input,arr=[]){
        if(this.player.onGround()){
            this.player.setState(states.STANDING_RIGHT)
        }
        else if(arr.includes('PRESS e')){
            this.player.setState(states.ROLL)
            this.player.background.speed = 30
        }
    }
}

class JumpRightFall extends state{
    constructor(player){
        super("JUMP_RIGHTall")
        this.player = player
    }
    enter(){
        this.player.freamy = 5
        this.player.maxfream = 6
    }
    handleinput(input,arr=[]){
        if(this.player.onGround()){
            this.player.setState(states.STANDING_LEFT)
        }
        else if(arr.includes('PRESS e')){
            this.player.setState(states.ROLL)
            this.player.background.speed = 10
        }
        else if(arr.includes('PRESS e')){
            this.player.setState(states.ROLL)
            this.player.background.speed = 10
        }
    }
}



class Roll extends state{
    constructor(player){
        super("ROLL")
        this.player = player
    }
    enter(){
        this.player.freamy = 10
        this.player.maxfream = 6
        this.player.speed = this.player.maxspeed
    }
    handleinput(input,arr=[]){
        if(input === 'RELEASE e'){
            this.player.setState(states.STANDING_RIGHT)
        }
        else if(arr.includes('PRESS w') && this.player.onGround()){
            this.player.setState(states.JUMP_RIGHT)
            this.player.background.speed = 12
        }
}
}








export { StandingLeft, StandingRight, SittingRState, SittingLState, RunningLeft, 
    RunningRight,JumpRight,JumpLeft,JumpLiftFall,JumpRightFall,Roll }