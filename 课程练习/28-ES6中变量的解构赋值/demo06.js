let json1 = {
    "username":"zhangsan",
    "courseList":["高等数学","大学英语"],
    "age":20
}
/*JSON MATH都是对象，没有构造函数 */
let jsonStr = JSON.stringify(json1);
console.log(jsonStr);
json1 = JSON.parse(jsonStr);
console.log(typeof json1);


let json1 = {
    "username":"zhangsan",
    "courseList":["高等数学","大学英语"],
    "age":20
}
let {username} = json1;
console.log(username);

// let{username,age}