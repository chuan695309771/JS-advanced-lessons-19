/*
    
*/
class Point {
    constructor() {
        this.x = 1;
    }
    static showPoint() {
        console.log(this);
    }

}
Point.showPoint();