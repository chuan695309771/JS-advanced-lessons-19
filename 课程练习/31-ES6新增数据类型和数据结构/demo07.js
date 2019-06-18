/*继承的实现方式 */
let obj1 = {"x":1};
let obj2 = Object.create(obj1);
console.log(obj2.x);