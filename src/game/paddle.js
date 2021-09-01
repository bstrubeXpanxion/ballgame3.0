export default class Paddle {
    constructor(gameHeight,GameWidth){
        this.width = 150;
        this.height = 30;

        this.position = {
            x: GameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }
    
    draw(ctx){
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
}