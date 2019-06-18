let str = new String("abcdef");
let [a,b,c,d] = str;
console.log(a,b,c);

let [e,f] = "ef";
console.log(e,f);

/*number对象上会有toString函数*/
let num = new Number(5);
let {toString: s1} = num;
console.log(s1);