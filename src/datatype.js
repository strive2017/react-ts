"use strict";
//原始类型
var bool = true;
var num = 1;
var str = '1';
//数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3, 'abc'];
//元组
var tuple = [1, '1'];
//函数
var add = function (x, y) { return x + y; };
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
