import { Vec2, Vec3 } from './vectors.js';
import { BackgroundProp, BgProp3d, ImageBgProp, ImageBgProp3d } from './background-props.js';
import { StreamerBackground } from './streamer-background.js';

const thingCount = 20;
const imagePropsCount = 2;
const imageProps3dCount = 7;

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const streamerBG = new StreamerBackground(canvas);

const images = Array.from(document.querySelectorAll('#canvasImages > img'));

for (let i = 0; i < thingCount; i++) {
    const prop = new BackgroundProp(new Vec2(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)), new Vec2(Math.random() * 5 - 0.5, Math.random() * 5 - 0.5));
    const prop3d = new BgProp3d(
        new Vec3(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            0
        ), new Vec3(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            Math.random() * 5
        )
    );
    // streamerBG.addProp(prop);
    // streamerBG.addProp(prop3d);
}

for (let i = 0; i < imageProps3dCount; i++) {
    const imageProp3d = new ImageBgProp3d(
        new Vec3(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            0
        ), new Vec3(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            Math.random() * 3 + 0.2
        ),
        images[Math.floor(Math.random() * images.length)],
        0.2
    );
    streamerBG.addProp(imageProp3d);
}

for (let i = 0; i < imagePropsCount; i++) {
    const imageProp = new ImageBgProp(
        new Vec2(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height)
        ), new Vec2(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
        ),
        images[Math.floor(Math.random() * images.length)],
        0.2
    );
    streamerBG.addProp(imageProp);
}

streamerBG.drawProps();

document.querySelector('#start-stop').addEventListener('click', streamerBG.toggleMotion.bind(streamerBG));

streamerBG.startMotion();

// something stupid to see if module works
const foo = "hi";
export default foo;
