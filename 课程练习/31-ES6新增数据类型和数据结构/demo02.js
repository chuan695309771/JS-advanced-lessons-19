/*
    Symbol.for()首先查看是否存在该描述信息的Symbol变量
    存在的话直接获取，不存在的话会重建一个Symbol
*/
let s1 = Symbol("foo");
console.log(Symbol.for("foo") == Symbol.for("foo"));
