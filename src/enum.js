"use strict";
//数字枚举 可以反向映射
var Role;
(function (Role) {
    Role[Role["a"] = 0] = "a";
    Role[Role["b"] = 1] = "b";
    Role[Role["c"] = 2] = "c";
    Role[Role["d"] = 3] = "d";
    Role[Role["e"] = 4] = "e";
})(Role || (Role = {}));
console.log(Role.b);
//字符串枚举 不可以反向映射
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\u6210\u529F";
    Message["Fail"] = "\u5F88\u9057\u61BE";
})(Message || (Message = {}));
//异构枚举 容易混淆，不建议使用
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
//枚举成员
var Char;
(function (Char) {
    // const
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 3] = "c";
    // computed
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '112'.length] = "e";
    // f
})(Char || (Char = {}));
var k = [0 /* jan */, 1 /* feb */, 2 /* aac */];
//枚举类型  (1枚举类型没有任何初始值 2所有成员都是数字枚举 3所有成员都是字符串枚举 3中情况下枚举和枚举成员可以作为单独类型存在)
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "1";
    G["b"] = "2";
})(G || (G = {}));
var e = 3;
var f = 3;
// e === f
var e1;
var e2;
var e3;
var g1 = G.b; //字符串取值只能是自身
var g2;
