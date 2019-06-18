/*
    Symbol作为对象的属性名，永远不会重复
    对象[symbol]
    {
        [symbol]:属性值
    }
*/
let obj = {};
obj[s1] = "hello";
// let obj = 