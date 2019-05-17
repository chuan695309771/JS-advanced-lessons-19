/*
    Math.random()  //0-1之间的随机值 不包含1
*/


/*
    json字符串和js对象可以进行相互的转换
    并且js对象可以很容易的渲染到页面中
    
*/
var jsObject = {"username":"zhangsan","age":20};
var ulObject = document.getElementById("list");
for(var i in jsObject) {
    var liNode = document.createElement("li");
    liNode.innerHTML = i + "  " + jsObject[i];
    ulObject.appendChild(liNode);
}