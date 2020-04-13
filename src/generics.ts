//泛型 
//函数或者类支持多种数据类型

//函数重载
function log(values:string) : string;
function log(values:string[]) : string[];
function log(values:any) : any{
    console.log(values)
    return values
}

//联合类型
function log1(values : string|string[]) : string|string[]{
    console.log(values)
    return values
}

//any类型 any类型丢失了一些信息（类型之间的一些关系，忽略了输入参数的类型和函数返回值类型必须是一致的）
function log2(values : any) : any {
    console.log(values)
    return values
}

//泛型  不预先确定的数据类型，具体的类型在使用的时候才能确定
//用泛型定义函数
function log3<T>(values : T) : T{
    console.log(values)
    return values
}
log3<string[]>(['a','b','c'])
log3(['a','b','c'])//ts类型推断

//用泛型定义函数类型
type Log = <T>(values : T) => T

let log4 : Log = (values) => { return values}
log4<number>(1)


//泛型定义接口
interface Log1{
    <T>(values:T) : T //和类型别名的命名方式等价
}

//泛型约束整个接口
interface Log2<T>{
    (values:T) : T 
}

//当泛型约束整个接口，实现接口的时候必须约定一个类型,如果不指定类型，可以在接口定义的时候给默认类型 （interface Log2<T : string>）
let mylog : Log2<number> = (values)=>{return values}
mylog(1)


// 泛型可以约束类成员
// 注意
// 泛型不能应用与类的静态成员 static
class Log5<T>{
    run(values:T){
        console.log(values)
        return values
    }
}

let log5 = new Log5<number>()
log5.run(1)
//如果实例化不指定类型参数的时候，就可以传入任意类型值
let log6 = new Log5()
log6.run(1)
log6.run('1')
log6.run({values:1})

//泛型约束 泛型T继承接口获得length属性，这个时候T就有了约束，输入必须拥有length属性
interface Length{
    length : number
}
function log7<T extends Length>(values:T){
    console.log(values, values.length)
    return values
}
log7([1,2,3])
log7('123')
log7({length:1})


// 泛型的好处
// 1.函数和类可以支持多种类型，增加的程序的可扩展性
// 2.不必写多条函数重载，联合类型声明，增强代码的可读性
// 3.灵活控制类型之间的约束关系

// 总结：
// 泛型不仅可以保持类型的一致性，又不失程序的灵活性，同时也可以通过泛型约束，控制类型之间的约束。从代码的上来看，可读性，简洁性，远优于函数重载，联合类型声明以及 any 类型的声明。