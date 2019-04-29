function BaseClass(){

}
BaseClass.fn1 = function(){
    console.log("静态方法");
}
BaseClass.fn1();

BaseClass.prototype.fn2 = function(){
    console.log("原型方法");
}
var base = new BaseClass();
console.log(base.__proto__ == BaseClass.prototype);
base.fn2();
