import '../css/style.css';
import { Engine, DisplayMode, Loader } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js';
import { BadGuy } from './badguy.js';
import { Canonball } from './canonball.js';
import { Kanon } from './kanon.js';
import { TiledResource } from '@excaliburjs/plugin-tiled';

export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
        
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const tiledMapResource = new TiledResource('public/images/tilemap1.tmx');
        const loader = new Loader([tiledMapResource]);
        this.start(loader).then(() => {
            tiledMapResource.addToScene(this.currentScene);
            this.initializeActors();
        });
    }

    initializeActors() {
        console.log("Start de game!");

        const player = new Player();
        player.z = 3;

        const badGuy1 = new BadGuy(900, 200, this);
        badGuy1.z = 3;

        const badGuy2 = new BadGuy(1380, 600, this);
        badGuy2.z = 3;

        const badGuy3 = new BadGuy(1000, 700, this);
        badGuy3.z = 3;

        const kanon = new Kanon (1680, 1350);
        kanon.z = 3

        const canonball1 = new Canonball (550, 1650)
        canonball1.z = 4

        this.currentScene.camera.strategy.lockToActor(player);
        this.currentScene.camera.zoom = 2;
        
        this.add(player);
        this.add(badGuy1);
        this.add(badGuy2);
        this.add(badGuy3);
        this.add(kanon);
        this.add(canonball1);
    }
}

new Game();