var a;
a = 10;
// a = "zky"; // 即使TS中有错误，还是可以编译通过
// a = 'hello'; 这个时候就不能赋值为字符串了
var b;
b = 'hello';
// b = 123;
// 如果变量的声明和赋值时同时进行，那么ts可以自动规定变量的类型
var c = false;
// let c : boolean = true
c = true;
// c = 123;
function sum(a, b) {
    return a + b;
}
alert(sum(100, 200));
alert(sum(123, "456"));
function sum1(a, b) {
    return a + b;
}
alert(sum1(123, 456));
