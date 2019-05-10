/*
    String.prototype
        str.replace(正则表达式,"替换成的内容");
        str.match(正则表达式)
            返回值是一个数组或者是null
            [整个正则匹配到的内容，分组匹配到的内容，开始匹配位置的索引]
        str.search(正则表达式)
            在str当中检索符合正则表达式规则的内容，如果检索到了返回其第一个字符出现的位置，如果没有返回-1；

    RegExp.prototype
        reg.test(字符串)
            验证字符串是否符合正则表达式规则，符合返回true，不符合返回false;
        reg.exec(字符串)
            返回数组        
*/

var reg = /abc\d/gi;
var str = "kkafd ssabc2";
var result = str.match(reg);
console.log(result);