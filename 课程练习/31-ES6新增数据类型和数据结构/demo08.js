function Child(x,y){
    this.x = x;
    this.y = y;
}
function Parent(x,y,z){
    Child.call(this,x,y);
}