var arr1 = ['a','b','c','d'];
/*
    forEach(callback,thisArg);
    callback(element,index,arr);
        element遍历数组每次取到的元素值
        index遍历数组每次取到的数组元素的索引
        arr操作数组
    thisArg可以指明回调函数内部this的指向
*/
arr1.forEach(function(element,index,arr2){
    console.log(element,index,arr2);
    window.x=10;
},window)

var arr3 = [10,20,30,40];
var result = arr3.every(function(value){
    return value > 5;
});
console.log(result);

var arr4 = [1,2,3];
var arr5 = arr4.map(function(element){
    return element*2;
})
console.log(arr5);