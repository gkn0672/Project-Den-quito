import { Running, Jumping, Falling } from "./playerstates.js";

export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = 250;
        this.y = this.game.height - this.height - this.game.groundmargin;
        this.velocity = 0;
        this.weight = 1;
        this.image = document.getElementById("player");
        this.framex = 0;
        this.framey = 0;
        this.maxframe;
        this.fps = 60;
        this.frameInterval = 1000/this.fps;
        this.frametimer = 0; 
        this.states = [new Running(this), new Jumping(this),new Falling(this)];
        this.target = [];
        this.currentstates = this.states[0];
        this.currentstates.enter();
    }

    update(input, deltatime){
        this.currentstates.handleInput(input);

        //Horizontal
        if(this.x < 0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        /*
        //Vertical
        if (input.includes(" ") && this.onGround()) this.velocity -= 20;
        if (input.includes("ArrowUp") && this.onGround()) this.velocity -= 20;
        this.y += this.velocity;
        if(this.y >= this.game.height - this.height) this.y = this.game.height - this.height;
        if(!this.onGround()) this.velocity += this.weight;
        else this.velocity = 0;
        */
        //Sprite animation
        if(this.frametimer > this.frameInterval){
            this.frametimer = 0; 
            if(this.framex < this.maxframe) this.framex ++;
            else this.framex = 0;
        }else{
            this.frametimer += deltatime;
        }
    }

    draw(context){
        context.fillStyle = "blue";
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        //draw image
    }

    onGround(){
        return this.y >= this.game.height - this.height - this.game.groundmargin;
    }

    setState(state, speed){
        this.currentstates = this.states[state];
        this.game.speed = this.game.maxspeed * speed;
        this.currentstates.enter();
    }

    checkCollision(){
        this.game.enemies.array.forEach(enemy => {
            if(enemy.x < this.x + this.width &&
                enemy + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y){
                //Collision detected
            } else{
                //No collision
            }
        });
    }
}