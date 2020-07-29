"use strict";
// 交叉类型（将多个类型合并为一个类型，新类型具有所有类型的所有特性，适合对象混用的场景）注意，取所有类型的并集
var pet = {
    run: function () { },
    jump: function () { }
};
//联合类型  （申明的类型并不确定，可以为多个类型中的一个）注意，取所有类型的交集
var j = 1;
var h = 'b'; //字面量类型 （限定变量的类型同时限定变量的取值在某一个特定范围内）
//接口可以被多重实现（implements）,抽象类只能被单一继承（extends）
var DogA = /** @class */ (function () {
    function DogA() {
    }
    DogA.prototype.run = function () { };
    DogA.prototype.eat = function () { };
    return DogA;
}());
var CatA = /** @class */ (function () {
    function CatA() {
    }
    CatA.prototype.jump = function () { };
    CatA.prototype.eat = function () { };
    return CatA;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(type) {
    var pet = type == Master.Boy ? new DogA() : new CatA();
    pet.eat();
    return pet;
}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        // case "circle" :
        //     return Math.PI * s.r ** 2
        // default:
        //     return ((e:never) => {throw new Error(e)})(s)
    }
}
//1:用返回值类型约束
//2:用default返回一个验证never的自执行函数
area({ kind: 'circle', r: 1 });
//索引类型
var objA = {
    a: 1,
    b: 2,
    c: 3
};
function getValues(objA, keys) {
    return keys.map(function (key) { return objA[key]; });
}
console.log(getValues(objA, ['a', 'b'])); // [1,2]
console.log(getValues(objA, ['e', 'f'])); // [undefined,undefined]
var keyA;
//T[K] 索引访问操作符 对象T的属性K所代表的类型
var values;
//T extends U 泛型约束 泛型变量通过继承某个类型获得某些属性
function getValuesA(objA, keys) {
    return keys.map(function (key) { return objA[key]; });
}
//type和interface 多数情况下有相同的功能，就是定义类型。但有一些小区别：
// type：不是创建新的类型，只是为一个给定的类型起一个名字。type还可以进行联合、交叉等操作，引用起来更简洁。
// interface：创建新的类型，接口之间还可以继承、声明合并。
