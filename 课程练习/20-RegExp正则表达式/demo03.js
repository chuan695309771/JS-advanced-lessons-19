/*
    分组可以看做当前正则表达式的子规则，
    分组匹配得到的内容，可以在exec方法调用的
    返回结果中查看
*/

var reg1 = /(ab\d)(\def)\d/gi;
var str = "abc31ef12";
var result = reg1.exec(str);
console.log(result);


/*
    反向引用，通过\m 来引用前面出现的分组
    m 表示前面出现的第几个分组
*/
var reg2 = /(\d)a\1/gi;
var reg3 = /(\d)a(\d)/gi;

var str2 = "2a1ssss";
var result = str2.replace(reg2,"x");
console.log(result);
