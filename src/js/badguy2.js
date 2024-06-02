import { Actor, Vector, CollisionType } from 'excalibur';
import { BadGuy } from './badguy';
import { Resources } from './resources.js';


export class BadGuy2 extends BadGuy {


    

    onInitialize(engine) {
        this.graphics.use(Resources.badguy2.toSprite()); // Gebruik een speler sprite, vervang dit door een bad guy sprite als je die hebt
       
        
    }



}