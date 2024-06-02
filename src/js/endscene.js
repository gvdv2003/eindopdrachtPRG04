import { Scene, Label, TextAlign, Color, Vector, Input, Font,Keys } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';

export class EndScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
        // Add scene initialization code here
    }

    onInitialize() {
        // Add event listener to transition to main game scene

        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Input.Keys.Space) {
                this.game.restartMainScene();
            }
        });

        // Display instructions
        
        const instructions = new Label({
            text: 'Shipper\n Gefeliciteerd alle vijandige schepen zijn verslagen \n  \n druk op spatie om het spel opnieuw te starten',
            font: new Font({
                size: 30,  // Set font size here
                family: 'Arial'
            }),
            textAlign: TextAlign.Center,
            pos: new Vector((this.game.drawWidth / 2) - 600, this.game.drawHeight / 2 - 200),
            color: Color.White,
        });
        this.add(instructions);
    }
}