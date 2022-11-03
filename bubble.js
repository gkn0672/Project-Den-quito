export class Bubble{
    constructor(enemy, game){
        this.game = game;
        this.enemy = enemy;
        this.content = enemy.hit;
        this.fontsize = 30;
        this.fontFamily = 'Helvetica';
    }

    update(){
        this.content = this.enemy.hit;
    }

    draw(context){
        context.font = this.fontsize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;

        //score
        context.fillText(this.content, this.enemy.x, this.enemy.y - 10);
    }
}