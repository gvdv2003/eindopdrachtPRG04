import { Actor, Vector, CollisionType } from 'excalibur';
import { Resources } from './resources.js';




export class Kanon extends Actor {
   
    constructor(x,y) {
        super({
            width: 500,
            height: 400,
            collisionType: CollisionType.Passive
        });
        this.scale = new Vector(0.2, 0.2);
        this.graphics.use(Resources.kanon.toSprite())
        this.x =x 
        this.y =y
        this.pos = new Vector(x,y)
        
    }

    onPreUpdate(engine) {
        
      }



 
}