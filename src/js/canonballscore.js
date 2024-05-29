import { Actor, ScreenElement, Vector, Color, Label, Font } from "excalibur";
import { vector } from "excalibur/build/dist/Util/DrawUtil";

export class Canonballscore extends ScreenElement {
    score = 0;
    scoreText

    onInitialize(engine) {
        this.scoreText = new Label({
            z: 999,
            x: 1050,
            text: 'Kogels: 0',
            font: new Font({
                size: 50, 
                family: 'Arial'
            }),
        })
        this.addChild(this.scoreText)
    }

    updateScore(amount) {
        this.score = this.score+amount
        this.scoreText.text = 'Kogels: ' + this.score
        
        console.log("score is ge update")
        console.log(this.scoreText.text)
    }
    resetScore() {
        this.score = 0;
        console.log("score is reset")
    }

}