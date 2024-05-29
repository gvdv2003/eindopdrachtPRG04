import {Actor, Vector, Keys, CollisionType} from "excalibur";
import {Resources} from "./resources.js";
import { Bullet } from './bullet.js';
import { Game } from "./game.js";
import { Canonballscore } from "./canonballscore.js";
import { Healthbar } from './health.js';
import { Kanon } from "./kanon.js";
import { BadGuy } from "./badguy.js";
import { Canonball } from "./canonball.js";

export class Player extends Actor {
    canShoot = false
    constructor(canonballscore, healthBar) {
        super({
            width: 50,
            height: 40,
            collisionType: CollisionType.Active
        });
        this.scale = new Vector(2, 2); 
        this.canonballscore =  canonballscore  
        this.healthBar = healthBar    
        
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
    
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
          yspeed = -100;
          
        }
    
        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
          yspeed = 100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
          xspeed = 100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
          xspeed = -100;
               }



        if (xspeed === 100 && yspeed === 0){
            this.graphics.use(Resources.Playerright.toSprite())
            
            
        }
        
        if (xspeed === 100 && yspeed === 100) {
            this.graphics.use(Resources.Playerdownright.toSprite())
        }

        if (xspeed === 0 && yspeed === 100) {
            this.graphics.use(Resources.Playerdown.toSprite())
        }

        if (xspeed === -100 && yspeed === 100) {
            this.graphics.use(Resources.Playerdownleft.toSprite())
        }

        if (xspeed === -100 && yspeed === 0) {
            this.graphics.use(Resources.Playerleft.toSprite())
        }

        if (xspeed === -100 && yspeed === -100) {
            this.graphics.use(Resources.playerupleft.toSprite())
        }

        if (xspeed === 0 && yspeed === -100) {
            this.graphics.use(Resources.playerup.toSprite())
        }

        if (xspeed === 100 && yspeed === -100) {
            this.graphics.use(Resources.playerupright.toSprite())
        }

        this.vel = new Vector(xspeed, yspeed);
      }


    onInitialize(engine) {


        this.on('collisionstart', (event) => this.hitSomething(event, this.game))
        this.pos = new Vector(1075, 215)
        this.graphics.use(Resources.Playerright.toSprite())
        engine.input.pointers.primary.on('down', (evt) => {
            if (!(this.canonballscore.score < 1)){

                this.shoot(engine, evt.worldPos);
                
            }
           
        });



        

    }

    shoot(engine, targetPos) {
        if (this.canShoot){
        this.canonballscore.updateScore(-1)
        const direction = targetPos.sub(this.pos).normalize();
        const bullet = new Bullet(this.pos, direction);
        bullet.z = 10; // Zorg ervoor dat de kogel een hogere z-index heeft
        
        engine.currentScene.add(bullet);
        }
    }
    hitSomething(event){
        
        if (event.other instanceof Bullet){
        } else if (event.other instanceof Kanon){
            this.canShoot = true
            event.other.kill ()

        } else if (event.other instanceof BadGuy){
            this.healthBar.reduceHealth(0.3,)


        } else if (event.other instanceof Canonball){
            event.other.kill ();
            this.canonballscore.updateScore(10)


        }
        else{
            this.healthBar.reduceHealth(0.1,);
        }

        
    }

    die() {
        console.log("Player is dead!");
        
        this.canonballscore.resetScore(); // Reset de score wanneer de speler sterft
        this.kill(); // Verwijder de speler uit de game
    }
    
    
}