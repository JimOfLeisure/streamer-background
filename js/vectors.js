// Vec2 is used for x,y pairs, especially position and velocity
export class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(vector2) {
        this.x += vector2.x;
        this.y += vector2.y;
    }
}

// Vec3 is used for x,y,z triplets, especially position and velocity
export class Vec3 extends Vec2 {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add(vector3) {
        super.add(vector3);
        this.z += vector3.z;
    }
}

