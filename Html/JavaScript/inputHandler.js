export class input{
    constructor(){
        this.lastKey = ''
        window.addEventListener('keydown', (e)=>{ 
            switch(e.key){
                case ' ':
                    this.lastKey = 'PRESS Space'
                    break;
                case 'w':
                    this.lastKey = 'PRESS w'
                    break
                case 'a':
                    this.lastKey = 'PRESS a'
                    break
                case 'd':
                    this.lastKey = 'PRESS d'
                    break
                case 's':
                    this.lastKey = 'PRESS s'
                    break
            }
            
        })
        window.addEventListener('keyup', (e)=>{
            switch(e.key){
                case ' ':
                    this.lastKey = 'RELEASE space'
                    break
                case 'w':
                    this.lastKey = 'RELEASE w'
                    break
                case 'a':
                    this.lastKey = 'RELEASE a'
                    break
                case 'd':
                    this.lastKey = 'RELEASE d'
                    break
                case 's':
                    this.lastKey = 'RELEASE s'
                    break
            }   

        })

    }
}





export class Test{
    constructor(){
        this.lastKey = []
        this.lastpress = ''
        window.addEventListener('keydown', (e)=>{ 
            switch(e.key){
                case ' ':
                    if(!this.lastKey.includes('PRESS Space')){
                        this.lastKey.push('PRESS Space')
                    }
                    this.lastpress = 'PRESS Space'
                    break;
                case 'w':
                    if(!this.lastKey.includes('PRESS w')){
                        this.lastKey.push('PRESS w')
                    }
                    this.lastpress = 'PRESS w'
                    break
                case 'a':
                    if(!this.lastKey.includes('PRESS a')){
                        this.lastKey.push('PRESS a')
                    }
                    this.lastpress = 'PRESS a'
                    break
                case 'd':
                    if(!this.lastKey.includes('PRESS d')){
                        this.lastKey.push('PRESS d')
                    }
                    this.lastpress = 'PRESS d'
                    break
                case 's':
                    if(!this.lastKey.includes('PRESS s')){
                        this.lastKey.push('PRESS s')
                    }
                    this.lastpress = 'PRESS s'
                    break
                case 'e':
                    if(!this.lastKey.includes('PRESS e')){
                        this.lastKey.push('PRESS e')
                    }
                    this.lastpress = 'PRESS e'
                    break
            }
            
        })
        window.addEventListener('keyup', (e)=>{
            switch(e.key){
                case ' ':
                    this.lastKey.splice(this.lastKey.indexOf('PRESS Space'), 1)
                    this.lastpress = 'RELEASE space'
                    break
                case 'w':
                    this.lastKey.splice(this.lastKey.indexOf('PRESS w'), 1)
                    this.lastpress = 'RELEASE w'
                    break
                case 'a':
                    this.lastKey.splice(this.lastKey.indexOf('PRESS a'), 1)
                    this.lastpress = 'RELEASE a'
                    break
                case 'd':
                    this.lastKey.splice(this.lastKey.indexOf('PRESS d'), 1)
                    this.lastpress = 'RELEASE d'
                    break
                case 's':
                    this.lastKey.splice(this.lastKey.indexOf('PRESS s'), 1)
                    this.lastpress = 'RELEASE s'
                    break
                case 'e':
                    this.lastKey.splice(this.lastKey.indexOf('PRESS e'), 1)
                    this.lastpress = 'RELEASE e'
                    break
            }   

        })

    }
}