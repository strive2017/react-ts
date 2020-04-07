//原始类型
let bool : boolean = true
let num : number = 1
let str : string = '1'

//数组
let arr1 : number[] = [1,2,3]
let arr2 : Array<number> = [1,2,3]
let arr3 : Array<number | string> = [1,2,3,'abc']

//元组
let tuple : [number, string] = [1,'1']

//函数
let add = (x:number,y:number):number => x+y

let compute : (x:number, y:number) => number
compute = (a,b)=>a+b

//对象
let obj : {x:number,y:string} = { x:1, y:'a'}
obj.x = 1

//symbol 唯一值，s1 !== s2
let s1: symbol = Symbol()
let s2 = Symbol()

//undefined strictNullChecks
let un : undefined = undefined
let nu : null = null

//void 没有任何返回值的类型
let noReturn = () => {}

//any
let x 

//never 永远不会有返回值的类型
let error = () =>{
    throw new Error('error')
}

let endless = () =>{
    //死循环
    while(true){}
}