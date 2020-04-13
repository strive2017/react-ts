"use strict";
//类和接口的关系
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
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    Asian.prototype.sleep = function () { };
    return Asian;
}());
var boy = {
    name: 'hh',
    eat: function () { },
    run: function () { },
    cry: function () { }
};
//接口继承类  相当于接口把类的成员抽象出来，只有类的成员结构，没有具体实现
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        // private state2 = 0
    }
    return Auto;
}());
//类实现AutoInterface接口
var C = /** @class */ (function () {
    function C() {
        this.state = 1;
    }
    return C;
}());
//Auto的子类也可以实现AutoInterface这个接口
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
//总结
//1.接口之间可以相互继承（实现接口的复用）
//2.类之间可以相互继承（实现方法和属性复用）
//3.接口可以通过类来实现，但是接口只能约束类的公有成员
//4.接口可以抽离出类的成员 （包含 公共成员 私有成员 受保护成员 ）
