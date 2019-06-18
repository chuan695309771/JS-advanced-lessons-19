let username = "lily";

/*
    ES6里面对象的结构进行了简化
    属性可以写成变量的形式
    函数省略function，函数名
*/
let obj = {
    username,
    fn1() {
        console.log(this.username);
    }
}

let bar = "foo";
let obj1 = {
    [bar]:"male"
}
console.log(obj1);

/*可枚举属性才可合并 */
let obj2 = {username:"zhangsan"};
let obj3 = {age:20};
console.log(Object.assign(obj2,obj3));
console.log(obj2.keys());
console.log(obj2.values());
console.log(obj2.entries());