var arr1 = ['a','b','c','d'];
var arr2 = arr1;
arr1[0] = 'e';
console.log(arr2);

var arr1 = [,2, ,4];
Array.prototype.min = function(){
    return "最小值";
}
console.log(arr1.length);

for(var i in arr1){
    console.log(i,arr1[i]);
}