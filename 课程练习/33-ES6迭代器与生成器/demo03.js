function* helloGenerator() {
    yield "hello";
    yield "world";
    return "ending";
}
var iterator = helloGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());