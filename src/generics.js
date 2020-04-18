"use strict";
//泛型 
//函数或者类支持多种数据类型
function log(values) {
    console.log(values);
    return values;
}
//联合类型
function log1(values) {
    console.log(values);
    return values;
}
//any类型 any类型丢失了一些信息（类型之间的一些关系，忽略了输入参数的类型和函数返回值类型必须是一致的）
function log2(values) {
    console.log(values);
    return values;
}
//泛型  不预先确定的数据类型，具体的类型在使用的时候才能确定
//用泛型定义函数
function log3(values) {
    console.log(values);
    return values;
}
log3(['a', 'b', 'c']);
log3(['a', 'b', 'c']); //ts类型推断
var log4 = function (values) { return values; };
log4(1);
//当泛型约束整个接口，实现接口的时候必须约定一个类型,如果不指定类型，可以在接口定义的时候给默认类型 （interface Log2<T : string>）
var mylog = function (values) { return values; };
mylog(1);
// 泛型可以约束类成员
// 注意
// 泛型不能应用与类的静态成员 static
var Log5 = /** @class */ (function () {
    function Log5() {
    }
    Log5.prototype.run = function (values) {
        console.log(values);
        return values;
    };
    return Log5;
}());
var log5 = new Log5();
log5.run(1);
//如果实例化不指定类型参数的时候，就可以传入任意类型值
var log6 = new Log5();
log6.run(1);
log6.run('1');
log6.run({ values: 1 });
function log7(values) {
    console.log(values, values.length);
    return values;
}
log7([1, 2, 3]);
log7('123');
log7({ length: 1 });
// 泛型的好处
// 1.函数和类可以支持多种类型，增加的程序的可扩展性
// 2.不必写多条函数重载，联合类型声明，增强代码的可读性
// 3.灵活控制类型之间的约束关系
// 总结：
// 泛型不仅可以保持类型的一致性，又不失程序的灵活性，同时也可以通过泛型约束，控制类型之间的约束。从代码的上来看，可读性，简洁性，远优于函数重载，联合类型声明以及 any 类型的声明。
