//只读属性 readonly
//可选属性 age? : number
//字符串索引签名 [x : string] :any


// 变量的形状必须和接口的形状保持一致
// 必选属性 => "：" 带冒号的属性是必须存在的，不可以多也不能少
// 只读属性 => " readonly " 对象的字段只在创建的时候赋值，注意哦，注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// 任意属性 [ propName : 类型 ] : any 表示定义了任意属性取string 类型的值 一旦定义了任意类型，那么确定属性和可选属性都必须是它的子属性
interface List {
    id :number,
    name : string,
    // [x : string] :any
    // age? : number
}

interface Result {
    data : List[]
}

function render(result:Result){
    result.data.map(item =>{
        console.log(item.id,item.name)
    })
}

let result = {
    data : [
        {id:1,name:'aaa'},
        {id:2,name:'bbb'}
    ]
}

render(result)


// render({data : [
//     {id:1,name:'aaa',age:16},
//     {id:2,name:'bbb'}
// ]})



//接口个数不确定，定义可索引接口
//字符串可索引接口定义
interface StringArray {
    [index:number] : string
}

let chars : StringArray = ['a','b','c']

//js会进行类型转换
interface Name{
    [x:string] : string
    [y:number] : string
}



// 函数类型

let abc : (x:number, y:number) => number

interface Add{
    (x:number, y:number) : number
}

// 类型别名
type Adds = (x:number, y:number) => number


let adds : Adds = (a,b) => a + b

//混合类型接口
interface Lib{
    ():void,
    version : string,
    doSomething() : void;
}


//对全局暴露一个lib，是一个单例，如果要创建多个lib就需要用函数封装
// let lib : Lib = (()=>{}) as Lib;
// lib.version = '1.0';
// lib.doSomething =  () =>{}


function getLib(){
    let lib : Lib = (()=>{}) as Lib;
    lib.version = '1.0';
    lib.doSomething =  () =>{}
    return lib;
}

let lib1 = getLib()
lib1();
lib1.doSomething()

let lib2 = getLib()
lib2();
lib2.doSomething()