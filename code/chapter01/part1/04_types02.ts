// object 是一个js对象
let a : object;
a = {};
a = function () {
	
}

// {}用来指定对象中包括什么属性
// 语法： {属性名：属性值，属性名：属性值}；
// 如果一个属性名后面带有？就表示该属性是可选的
let b : {name : string}; 
b =  {name : 'jojo'};

// [propName : string] : any 表示属性是可选的，属性名是string, 属性值是任意 []表示数组，可以不止一个属性
let c : {name:string, age?:number};
c = {name:"bubu",age:18};
c = {name:"bubu"};
let c1 : {name:string, [propName:number | string]:any};
c1 = {name:"yier",age:19, 456:123}

// 设置函数结构的类型声明
/**
 *  语法：(形参：类型， 形参：类型...)=>返回值类型
 */
let d : (a:number, b:number)=>number; 
d = function(n1,n2): number {
	return n1 + n2;
}

// 用来限制数组的类型
/**
 * 	数组类型的两种声明方式
 * 	1. 类型[]
 * 	2. Array<类型>
 */
let e : number[];
e = [1,2,3];

let f : Array<number>;
f = [1,2,3,4];

/**
 * 元组，元组就是固定长度的数组
 * 语法 [类型，类型] 写多少个就是有多少元素
 */
let g : [string, number];
g = ["hello", 123];

/**
 * enum 枚举类，类似Java
 */
enum Gender{
	Male,
	Female
}
let i : {name : string, gender: Gender};
i = {
	name : 'yier',
	gender: 1
}
console.log(i.gender === Gender.Male);

// & 表示同时
// 这里限制js对象的属性类型
let j: {name : string} & { age : number};

// 类型的别名
type myType = 1 | 2 | 3; // 现在mytype就是string
let m : myType;
m = 1; // 限制了m的范围
