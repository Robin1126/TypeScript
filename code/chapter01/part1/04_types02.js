// object 是一个js对象
var a;
a = {};
a = function () {
};
// {}用来指定对象中包括什么属性
// 语法： {属性名：属性值，属性名：属性值}；
// 如果一个属性名后面带有？就表示该属性是可选的
var b;
b = { name: 'jojo' };
// [propName : string] : any 表示属性是可选的，属性名是string, 属性值是任意 []表示数组，可以不止一个属性
var c;
c = { name: "bubu", age: 18 };
c = { name: "bubu" };
var c1;
c1 = { name: "yier", age: 19, 456: 123 };
// 设置函数结构的类型声明
/**
 *  语法：(形参：类型， 形参：类型...)=>返回值类型
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
// 用来限制数组的类型
/**
 * 	数组类型的两种声明方式
 * 	1. 类型[]
 * 	2. Array<类型>
 */
var e;
e = [1, 2, 3];
var f;
f = [1, 2, 3, 4];
/**
 * 元组，元组就是固定长度的数组
 * 语法 [类型，类型] 写多少个就是有多少元素
 */
var g;
g = ["hello", 123];
/**
 * enum 枚举类，类似Java
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'yier',
    gender: 1
};
console.log(i.gender === Gender.Male);
// & 表示同时
// 这里限制js对象的属性类型
var j;
var m;
m = 1; // 限制了m的范围
