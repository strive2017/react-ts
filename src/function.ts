//函数定义
// 1:利用类型推断定义
function add1(x:number, y:number){
    return x + y
}
// 2:通过变量定义函数类型
let add2 : (x:number,y:number) => number

//3:通过类型别名来定义函数类型
type add3 = (x:number,y:number) => number

//4:通过接口来定义函数类型
interface add4{
    (x:number,y:number) : number
}


// js对函数个数无要求，ts中对形参和实参必须一一对应
// add1(1) 


//如果是定义了可选参数，那么可以不传,可选参数必须位于必选参数之后
function add5(x:number, y?:number){
    return y ? x+y : x
}
add5(1)


//可以像es6一样为默认参数传入一个默认值，必选参数前的默认值参数必须传undefined来获取默认值

function add6(x:number, y = 1, z:number, q = 2 ) {
    return x + y + z + q
}
add6(1,undefined,1)

// add6(x: number, y: number | undefined, z: number, q?: number): number


//剩余参数
function add7(x:number, ...other:number[]) {
    return x + other.reduce((pre,cur) => pre + cur)
}


//函数重载
//ts中函数重载，要求先定义名称相同的函数声明,谈后在类型最宽泛的版本中实现重载
function add8(...rest:number[]) : number;
function add8(...rest:string[]) : string;
function add8(...rest: any[]) : any { 
    let fist = rest[0];
    if(typeof fist === "string"){
        return rest.join('')
    }
    if(typeof fist === "number"){
        return rest.reduce((pre,cur) => pre + cur)
    }
}
console.log(add8(1,2,3,4,5))
console.log(add8('a','b','c'))