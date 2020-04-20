"use strict";
//类型注解
//作用：相当于强类型语言中的类型声明
//语法：(函数/变量) : type
//ts vs js 区别：变量的类型定义后不可以改变
//原始类型
var bool = true;
var num = 1;
var str = '1';
//数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// let arr3 : Array<number | string> = [1,2,3,'abc']
//元组
var tuple = [1, '1'];
//元祖越界问题
//函数
var add = function (x, y) { return x + y; };
//函数类型
var compute;
compute = function (a, b) { return a + b; };
//对象
var obj = { x: 1, y: 'a' };
obj.x = 1;
//symbol 唯一值，s1 !== s2
var s1 = Symbol();
var s2 = Symbol();
//undefined strictNullChecks
var un = undefined;
var nu = null;
//void 没有任何返回值的类型
var noReturn = function () { };
//any
var x;
//never 永远不会有返回值的类型
var error = function () {
    throw new Error('error');
};
var endless = function () {
    //死循环
    while (true) { }
};
