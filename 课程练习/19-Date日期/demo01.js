var date1 =new Date();


var year = date1.getFullYear();
var month = date1.getMonth();


var date2 = new Date();
console.log(date2);

//指明时间日期的字符串,字符串形势很多样化
var date3 = new Date("2019-05-05");
console.log(date3);


//指明一个以毫秒为单位的数字类型
var date4 = new Date(Date.now());
console.log(Date.now());
console.log(date4);


