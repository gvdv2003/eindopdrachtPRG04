import { Actor, Vector, CollisionType } from 'excalibur';
import { Resources } from './resources.js';
import { Bullet } from './bullet.js';
import { Explosion } from './explosion.js';
import { Hit } from './hit.js';




export class BadGuy extends Actor {
    life = 5;
    game;
    constructor(posX, posY, game) {
        super({
            pos: new Vector(posX, posY),
            width: 100, // Gebruik dezelfde afmetingen als de speler
            height: 80,
            collisionType: CollisionType.Active
        });

        // Stel de schaal in
        this.scale = new Vector(1, 1);
        this.vel = new Vector(0, 0);
        this.game = game;
        this.timer = 0; // Timer om de richting te veranderen
    }

    onInitialize(engine) {
        this.graphics.use(Resources.badguy.toSprite()); // Gebruik een speler sprite, vervang dit door een bad guy sprite als je die hebt
        
        this.on('collisionstart', (evt) => this.onCollisionStart(evt));
    }

    onCollisionStart(evt) {
        
        if (evt.other instanceof Bullet) {
            this.life -= 1
            evt.other.kill()

            const hit = new Hit(this.pos.x, this.pos.y)
            this.game.add(hit)

            if (this.life === 0){
                

                const biem = new Explosion(this.pos.x, this.pos.y)
                this.game.add(biem)
                this.kill()
            }
        }
        


    }

    onPreUpdate(engine, delta) {
        this.timer -= delta;

        if (this.timer <= 0) {
            this.changeDirection();
            this.timer = 2000 + Math.random() * 3000; // Verander elke 2-5 seconden van richting
        }
    }

    changeDirection() {
        const directions = [
            new Vector(100, 0),  // Rechts
            new Vector(-100, 0), // Links
            new Vector(0, 100),  // Beneden
            new Vector(0, -100)  // Boven
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        this.vel = randomDirection;
    }
    
}