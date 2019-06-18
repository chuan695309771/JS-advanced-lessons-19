function fn1({x=0,y=0} = {}){
    return [x,y];
}
console.log(fn1());
console.log(fn1({x:1,y:2}));