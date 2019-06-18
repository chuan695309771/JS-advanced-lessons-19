/*
    new Promise(function(resolve,reject){
        异步操作
        resolve();异步操作成功时调用
        reject();异步操作失败时调用
    }).then(function(){
        其实就是resolve的函数的定义
    },function(){
        其实是reject函数的定义
    })
*/
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("时间到");
        /* resolve是异步操作成功时的回调函数 */
        resolve();
    },3000);
}).then(function(){
    console.log("resolve被调用")
},function(){

}).catch(function(){
    /*捕获异常的 */
}).finally(function(){
    console.log("不论如何都会执行");
})