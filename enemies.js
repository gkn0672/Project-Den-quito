import {BBubble, OBubble, LBubble} from './bubble.js';

class Enemy {
    constructor(){
        this.framex = 0;
        this.framey = 0;
        this.fps = 60;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.killed = false;
    }

    update(deltatime){
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if(this.framex < this.maxframe) this.framex ++;
            else this.framex = 0;
        }
        else{
            this.frameTimer += deltatime;
        }
        if(this.x + this.width < 0){
            this.marked = true;
        }
    }

    draw(context){
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    damaged(){
        this.hit = this.hit.substring(0, this.hit.length - 1);
        if(this.hit.length == 0){
            this.game.score ++;
            this.game.speedup++;
            this.marked = true;
            this.killed = true;
        }
    }
}

export class MosquitoKing extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.marked = false;
        this.width = 150;
        this.height = this.game.height - this.game.groundmargin;
        this.x = 10;
        this.y = 0;
        this.speedX = 10;
        this.speedY = 0;
        this.maxframe = 5;
        this.image = document.getElementById("mosking");
        this.hitcode = "None";
        this.hit = "Immortal"
    }

    update(deltatime){
        super.update(deltatime);
        this.x += this.speedX + this.game.speed;
    }

    draw(context){
        super.draw(context);
    }

    checkdeadzone(){
        if (this.game.player.x <= this.x + this.width){
            this.game.gameover = true;
            console.log("game over");
        }
        else{
            this.game.enemies.slice(1).forEach(enemy =>{
                if(enemy.x + enemy.width < this.x + this.width){
                    if (this.killed == false){
                        this.game.increaseDeadZone();
                        enemy.marked = true;
                    }
                }
            })
        }
    }
}

export class HardenedSoil extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.marked = false;
        this.width = 50;
        this.height = 75;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundmargin;
        this.speedX = 0.5 * this.game.speed;
        this.speedY = 0;
        this.maxframe = 5;
        this.image = document.getElementById("hardsoil");
        this.hitcode = "B";
        this.hit = this.hitcode.repeat(Math.floor(Math.random() * 2 + 1));
        this.bubble = new BBubble(this, this.game);
    }

    update(deltatime){
        super.update(deltatime);
        this.bubble.update();
    }

    draw(context){
        super.draw(context);
        this.bubble.draw(context);
    }
}

export class Bucket extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.marked = false;
        this.width = 50;
        this.height = 50;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundmargin;
        this.speedX = 0.25 * this.game.speed;
        this.speedY = 0;
        this.maxframe = 5;
        this.image = document.getElementById("mrbuck");
        this.hitcode = "O";
        this.hit = this.hitcode.repeat(Math.floor(Math.random() * 2 + 1));
        this.bubble = new OBubble(this, this.game);
    }

    update(deltatime){
        super.update(deltatime);
        this.bubble.update();
    }

    draw(context){
        super.draw(context);
        this.bubble.draw(context);
    }
}

export class FlowerPlate extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.marked = false;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundmargin;
        this.speedX = 0.25 * this.game.speed;
        this.speedY = 0;
        this.maxframe = 5;
        this.image = document.getElementById("flowerplate");
        this.hitcode = "L";
        this.hit = this.hitcode.repeat(Math.floor(Math.random() * 2 + 1));
        this.bubble = new LBubble(this, this.game);
    }

    update(deltatime){
        super.update(deltatime);
        this.bubble.update();
    }

    draw(context){
        super.draw(context);
        this.bubble.draw(context);
    }
}