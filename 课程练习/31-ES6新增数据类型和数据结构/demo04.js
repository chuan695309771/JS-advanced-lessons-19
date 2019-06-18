let m1 = new Map([
    ["username","zhangsan"],
    ["age",20],
    ["sex","male"]
]);
console.log(m1.size);
for(let i of m1){
    console.log(i);
}
m1.set("weight","60kg");
m1.get("username");
m1.delete("username");
m1.has("sex");