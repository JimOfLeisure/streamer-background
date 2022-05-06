const thingCount = 20;

class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(vector2) {
        this.x += vector2.x;
        this.y += vector2.y;
    }
}

class Vec3 extends Vec2 {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(vector3) {
        super.add(vector3);
        this.z += vector3.z;
    }
}

// does prop need to know how much time has elapsed? NO!!!
// or can it just rely on its position?  YES!!!
// props will continue to self-manage; 2d props will use screen edges;
// 3d / parallax props will use depth to reset
class BackgroundProp {
    constructor(pos, vel) {
        this.pos = pos;
        this.vel = vel;
        // temp hard-coding
        this.fillStyle = 'green';

    }
    draw(ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.pos.x, this.pos.y, 50, 25);
    }
    process(ctx) {
        this.pos.add(this.vel);
        if (this.pos.x > ctx.canvas.width && this.vel.x > 0) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.x < 0 && this.vel.x < 0) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y > ctx.canvas.height && this.vel.y > 0) {
            this.vel.y = -this.vel.y;
        }
        if (this.pos.y < 0 && this.vel.y < 0) {
            this.vel.y = -this.vel.y;
        }
    }
}

class BgProp3d extends BackgroundProp {
    draw(ctx) {
        const scale = this.pos.z < 100 ? 1 : 0.5;
        console.log(scale);
        ctx.scale(scale, scale);
        super.draw(ctx);
        // is this needed? reset scale for next item?
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    process(ctx) {
        this.pos.add(this.vel);
        // console.log(this.pos.z);
        if (this.pos.z > 300) {
            this.reset();
        }
    }
    reset() {
        this.pos.z = 0;
        this.pos = new Vec3(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            0
        );
        this.vel = new Vec3(
            Math.random() * 5 - 0.5,
            Math.random() * 5 - 0.5,
            Math.random() * 5
        )
    }
}

class StreamerBackground {
    constructor(canvas, props = []) {
        this.canvas = canvas;
        this.props = props;
        this.ctx = canvas.getContext('2d');
        this.intervalID = null;
    }
    addProp(prop) {
        this.props.push(prop);
    }
    drawProps() {
        for (let prop of this.props) {
            prop.draw(this.ctx);
        }
    }
    startMotion() {
        if (this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        // 60fps
        this.intervalID = setInterval(this.process.bind(this),
            16.6666
        );
    }
    stopMotion() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }
    process() {
        // TODO: do I want to process all props then draw all or stay like this?
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let prop of this.props) {
            prop.process(this.ctx);
            prop.draw(this.ctx);
        }
    }
}

const canvas = document.querySelector('#canvas');

// const thing = new BackgroundProp(new Vec2(0, 0), new Vec2(1, 1));

const streamerBG = new StreamerBackground(canvas);

// streamerBG.addProp(thing);

for (let i = 0; i < thingCount; i++) {
    const prop = new BackgroundProp(new Vec2(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)), new Vec2(Math.random() * 5 - 0.5, Math.random() * 5 - 0.5));
    const prop3d = new BgProp3d(
        new Vec3(
            Math.floor(Math.random() * canvas.width),
            Math.floor(Math.random() * canvas.height),
            0
        ), new Vec3(
            Math.random() * 5 - 0.5,
            Math.random() * 5 - 0.5,
            Math.random() * 5
        )
    );
    // streamerBG.addProp(prop);
    streamerBG.addProp(prop3d);
}
streamerBG.drawProps();

document.querySelector('#start').addEventListener('click', streamerBG.startMotion.bind(streamerBG));
document.querySelector('#stop').addEventListener('click', streamerBG.stopMotion.bind(streamerBG));
