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
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.pos.x, this.pos.y, 50, 25);
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
            console.log('hi', this.props);
            prop.draw(this.ctx);
        }
    }
    startMotion() {
        if (this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        // 60fps
        this.intervalID = setInterval(this.process.bind(this), 16.6666);
    }
    process() {
        console.log('process', this.intervalID);
    }
}

const canvas = document.querySelector('#canvas');

const thing = new BackgroundProp(new Vec2(50,50));

const streamerBG = new StreamerBackground(canvas);

streamerBG.addProp(thing);
streamerBG.drawProps();
