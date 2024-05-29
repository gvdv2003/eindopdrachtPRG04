import '../css/style.css';
import { Engine, DisplayMode, Loader, Scene, } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js';
import { BadGuy } from './badguy.js';
import { Canonball } from './canonball.js';
import { Canonballscore } from './canonballscore.js';
import { Kanon } from './kanon.js';
import { TiledResource } from '@excaliburjs/plugin-tiled';
import { Healthbar } from './health.js';
import { Killscore } from './killscore.js';

export class Mainscene extends Scene {
    constructor(game) {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            antialiasing: false,
        
        });
       this.game = game;
    
    }
    onInitialize(){
        this.startGame();
    }

    startGame() {
        //const tiledMapResource = new TiledResource('public/images/tilemap1.tmx');
        Resources.tilemapje.addToScene(this);
        this.initializeActors();
    }

    restartScene(){
       
        // this.canonballscore.resetScore()
        
        this.clear();
        Resources.tilemapje.addToScene(this);
        this.initializeActors()
         


    }

    initializeActors() {
        this.canonballscore = new Canonballscore ()
        this.healthBar = new Healthbar(this.game);
        this.killscore = new Killscore(this.game);
        console.log("Start de game!");

        const player = new Player(this.canonballscore, this.healthBar);
        player.z = 3;

        const badGuy1 = new BadGuy(900, 200, this, this.killscore);
        badGuy1.z = 3;

        const badGuy2 = new BadGuy(1380, 600, this, this.killscore);
        badGuy2.z = 3;

        const badGuy3 = new BadGuy(1000, 700, this, this.killscore);
        badGuy3.z = 3;

        const badGuy4 = new BadGuy(1600, 1400, this, this.killscore);
        badGuy4.z = 3;

        const badGuy5 = new BadGuy(1000, 1800, this, this.killscore);
        badGuy5.z = 3;

        const badGuy6 = new BadGuy(400, 1840, this, this.killscore);
        badGuy6.z = 3;

        const badGuy7 = new BadGuy(330, 950, this, this.killscore);
        badGuy7.z = 3;

        const badGuy8 = new BadGuy(1800, 200, this, this.killscore);
        badGuy8.z = 3;

        const badGuy9 = new BadGuy(1050, 1350, this, this.killscore);
        badGuy9.z = 3;

        const badGuy10 = new BadGuy(100, 500, this, this.killscore);
        badGuy10.z = 3;



        const kanon = new Kanon (1680, 1350);
        kanon.z = 3


        const canonball1 = new Canonball (550, 1650)
        canonball1.z = 4

        const canonball2 = new Canonball (600, 625)
        canonball2.z = 4

        const canonball3 = new Canonball (1450, 1350)
        canonball3.z = 4

        const canonball4 = new Canonball (1450, 620)
        canonball4.z = 4

        const canonball5 = new Canonball (1005, 330)
        canonball5.z = 4

        const canonball6 = new Canonball (100, 200)
        canonball6.z = 4

        const canonball7 = new Canonball (150, 650)
        canonball7.z = 4

        const canonball8 = new Canonball (900, 1400)
        canonball8.z = 4

        const canonball9 = new Canonball (550, 1250)
        canonball9.z = 4

        const canonball10 = new Canonball (1000, 1800)
        canonball10.z = 4




        this.camera.strategy.lockToActor(player);
        this.camera.zoom = 2;
        
        
        this.add(this.healthBar)
        this.add(this.canonballscore)
        this.add(this.killscore)
        this.add(player);
        this.add(badGuy1);
        this.add(badGuy2);
        this.add(badGuy3);
        this.add(badGuy4);
        this.add(badGuy5);
        this.add(badGuy6);
        this.add(badGuy7);
        this.add(badGuy8);
        this.add(badGuy9);
        this.add(badGuy10);
        this.add(kanon);
        this.add(canonball1);
        this.add(canonball2);
        this.add(canonball3);
        this.add(canonball4);
        this.add(canonball5);
        this.add(canonball6);
        this.add(canonball7);
        this.add(canonball8);
        this.add(canonball9);
        this.add(canonball10);


        
    }
}

