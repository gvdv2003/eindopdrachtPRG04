import {
    Actor,
    Engine,
    Vector,
    SpriteSheet,
    Animation,
    Loader,
    range,
    ImageSource,
    AnimationStrategy,
    CollisionType
} from "excalibur";
import {Resources} from "./resources.js";

export class Hit extends Actor {
    x
    y
    constructor(x,y) {
        super({ width: 517, height: 517, collisionType: CollisionType.PreventCollision});
        this.x = x;
        this.y = y;
        this.z = 10;
    }

    onInitialize(engine) {
        console.log('new bubbles added');
        this.pos.y = this.y;
        this.pos.x = this.x;
        // Define the sprite sheet
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.hit, // BubbleImage should be an instance of the image resource
            grid: {
                columns: 9,
                rows: 3,
                spriteWidth: 516,
                spriteHeight: 528
            },
        });
        this.z = 3;
        this.scale = new Vector(1,1);
        this.Animation = Animation.fromSpriteSheet(spriteSheet, range(0, 26), 30, AnimationStrategy.End);
        this.Animation.scale = new Vector(0.2, 0.2)
        this.graphics.use(this.Animation);

    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);
        if (this.Animation.done){
            this.kill()
           
        }
    }
}