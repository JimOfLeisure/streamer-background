import { Vec2, Vec3 } from './vectors.js';

// does prop need to know how much time has elapsed? NO!!!
// or can it just rely on its position?  YES!!!
// props will continue to self-manage; 2d props will use screen edges;
// 3d / parallax props will use depth to reset
export class BackgroundProp {
    constructor(pos, vel, scale = 1) {
        this.pos = pos;
        this.vel = vel;
        this.scale = scale;
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
    // needs canvas ref to get width and height
    resetPos(ctx) {
        this.pos = new Vec2(
            Math.floor(Math.random() * ctx.canvas.width),
            Math.floor(Math.random() * ctx.canvas.height)
        );
    }
    resetVel(ctx) {
        this.vel = new Vec2(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5
        )
    }
}

export class BgProp3d extends BackgroundProp {
    draw(ctx) {
        const scale = 1 - (this.pos.z / 100);
        ctx.scale(scale, scale);
        super.draw(ctx);
        // is this needed? reset scale for next item?
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    process(ctx) {
        this.pos.add(this.vel);
        if (this.pos.z > 300) {
            this.reset(ctx);
        }
    }
    reset(ctx) {
        this.pos.z = 0;
        this.resetPos(ctx);
        this.resetVel(ctx);
    }
    // needs canvas ref to get width and height
    resetPos(ctx) {
        this.pos = new Vec3(
            Math.floor(Math.random() * ctx.canvas.width),
            Math.floor(Math.random() * ctx.canvas.height),
            0
        );
    }
    resetVel(ctx) {
        this.vel = new Vec3(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            Math.random() * 3 + 0.2
        )
    }
}

export class ImageBgProp extends BackgroundProp {
    constructor(pos, vel, image, scale) {
        super(pos, vel, scale);
        this.image = image;
    }
    draw(ctx) {
        // ctx.drawImage(this.image, this.pos.x, this.pos.y);
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.pos.x, this.pos.y, this.image.width * this.scale, this.image.height * this.scale);
    }
}

export class ImageBgProp3d extends BgProp3d {
    constructor(pos, vel, image, scale) {
        super(pos, vel, scale);
        this.image = image;
    }
    draw(ctx) {
        const scale = this.scale * (1 - (this.pos.z / 300));
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.pos.x, this.pos.y, this.image.width * scale, this.image.height * scale);
        // is this needed? reset scale for next item?
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
