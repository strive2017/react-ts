//类和接口的关系

//类类型接口（一个接口可以约束类成员有哪些属性以及他们类型）
//1.类实现接口的时候必须实现接口中所有声明的属性
//2.类可以定义自己的属性（非接口中的属性）
//3.接口只能定义类的公有成员，不能定义类中的私有成员  （不可以 private name）
//4.接口不能定义类的构造函数
interface Human{
    // new (name:string):void
    name:string;
    eat():void;
}

class Asian implements Human{
    constructor(public name:string){
        this.name = name;
    }
    eat(){}
    sleep(){} 
}

//接口的继承 
//接口可以像类一样相互继承，并且一个接口可以继承多个接口
interface Man extends Human{
    run() : void
}

interface Child{
    cry() : void
}

interface Boy extends Man,Child{}

let boy : Boy = {
    name : 'hh',
    eat(){},
    run(){},
    cry(){}
}

//接口继承类  相当于接口把类的成员抽象出来，只有类的成员结构，没有具体实现

class Auto{
    state = 1
    // private state2 = 0
}

//接口抽离类的 公共成员 私有成员 受保护成员
interface AutoInterface extends Auto{}  //这样接口中就有类的state属性

//类实现AutoInterface接口
class C implements AutoInterface{
    state = 1
}

//Auto的子类也可以实现AutoInterface这个接口
class Bus extends Auto implements AutoInterface{
    
    //因为是Auto的子类，继承了state的属性，就不需要另外实现state了
}


//总结
//1.接口之间可以相互继承（实现接口的复用）
//2.类之间可以相互继承（实现方法和属性复用）
//3.接口可以通过类来实现，但是接口只能约束类的公有成员
//4.接口可以抽离出类的成员 （包含 公共成员 私有成员 受保护成员 ）