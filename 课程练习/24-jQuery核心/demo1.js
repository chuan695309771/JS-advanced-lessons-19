$("td:first").css("background","red");
$("td:last").css("background","green");

$("td:even").css("background","blue");
$("td:add").css("background","purple");

/*
eq(index)选中特定索引值的元素
gt(index)选中索引值大于index的元素
lt(index)选中索引值小于index的元素
not(selector)从特定集合中排除一些元素
*/

$("td:eq(0)").css("background","black");
$("td:gt(1)").css("background","white");
$("td:lt(3)").css("background","yellow");
$("td:not(#td1)").css("background","pink");


