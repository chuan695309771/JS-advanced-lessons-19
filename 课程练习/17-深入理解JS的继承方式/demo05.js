function Person(username,age){
    this.username = username;
    this.age = age;
}
Person.prototype.constructor == Person;
var person = new Person("zhangsan",20);
person.constructor == Person;

