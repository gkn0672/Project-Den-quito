const states = {
    RUNNING: 0,
    JUMPING: 1,
    FALLING: 2,
    ATTAKING: 3,
}

class State {
    constructor(state){
        this.state = state;
    }
}

export class Running extends State {
    constructor(player){
        super('RUNNING');
        this.player = player;
    }

    enter(){
        //this.framex = 0
        //this.framey = ??
        //this.player.maxframe = ??
        //set sprite sheet frame Y
    }

    handleInput(input){
        if(input.includes('ArrowRight')){
            this.player.x += 2 * this.player.game.speed;    
        }

        if(input.includes('ArrowLeft')){
            this.player.x -= 3 * this.player.game.speed;    
        }
        
        if(input.includes('ArrowUp') || input.includes(' ')){
             this.player.setState(states.JUMPING, 1);
        }
    }
}

export class Jumping extends State {
    constructor(player){
        super('JUMPING');
        this.player = player;
    }

    enter(){
        if(this.player.onGround()){
            this.player.velocity -= 2;
        } 
        //set sprite sheet frame Y
    }

    handleInput(input){
        if(input.includes('ArrowRight')){
            this.player.x += this.player.game.speed;    
        }

        if(input.includes('ArrowLeft')){
            this.player.x -= this.player.game.speed;    
        }

        if (this.player.velocity > this.player.weight){
            this.player.setState(states.FALLING, 1);
        }
    }
}

export class Falling extends State {
    constructor(player){
        super('FALLING');
        this.player = player;
    }

    enter(){
        //set sprite sheet frame Y
    }

    handleInput(input){
        if(input.includes('ArrowRight')){
            this.player.x += this.player.game.speed;    
        }

        if(input.includes('ArrowLeft')){
            this.player.x -= this.player.game.speed;    
        }

        if (this.player.onGround()){
            this.player.setState(states.RUNNING, 0.5);
        }
    }
}

export class Attacking extends State {
    constructor(player){
        super('ATTAKING');
        this.player = player;
    }

    enter(){
        //this.framex = 0
        //this.framey = ??
        //this.player.maxframe = ??
        //set sprite sheet frame Y
        var currenttarget = this.player.target.pop();
        if(currenttarget == "B"){
            //Break animation
        }
        else if(currenttarget == "O"){
            //Lift animation
        }
        else{
            this.player.setState(states.RUNNING, 0.5);
        }
    }
}
