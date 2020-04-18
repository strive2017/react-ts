// 类型检查机制

//1.类型推断
//基础类型推断
/**
 * 类型推断
 * 从右向左
 */
let a = 1;
let b = [1];
let c = (x=1) => x+1

/**
 * 类型推断
 * 从左向右 （根据上下文）
 */
window.onkeydown = (event:KeyboardEvent) =>{
    // console.log(event)
}

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
let s:string = 'a'
// s = null   //null是string类型的字类型

//接口兼容性 成员少的可以兼容成员多的
interface X{
    a : any,
    b : any
}
interface Y{
    a : any,
    b : any,
    c : any
}

let a1:X = {a:1,b:2}
let a2:Y = {a:1,b:2,c:3}
//a1 = a2
//a2 = a1

//函数兼容性
type Handler = (a:number, b:number) => void

function hof(handel : Handler){
    return handel
}

//1参数个数
let handel1 = (a:number) =>{}
hof(handel1)

// 可选参数和剩余参数
let aa = (p1:number, p2:number) => {}
let bb = (p1?:number, p2?:number) => {}
let cc = (...args:number[]) => {}
//1.固定参数可以兼容可选参数和剩余参数
//2.可选参数不兼容固定参数和剩余参数
//3.剩余参数可以兼容固定参数和可选参数

//2参数类型 类型要一致  成员多的可以兼容成员少的
let handel3 = (a:string) =>{}

interface Point3D{
    x : number,
    y : number,
    z : number
}
interface Point2D{
    x : number,
    y : number
}

let p3d = (point : Point3D) =>{}
let p2d = (point : Point2D) =>{}


//3返回值类型  目标函数的返回值类型必须与源函数返回值类型相同。或者为其子类型   成员少的可以兼容成员多的
let f1 = () => ({name:'a'})
let f2 = () => ({name:'a',l:'s'})

//函数重载兼容
function overload(a:number,b:number) : number;
function overload(a:string,b:string) : string;
function overload(a:any,b:any) : any {}

//枚举类型兼容
enum Fruit{Apple,Banana}
enum Color{Red,Bule}
//1枚举类型和数值类型是可以完全兼容
let fruit : Fruit.Apple = 1 
let nu1 : number = Fruit.Apple
//2枚举之间是完全不兼容的
// let color : Color.Red = Fruit.Apple

//类兼容性
class A { 
    constructor(p:number,q:number){}
    id:number = 1
    // private name:string = ''
}
class B {
    static s = 1
    constructor(p:number){}
    id:number = 2
    // private name:string = ''
}

let aaa = new A(1,2)
let bbb = new B(1)
//1比较两个类的时候，静态成员和构造函数不参与比较 如果两个类具有相同是实例成员，那他们的实例就可以完全相互兼容
//2如果2个类有私有属性，那2个类是不能兼容的
//3父类和子类是可以完全兼容的
class A1 extends A {}
let a111 = new A1(1,2)
a111 = aaa
aaa = a111

//泛型兼容性
interface Empty<T>{
    // v : T
}
let ob1 : Empty<number> = {}
let ob2 : Empty<string> = {}
ob1 = ob2

//如果2个泛型函数的定义相同，但是没有指定类型参数，就可以相互兼容
let logA = <T>(x:T):T =>{
    return x
}
let logB = <U>(y:U):U =>{
    return y
}
logA = logB


//总结 ： 结构之间兼容：成员少的兼容成员多的   函数之间兼容：参数多的兼容参数少的


//3.类型保护
enum Type{
    Strong,
    week
}

class Java {
    helloJava(){
        console.log('helloJava')
    }
    java : any

}

class JavaScript {
    helloJavaScript(){
        console.log('helloJavaScript')
    }
    javaScript : any
}


//类型保护函数
function isJava(lang : Java|JavaScript) : lang is Java{
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type:Type){
    let lang = type == Type.Strong ? new Java() : new JavaScript()

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

    return lang
}

getLanguage(Type.Strong)

//总结

// 不同的判断方法有不同的使用场景：
// typeof：判断一个变量的类型
// instanceof：判断一个实例是否属于某个类
// in：判断一个属性是否属于某个对象
// 类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内