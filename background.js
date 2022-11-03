class Layer{
    constructor(game, width, height, speedmodifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedmodifier = speedmodifier;
        this.x = 0;
        this.y = this.game.height - this.height
        this.image = image;
    }

    update(){
        if (this.x <= -this.width){
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.game.speed * this.speedmodifier);
    }

    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game){
        this.game = game;
        this.width = 1280;
        this.height = 960;
        this.backgorund0image = document.getElementById("background0");
        this.backgorund1image = document.getElementById("background1");
        this.backgorund2image = document.getElementById("background2");
        this.layer0 = new Layer(this.game, this.width, this.height, 1, this.backgorund0image);
        this.layer1 = new Layer(this.game, this.width, this.height, 1, this.backgorund1image);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.8, this.backgorund2image);
        this.backgroundlayer = [this.layer0, this.layer1, this.layer2];
    }

    update(){
        this.backgroundlayer.forEach(layer =>{
            layer.update();
        })
    }

    draw(context){
        this.backgroundlayer.forEach(layer => {
            layer.draw(context);
        })
    }
}

