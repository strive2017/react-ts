//数字枚举 可以反向映射
enum Role {
    a,
    b,
    c,
    d,
    e
}
console.log(Role.b)

//字符串枚举 不可以反向映射
enum Message{
    Success = '恭喜你成功',
    Fail = '很遗憾'
}

//异构枚举 容易混淆，不建议使用
enum Answer{
    N,
    Y = 'yes'
}


//枚举成员
enum Char{
    // const
    a,
    b = Char.a,
    c = 1+2,
    // computed
    d = Math.random(),
    e = '112'.length,
    // f
}


//常量枚举
const enum Month {
    jan,
    feb,
    aac
}

let k = [Month.jan, Month.feb, Month.aac]


//枚举类型  (1枚举类型没有任何初始值 2所有成员都是数字枚举 3所有成员都是字符串枚举 3中情况下枚举和枚举成员可以作为单独类型存在)
enum E {a,b}
enum F {a = 0, b = 1}
enum G { a = '1', b = '2'}

let e : E = 3 
let f : F = 3
// e === f
let e1 : E.a 
let e2 : E.b
let e3 : E.a

let g1 : G = G.b //字符串取值只能是自身
let g2 : G.a