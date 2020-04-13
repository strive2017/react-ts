"use strict";
//函数定义
// 1:利用类型推断定义
function add1(x, y) {
    return x + y;
}
// 2:通过变量定义函数类型
var add2;
// js对函数个数无要求，ts中对形参和实参必须一一对应
// add1(1) 
//如果是定义了可选参数，那么可以不传,可选参数必须位于必选参数之后
function add5(x, y) {
    return y ? x + y : x;
}
add5(1);
//可以像es6一样为默认参数传入一个默认值，必选参数前的默认值参数必须传undefined来获取默认值
function add6(x, y, z, q) {
    if (y === void 0) { y = 1; }
    if (q === void 0) { q = 2; }
    return x + y + z + q;
}
add6(1, undefined, 1);
// add6(x: number, y: number | undefined, z: number, q?: number): number
//剩余参数
function add7(x) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    return x + other.reduce(function (pre, cur) { return pre + cur; });
}
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var fist = rest[0];
    if (typeof fist === "string") {
        return rest.join('');
    }
    if (typeof fist === "number") {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add8(1, 2, 3, 4, 5));
console.log(add8('a', 'b', 'c'));
