class Adaptee{
  specificRequest(){
    return 'German'
  }
}
class Target {
  constructor(){
    this.adaptee = new Adaptee()
  }
  request(){
    let info = this.daptee.specificRequest()
    return `${info} - > - China`
  }
}
let target = new Target()
let res = target.request()
console.log(res);
