import { Actor, ScreenElement, Vector, Color, Label, Font } from "excalibur";
import { vector } from "excalibur/build/dist/Util/DrawUtil";

export class Killscore extends ScreenElement {
    score = 0;
    scoreText

    onInitialize(game) {
        this.scoreText = new Label({
            z: 999,
            y: 50,
            x: 1050,
            text: 'Kills: 0',
            font: new Font({
                size: 50, 
                family: 'Arial'
            }),
        })
        this.addChild(this.scoreText)
        this.game = game;
        
    }

    updateScore(amount) {
        this.score = this.score+amount
        this.scoreText.text = 'Kills: ' + this.score
        
        console.log("score is ge update")
        console.log(this.scoreText.text)

        if (this.score > 9){

            this.game.endScene();
        }
    }
    resetScore() {
        this.score = 0;
        console.log("score is reset")
    }

}