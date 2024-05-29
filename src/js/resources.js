import { ImageSource, Loader, Sound} from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

// Voeg hier jouw eigen resources toe
const Resources = {
    Playerright: new ImageSource('images/ship13.png'),
    Playerdown: new ImageSource('images/ship9.png'),
    Playerdownright: new ImageSource('images/ship11.png'),
    Playerdownleft: new ImageSource('images/ship7.png'),
    Playerleft: new ImageSource('images/ship5.png'),
    playerupleft: new ImageSource('images/ship3.png'),
    playerup: new ImageSource('images/ship1.png'),
    playerupright: new ImageSource('images/ship15.png'),
    tilemapje: new TiledResource('images/tilemap1.tmx'), 

    badguy: new ImageSource('images/badguyship.png'),
    fireball: new ImageSource('images/fireball.png'),
    kanon: new ImageSource('images/kanon.png'),
    explosion: new ImageSource('images/explosion.png'),
    hit: new ImageSource('images/hit.png'),
    canonball: new ImageSource('images/canonball.png'),
    backgroundMusic: new Sound('music/Piratetheme.mp3')
    
};


const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };
