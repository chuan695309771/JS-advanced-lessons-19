/*
    将类数组结构转化为数组
*/
console.log(Array.from("abcdef"));
function fn1(){
    Array.from(arguments);
}
fn1(1,2,3);
/*
    Array.of将单个元素转化为数组
*/
console.log(Array.of(1,2,3));