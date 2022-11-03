class Enemy {
    constructor(){
        this.framex = 0;
        this.framey = 0;
        this.fps = 60;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
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
        if(this.x + this.width < 0 || this.hit.length == 0) this.marked = true;
    }

    draw(context){
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    damaged(){
        this.hit = this.hit.substring(0, this.hit.length - 1);
    }
}

export class MosquitoKing extends Enemy{
    constructor(game){
        super();
        this.game = game;
        this.marked = false;
        this.width = 150;
        this.height = 150;
        this.x = 10;
        this.y = Math.floor(this.game.height / 2.5);
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
        this.speedX = 0.5;
        this.speedY = 0;
        this.maxframe = 5;
        this.image = document.getElementById("hardsoil");
        this.hitcode = "B";
        this.hit = this.hitcode.repeat(Math.floor(Math.random() * 4));
    }

    update(deltatime){
        super.update(deltatime);
    }

    draw(context){
        super.draw(context);
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
        this.speedX = 0.25;
        this.speedY = 0;
        this.maxframe = 5;
        this.image = document.getElementById("mrbuck");
        this.hitcode = "O";
        this.hit = this.hitcode.repeat(Math.floor(Math.random() * 4));
    }

    update(deltatime){
        super.update(deltatime);
    }

    draw(context){
        super.draw(context);
    }
}

class FlowerPot extends Enemy{

}