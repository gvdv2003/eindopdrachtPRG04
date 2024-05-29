import {Actor, Color, Vector, ScreenElement, CollisionType} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from "./player.js";
import { Canonballscore } from "./canonballscore.js";

export class Healthbar extends ScreenElement {

    healthbar
    currentHealth
    background
    game

    

    constructor(game, canonballscore) {
        super();
        this.game = game;
        
    }

    Player
    

    onInitialize(engine) {
        console.log('healthbar init')
        this.engine = engine
        this.currentHealth = 1;
        this.background = new Actor({ x: 10, y: 10, color: Color.fromRGB(255, 255, 255, 0.4), width: 200, height: 15, anchor: Vector.Zero})
        this.background.z = 11
        this.addChild(this.background)

        this.healthbar = new Actor({ x: 10, y: 10, color: Color.Green, width: 200, height: 15, anchor: Vector.Zero })
        this.addChild(this.healthbar)
        this.healthbar.z = 11


        this.body.collisionType = CollisionType.PreventCollision
        this.healthbar.body.collisionType = CollisionType.PreventCollision
        this.background.body.collisionType = CollisionType.PreventCollision
        console.log('healthbar init succes')
    }

    reduceHealth(amount) {
        if (this.currentHealth <= 0){
            console.log("Player is dead!");
            this.engine.currentScene.actors.forEach(actor => {
                if (actor instanceof Player) {
                    
                    actor.die();
                }
            });


            this.game.gameOverScene();
                

            
        }else{
            this.healthbar.scale = new Vector(this.currentHealth - amount, 1) // de health is nu 50%
            this.currentHealth = this.currentHealth - amount
            if (this.currentHealth > 0){
                // player also dead
            }
        }
    }

    increaseHealth(amount) {
        if (this.currentHealth >= 1){
            // player fully healed
            //this.game.gameOverScene();
        }else{
            this.healthbar.scale = new Vector(this.currentHealth + amount, 1) // de health is nu 50%
            this.currentHealth = this.currentHealth + amount
            if (this.currentHealth >= 1){
                // player also dead
            }
        }
    }
}