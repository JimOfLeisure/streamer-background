class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class BackgroundProp {
    constructor(pos) {
        this.pos = pos;
        // temp hard-coding
        this.fillStyle = 'green';

    }
    draw(ctx) {
        // temp hard-coding
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(10, 10, 150, 100);
    }
}

class StreamerBackground {
    constructor(canvas, props = []) {
        this.canvas = canvas;
        this.props = props;
        this.ctx = canvas.getContext('2d');
    }
    addProp(prop) {
        this.props.push(prop);
    }
    drawProps() {
        for (let prop of this.props) {
            console.log('hi', this.props);
            prop.draw(this.ctx);
        }
    }
}

const canvas = document.querySelector('#canvas');

const thing = new BackgroundProp(new Vec2(50,50));

const streamerBG = new StreamerBackground(canvas);

streamerBG.addProp(thing);
streamerBG.drawProps();
