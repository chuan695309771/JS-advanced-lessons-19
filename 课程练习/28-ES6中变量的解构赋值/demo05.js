let [x,y] = ['a','b'];
[y,x] = [x,y];
console.log(x,y);

function example(){
    return [1,2,3];
}
let [a,b,c] = example();
console.log(a,b,c);