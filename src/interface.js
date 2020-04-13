"use strict";
//只读属性 readonly
//可选属性 age? : number
//字符串索引签名 [x : string] :any
function render(result) {
    result.data.map(function (item) {
        console.log(item.id, item.name);
    });
}
var result = {
    data: [
        { id: 1, name: 'aaa' },
        { id: 2, name: 'bbb' }
    ]
};
render(result);
var chars = ['a', 'b', 'c'];
// 函数类型
var abc;
var adds = function (a, b) { return a + b; };
//对全局暴露一个lib，是一个单例，如果要创建多个lib就需要用函数封装
// let lib : Lib = (()=>{}) as Lib;
// lib.version = '1.0';
// lib.doSomething =  () =>{}
function getLib() {
    var lib = (function () { });
    lib.version = '1.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var lib2 = getLib();
lib2();
lib2.doSomething();
