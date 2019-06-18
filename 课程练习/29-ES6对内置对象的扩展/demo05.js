/*
    Array.prototype.find
    遍历数组中的元素，验证是否能满足回调函数的验证条件
    （回调函数的返回值）
    返回满足条件的第一个数组元素
    Array.prototype.findIndex
*/

let arr1 = [10,15,20,30,40];
let el = arr1.find(function(element){
    return element > 19;
})
console.log(el);


/*
    同上，但返回值是索引值
*/
let elIndex = arr1.findIndex(function(element){
    return element > 29;
})
console.log(elIndex);

/*
    fill(value,start,end);
    向数组特定的起始位置和结束位置添加value值
    keys()获取键的值
    values()获取数组具体值
*/