function createIterator(arr) {
    var i = 0;
    return {
        next:function() {
            return i <arr.length ?
            {value:arr[i++],done:true}:
            {value:undefined,done:false};
        }
    } 
}
var iterator = createIterator([1,2,3,4]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());