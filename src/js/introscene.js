import { Scene, Label, TextAlign, Color, Vector, Input, Font,Keys } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';

export class IntroScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
        // Add scene initialization code here
    }

    onInitialize() {
        // Add event listener to transition to main game scene
        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Input.Keys.Space) {
                this.game.goToMainGameScene();
            }
        });

        // Display instructions
        const instructions = new Label({
            text: 'Shipper\n Versla de andere schepen door opzoek te gaan naar een kanon en kogels. \n Ga op avontuur over de zee maar pas op,\n je schip is niet heel sterk dus een botsing met een ander schip \n of met de kant zorgd kan fataal zijn \n  \n Druk op spatie om te beginnen, gebruiken de pijltjes of WASD om te bewegen \n en richt en klik met de muis om te schieten',
            font: new Font({
                size: 30,  // Set font size here
                family: 'Arial'
            }),
            textAlign: TextAlign.Center,
            pos: new Vector((this.game.drawWidth / 2) - 600, this.game.drawHeight / 2 - 200),
            color: Color.White,
        });
        this.add(instructions);
        Resources.backgroundMusic.play();
    }
}