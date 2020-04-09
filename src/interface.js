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
