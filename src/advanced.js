"use strict";
// 类型检查机制
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1.类型推断
//基础类型推断
/**
 * 类型推断
 * 从右向左
 */
var a = 1;
var b = [1];
var c = function (x) {
    if (x === void 0) { x = 1; }
    return x + 1;
};
/**
 * 类型推断
 * 从左向右 （根据上下文）
 */
window.onkeydown = function (event) {
    // console.log(event)
};
/**
 * 类型断言
 */
//ts允许类型断言来覆盖他的推断
// interface Foo{
//     bar:number
// }
// let foo = {} as Foo
// foo.bar = 1
/**
 * 以上使用`as`的方式，不会提示是否缺失定义`bar`属性，
 * 最好的方式是在定义时就指明类型
 */
//2.类型兼容性
//当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X兼容Y：X（目标类型）= Y（源类型）
var s = 'a';
var a1 = { a: 1, b: 2 };
var a2 = { a: 1, b: 2, c: 3 };
function hof(handel) {
    return handel;
}
//1参数个数
var handel1 = function (a) { };
hof(handel1);
// 可选参数和剩余参数
var aa = function (p1, p2) { };
var bb = function (p1, p2) { };
var cc = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
//1.固定参数可以兼容可选参数和剩余参数
//2.可选参数不兼容固定参数和剩余参数
//3.剩余参数可以兼容固定参数和可选参数
//2参数类型 类型要一致  成员多的可以兼容成员少的
var handel3 = function (a) { };
var p3d = function (point) { };
var p2d = function (point) { };
//3返回值类型  目标函数的返回值类型必须与源函数返回值类型相同。或者为其子类型   成员少的可以兼容成员多的
var f1 = function () { return ({ name: 'a' }); };
var f2 = function () { return ({ name: 'a', l: 's' }); };
function overload(a, b) { }
//枚举类型兼容
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Bule"] = 1] = "Bule";
})(Color || (Color = {}));
//1枚举类型和数值类型是可以完全兼容
var fruit = 1;
var nu1 = Fruit.Apple;
//2枚举之间是完全不兼容的
// let color : Color.Red = Fruit.Apple
//类兼容性
var A = /** @class */ (function () {
    function A(p, q) {
        this.id = 1;
    }
    return A;
}());
var B = /** @class */ (function () {
    function B(p) {
        this.id = 2;
    }
    B.s = 1;
    return B;
}());
var aaa = new A(1, 2);
var bbb = new B(1);
//1比较两个类的时候，静态成员和构造函数不参与比较 如果两个类具有相同是实例成员，那他们的实例就可以完全相互兼容
//2如果2个类有私有属性，那2个类是不能兼容的
//3父类和子类是可以完全兼容的
var A1 = /** @class */ (function (_super) {
    __extends(A1, _super);
    function A1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A1;
}(A));
var a111 = new A1(1, 2);
a111 = aaa;
aaa = a111;
var ob1 = {};
var ob2 = {};
ob1 = ob2;
//如果2个泛型函数的定义相同，但是没有指定类型参数，就可以相互兼容
var logA = function (x) {
    return x;
};
var logB = function (y) {
    return y;
};
logA = logB;
//总结 ： 结构之间兼容：成员少的兼容成员多的   函数之间兼容：参数多的兼容参数少的
//3.类型保护
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["week"] = 1] = "week";
})(Type || (Type = {}));
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('helloJava');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('helloJavaScript');
    };
    return JavaScript;
}());
//类型保护函数
function isJava(lang) {
    return lang.helloJava !== undefined;
}
function getLanguage(type) {
    var lang = type == Type.Strong ? new Java() : new JavaScript();
    //类型断言
    // if(lang.helloJava){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }
    //Ts能够在特定的区块中保证变量属于某种确定的类型，可以在此区块中放心的引用此类型的属性，或者调用此类型的方法
    // instanceof 可以判断一个实例是不是属于某个类
    // if(lang instanceof Java){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }
    // in 可以判断一个属性是不是属于某个对象
    // if("java" in lang){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }
    //typeof 可以判断一个基本的类型 x:number|string
    // if(typeof x  === 'string'){
    //     x.length
    // }else{
    //     x.toFixed(2)
    // }
    // if(isJava(lang)){
    //     lang.helloJava()
    // }else{
    //     lang.helloJavaScript()
    // }
    return lang;
}
getLanguage(Type.Strong);
//总结
// 不同的判断方法有不同的使用场景：
// typeof：判断一个变量的类型
// instanceof：判断一个实例是否属于某个类
// in：判断一个属性是否属于某个对象
// 类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内
