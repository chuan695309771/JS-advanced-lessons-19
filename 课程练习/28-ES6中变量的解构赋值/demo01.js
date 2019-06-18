let [,,third] = [1,2,3];
console.log(third);
/*
    ...理解为剩余运算符，其他元素匹配完成后剩余下的元素
*/
let [head,...tail] = [1,2,3,4];
console.log(head,tail);

/*
    当左侧结构元素个数大于右侧时，未匹配的变量会显示undefined
*/
let [d,e,...f] = ["a"];
console.log(d,e,f);