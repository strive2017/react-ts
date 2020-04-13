"use strict";
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
//类
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.legs = 4;
        this.name = name;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.pri = function () { };
    Dog.prototype.pro = function () { };
    Dog.food = 'bones';
    return Dog;
}());
console.log(Dog.prototype);
var dog = new Dog('wangwang'); //
console.log(dog);
//1.name属性只在实例上不在原型上，实例属性一定要被初始化 
//2.与es6不同的是实例的属性必须有初始值或者在构造函数中初始化
//“类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
//类的继承
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.color = color; //this一定要在super调用之后再调用
        return _this;
    }
    return Husky;
}(Dog));
//类的成员修饰符
//1  public   对所有人可见,
//2  private   类对私有成员，私有成员只能在类的本身被调用，不能被类的实例调用，也不能被类的子类调用,如果构造函数私有化后，这个类不就不能被实例化也不能被继承
//3  protected  受保护成员 受保护成员只能在类和子类中被访问不能在实例中访问,如果构造函数设置为受保护成员，这个类就不能被实例化只能被继承
//4  readonly  只读属性,不可更改，一定要被初始化
//5  static  类的静态成员 类的静态成员可以被类或类的子类调用，不能被实例调用
//构造函数中的参数也可以添加修饰符，作用是将参数自动变成实例的属性，这样可以省略类中定定义 （constructor(name:string, public color:string)）
//抽象类 abstract 只能被继承不能被实例化的类
//es6中没有抽象类的概念，ts对es的扩展
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
// let animal = new Animal() //不能被实例
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sleep = function () {
        console.log('打呼噜');
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.eat();
//抽象类可以实现多态
//父类中定义的方法，在多个子类中有不同的实现，程序运行的时候会根据不同的对象实现不同的操作，这样就实现了运行时的绑定
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.sleep = function () {
        console.log('边游边睡');
    };
    return Fish;
}(Animal));
var fish = new Fish();
var animal = [cat, fish];
animal.map(function (item) {
    item.sleep(); //程序执行的时候判断是哪个实例实现不同的方法从而实现多态
});
// ts特殊的this类型 类的成员方法可以返回一个this，方便实现链式调用
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1().step2();
//在继承的时候this类型也可以表现多态（既可以是父类型也可以是子类型）
var MyFlow = /** @class */ (function (_super) {
    __extends(MyFlow, _super);
    function MyFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyFlow.prototype.next = function () {
        return this;
    };
    return MyFlow;
}(WorkFlow));
new MyFlow().next().step1().next().step2();
