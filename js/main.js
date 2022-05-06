class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class BackgroundProp {
    constructor(pos) {
        this.pos = pos;
    }
}

class StreamerBackground {
    constructor(canvas, props = []) {
        this.canvas = canvas;
        this.props = props;
    }
    addProp(prop) {
        this.props.push(prop);
    }
}

const canvas = document.querySelector('#canvas');

const thing = new BackgroundProp(new Vec2(50,50));

const streamerBG = new StreamerBackground(canvas);

streamerBG.addProp(thing);
