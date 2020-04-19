// 交叉类型（将多个类型合并为一个类型，新类型具有所有类型的所有特性，适合对象混用的场景）注意，取所有类型的并集

interface DogInterfacce{
    run() : void
}

interface CatInterface{
    jump() : void
}

let pet : DogInterfacce & CatInterface = {
    run(){},
    jump(){}
}
//联合类型  （申明的类型并不确定，可以为多个类型中的一个）注意，取所有类型的交集
let j : number | string = 1
let h : 'a' | 'b' | 'c' = 'b' //字面量类型 （限定变量的类型同时限定变量的取值在某一个特定范围内）

//接口可以被多重实现（implements）,抽象类只能被单一继承（extends）
class DogA implements DogInterfacce{
    run(){}
    eat(){}
}

class CatA implements CatInterface{
    jump(){}
    eat(){}
}

enum Master {Boy,Girl}

function getPet (type:Master) {
    let pet = type == Master.Boy ? new DogA() : new CatA()
    pet.eat()
    return pet
}



interface Square{
    kind : 'square'
    size : number
}

interface Rectangle{
    kind : 'rectangle'
    width : number
    height : number
}

interface Circle {
    kind : 'circle'
    r : number
}


type Shape = Square | Rectangle | Circle //类型别名

function area(s:Shape){
    switch (s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.width * s.height
        // case "circle" :
        //     return Math.PI * s.r ** 2
        // default:
        //     return ((e:never) => {throw new Error(e)})(s)
    }
}
//1:用返回值类型约束
//2:用default返回一个验证never的自执行函数
area({ kind : 'circle',r:1})



//索引类型
let objA = {
    a : 1,
    b : 2, 
    c : 3
}

function getValues(objA:any,keys:string[]){
    return keys.map(key => objA[key])
}
console.log(getValues(objA, ['a','b']))  // [1,2]
console.log(getValues(objA, ['e','f']))  // [undefined,undefined]

//keyof T   索引类型的查询操作符 表示类型T的所有公共属性的字面量联合类型
interface Obj {
    a : number,
    b : string
}
let keyA : keyof Obj

//T[K] 索引访问操作符 对象T的属性K所代表的类型
let values : Obj['a']

//T extends U 泛型约束 泛型变量通过继承某个类型获得某些属性

function getValuesA<T, K extends keyof T>(objA:T,keys:K[]) : T[K][]{
    return keys.map(key => objA[key])
}
// console.log(getValuesA(objA, ['a','b']))  // [1,2]
// console.log(getValuesA(objA, ['e','f']))  // [undefined,undefined]


//总结 索引类型可以实现对象属性的查询和访问，然后配合泛型约束就可以实现对象/对象属性/对象属性值之间的约束关系


//映射类型  通过映射类型可以从一个旧的类型生成新的类型

//比如把一个对象中的所有属性设置为只读
interface ObjB{
    a:number
    b:string
    c:boolean
}
type ReadonlyObj = Readonly<ObjB>

type PartialObj = Partial<ObjB>

type PickObj = Pick<ObjB, 'a'|'b'>


//条件类型  由条件表达式所决定的类型

//T extends U ? X : Y  如果类型T可以赋值给类型U，结果是X类型，反之Y
type TypeName<T> = 
    T extends string ? "string" : 
    T extends number ? 'number' : 
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' : 
    T extends Function ? 'function' :
    'object';

type T1 = TypeName<string>
type T2 =  TypeName<string[]>


//分布式条件类型
// (A|B) extends U ? X : Y 
//结果类型会变成多个条件类型的联合类型
//(A extends U ? X : Y) | (B extends U ? X : Y )
type T3 = TypeName<string | number>


//利用这个特性实现类型过滤 
type Diff<T,U> = T extends U ? never : T 
type T4 = Diff<'a'|'b'|'c','a'|'e'>
// Diff<'a', 'a'|'e'> | Diff<'b', 'a'|'e'> | Diff<'c', 'a'|'e'>
//never | 'b' | 'c'


//利用Diff过滤不需要的类型
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string|number|undefined|null>

// Exclude<T,U>
// NonNullable<T>
// Extract<T,U>

type T6 = Extract<'a'|'b'|'c','a'|'e'>

//ReturnType<T>
//ReturnType 接受一个函数类型，并返回这个函数的返回值类型。这里关键在于 (infer R)，返回值类型 R 此时是不能确定的，只有在函数执行之后才知道，是一种延迟推断，所以用 infer 修饰。特殊情况，比如 type T1 = ReturnType<any>，T1 的类型是 any。
type T7 = ReturnType< () => string>


//type和interface 多数情况下有相同的功能，就是定义类型。但有一些小区别：
// type：不是创建新的类型，只是为一个给定的类型起一个名字。type还可以进行联合、交叉等操作，引用起来更简洁。
// interface：创建新的类型，接口之间还可以继承、声明合并。