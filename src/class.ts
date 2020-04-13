//类
class Dog { 
    constructor(name:string){
        this.name = name
    }
    public name : string
    run(){}
    private pri(){}
    protected pro(){}
    readonly legs: number = 4
    static food:string = 'bones'
}
console.log(Dog.prototype) 

let dog = new Dog('wangwang')//
console.log(dog) 
//1.name属性只在实例上不在原型上，实例属性一定要被初始化 
//2.与es6不同的是实例的属性必须有初始值或者在构造函数中初始化
//“类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
//类的继承

class Husky extends Dog{
    constructor(name:string, public color:string){
        super(name)
        this.color = color //this一定要在super调用之后再调用
    }
    // color : string
}

//类的成员修饰符
//1  public   对所有人可见,
//2  private   类对私有成员，私有成员只能在类的本身被调用，不能被类的实例调用，也不能被类的子类调用,如果构造函数私有化后，这个类不就不能被实例化也不能被继承
//3  protected  受保护成员 受保护成员只能在类和子类中被访问不能在实例中访问,如果构造函数设置为受保护成员，这个类就不能被实例化只能被继承
//4  readonly  只读属性,不可更改，一定要被初始化
//5  static  类的静态成员 类的静态成员可以被类或类的子类调用，不能被实例调用

//构造函数中的参数也可以添加修饰符，作用是将参数自动变成实例的属性，这样可以省略类中定定义 （constructor(name:string, public color:string)）



//抽象类 abstract 只能被继承不能被实例化的类
//es6中没有抽象类的概念，ts对es的扩展

abstract class Animal{
    eat(){
        console.log('eat')
    }
    //抽象类中不指定方法的实现，构成一个抽象方法,抽象方法的好处是明确知道子类中有其他实现，就不需要在父类中实现
    //好处 抽离出事物的共性，有利于代码的复用和扩展
    abstract sleep() : void
}
// let animal = new Animal() //不能被实例
class Cat extends Animal{
    sleep(){
        console.log('打呼噜')
    }
}

let cat = new Cat()
cat.eat()

//抽象类可以实现多态
//父类中定义的方法，在多个子类中有不同的实现，程序运行的时候会根据不同的对象实现不同的操作，这样就实现了运行时的绑定

class Fish extends Animal{
    sleep(){
        console.log('边游边睡')
    }
}

let fish = new Fish()

let animal : Animal[] = [cat, fish]
animal.map(item =>{
    item.sleep()//程序执行的时候判断是哪个实例实现不同的方法从而实现多态
})


// ts特殊的this类型 类的成员方法可以返回一个this，方便实现链式调用
class WorkFlow {
    step1(){
        return this
    }
    step2(){
        return this
    }
}
new WorkFlow().step1().step2()

//在继承的时候this类型也可以表现多态（既可以是父类型也可以是子类型）

class MyFlow extends WorkFlow{
    next (){
        return this
    }
}

new MyFlow().next().step1().next().step2()
