var jsObject = {
    "username":"zhangsan",
    "age":20,
    "address":{"add":"石家庄","addcode":"11322"}
}
var jsonStr = JSON.stringify(jsObject);
console.log(jsonStr);
console.log(typeof jsonStr);
