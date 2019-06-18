/*
    子类继承父类 extends
    在类的构造函数里面super 指向父类的构造函数
    继承的子类构造函数中，必须得在super调用后才能使用this

    super在子类的原型方法中，指向父类的prototype
*/
class Parent {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

}
class Child extends Parent {
    constructor(x,y,z) {
        super(x,y);
        this.z = z;
    }
    show(){
        console.log(this);
    }
}
let c1 