//只读属性 readonly
//可选属性 age? : number
//字符串索引签名 [x : string] :any


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