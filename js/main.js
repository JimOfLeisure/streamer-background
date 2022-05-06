console.log('hi');

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

const thing = new BackgroundProp(new Vec2(50,50));
console.log(thing.pos.x);
console.log(thing.pos.y);
