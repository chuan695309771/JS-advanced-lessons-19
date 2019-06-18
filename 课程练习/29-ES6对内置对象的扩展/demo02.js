let reg1 = /xyz/gi;
let reg2 = new RegExp("xyz",'gi');
let reg3 = new RegExp(/xyz/gi);
let reg4 = new RegExp(/xyz/gi,'i');

/*正则表达式对象.flags获取正则表达式修饰符 */
console.log(reg1.flags);


/*
    sticky y修饰符 它会从上一次匹配成功的结束位置开始匹配
*/
let str = "aaa_aa_a";
let reg5 = /a+/g;
let reg6 = /a+/y;
console.log(reg5.exec(str));
console.log(reg5.exec(str));

console.log(reg6.exec(str));
console.log(reg6.exec(str));