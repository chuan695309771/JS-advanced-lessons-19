//原型继承
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
//subObj_First.x=5
console.log(subObj_Second.x);

//构造函数实现的对象-对象的原型继承的原型共享问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 20;
Person.prototype.showName = function(){
    console.log(this.name);
}
function Student(id){
    this.id=id;
}
/*
    person name属性Mike,person.__proto__.age
    person.__proto__,showName
*/ 
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.id,s2.id);
/*
    s1自身上面没有age,s1.__proto__ == Student.prototype
    Student.prototype = person;person对象上没有age属性
    s1.__proto__.__proto__==person.__proto__
    person.__proto__== Person.prototype
*/
console.log(s1.age,s2.age);
console.log(s1.name,s2.name);

