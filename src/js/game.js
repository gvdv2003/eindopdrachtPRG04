import '../css/style.css';
import { Engine, DisplayMode, Loader} from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js';
import { BadGuy } from './badguy.js';
import { Canonball } from './canonball.js';
import { Canonballscore } from './canonballscore.js';
import { Kanon } from './kanon.js';
import { TiledResource } from '@excaliburjs/plugin-tiled';
import { IntroScene } from './introscene.js';
import { Mainscene } from './mainscene.js';
import { GameOverScene } from './gameoverscene.js';
import { EndScene } from './endscene.js';

export class Game extends Engine {
    mainScene = new Mainscene(this);
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
        });
        this.start(ResourceLoader).then(() => this.showIntro());
    }

    showIntro() {

        const introScene = new IntroScene(this);
        this.addScene('intro', introScene);
        this.goToScene('intro');
        
    }

    goToMainGameScene() {
        
        this.addScene('main', this.mainScene);
        this.goToScene('main');

    }
    restartMainScene(){
        
        this.mainScene.restartScene();
    }
    gameOverScene() {
        const gameoverscene = new GameOverScene(this);
        this.addScene('gameover', gameoverscene);
        this.goToScene('gameover');
    }

    endScene(){
        const endscene = new EndScene(this);
        this.addScene('end', endscene);
        this.goToScene('end');

    }

    
}


new Game();