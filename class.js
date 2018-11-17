class Animal{
  constructor(name){
    this.name = name
  }
  eat(){
    console.log(`${this.name} can eat.`);
  }
}
class Dog extends Animal{
  constructor(name){
    super(name) //构造Animal参数constructor
    this.name = name
  }
  bark(){
    console.log(`${this.name} can bark.`);
  }
}

var hashiqi = new Dog('hashiqi');
hashiqi.eat()
hashiqi.bark()