import { ImageSource, Loader, Sound} from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

// Voeg hier jouw eigen resources toe
const Resources = {
    Playerright: new ImageSource('public/images/ship13.png'),
    Playerdown: new ImageSource('public/images/ship9.png'),
    Playerdownright: new ImageSource('public/images/ship11.png'),
    Playerdownleft: new ImageSource('public/images/ship7.png'),
    Playerleft: new ImageSource('public/images/ship5.png'),
    playerupleft: new ImageSource('public/images/ship3.png'),
    playerup: new ImageSource('public/images/ship1.png'),
    playerupright: new ImageSource('public/images/ship15.png'),
    tilemapje: new TiledResource('public/images/tilemap1.tmx'), 

    badguy: new ImageSource('public/images/badguyship.png'),
    fireball: new ImageSource('public/images/fireball.png'),
    kanon: new ImageSource('public/images/kanon.png'),
    explosion: new ImageSource('public/images/explosion.png'),
    hit: new ImageSource('public/images/hit.png'),
    canonball: new ImageSource('public/images/canonball.png'),
    backgroundMusic: new Sound('public/music/Piratetheme.mp3')
    
};

const ResourceLoader = new Loader(Object.values(Resources));

export { Resources, ResourceLoader };
