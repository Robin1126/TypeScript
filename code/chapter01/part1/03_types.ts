// 字面量
let a :10;
a = 10;
// a = 11; 报错，因为不能修改，只能赋值这个值，类似常量
let b : "male" | "female"; // 只能是male或者female

let c : boolean | string; // 限制了类型，联合类型

let d : any; //任意类型，相当于关闭了ts的类型检测，一般也不使用
// 如果声明变量不带类型，那么ts自动标记为any
d = 10;
d = "hello";
d = true; 

let e : unknown; // 安全的any，不能直接赋值给其它变量
e = 10;
e = "hello";
e = true;
let s : string;
if(typeof e === "string") {
	s = e;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/**
 * 语法：
 * 	变量 as 类型；
 *  <类型> 变量
 */
s = e as string;
s = <string>e;

// void 表示为空，以函数类型，表示没有返回值的函数
// void 在js中还可以用在 <a href="javascript:void(0)" onclick="alert('hello')"> 中，不跳转页面
function fn(num) {
	if(num > 0) {
		return true;
	}else {
		return 123;
	}
}

// never 永远不会返回结果
function fn2() : never {
	throw new Error('something wrong！'); // fn2运行的时候，就抛出错误
}

// object和json的区别，json中的属性也是用双引号括起来的，表示整个是一个字符串

