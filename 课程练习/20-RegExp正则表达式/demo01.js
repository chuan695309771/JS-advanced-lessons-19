var reg1 = /[bcf]at/gi;

var reg2 = new RegExp(/[bcf]at/,"gi");
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));

var str1 = "fat Fat bat cat jkdfdj llo";
console.log(str1.match(reg1));

