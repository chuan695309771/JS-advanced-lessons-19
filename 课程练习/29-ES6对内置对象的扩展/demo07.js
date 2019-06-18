var obj = {
    objName:"obj1",
    showName:function(){
        var intervalId = setTimeout(function(){
            console.log(this);
            console.log(this.objName);
        },3000);
    }
}
obj.showName();