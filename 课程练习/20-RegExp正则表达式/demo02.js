/*
    \d 数字
    \s 空格
    . 任意的一个字符
    \w [A-Za-z0-9_]
*/

var reg = /\d/gi;

/* 

*/

var reg = /[xyz]a/gi;
var str1 = "xabjiya";
str1.replace(reg, "m");

/*
    ^a 以特定字符起始
    b$ 以特定的字符结束
*/

/*
    量词
    a* 字符出现0次 多次
    a+ 字符出现1次 多次
    a? 字符出现0次 一次
*/