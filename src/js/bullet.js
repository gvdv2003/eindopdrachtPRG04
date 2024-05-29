import {Resources} from "./resources.js";
import { Actor, Vector, CollisionType, Color, Circle } from 'excalibur';


export class Bullet extends Actor {
    constructor(pos, direction) {
        super({
            pos: pos,
            width: 10,
            height: 10,
            collisionType: CollisionType.Passive
        });

        this.graphics.use(Resources.fireball.toSprite());
            

        this.vel = direction.scale(300); // Pas de snelheid van de kogel aan
        this.z = 10; // Zorg ervoor dat de kogel een hoge z-index heeft
        
        this.scale = new Vector(0.5, 0.5);
        
        
    }

    
}