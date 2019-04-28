// 高阶段函数实现AOP(面向切面编程)
Function.prototype.before = function (beforefn) {
  let _self = this; // 缓存原函数的引用
  return function () { // 代理函数
      beforefn.apply(this, arguments); // 执行前置函数
      return _self.apply(this, arguments); // 执行原函数
  }
}

Function.prototype.after = function (afterfn) {
  let _self = this;
  return function () {
      let set = _self.apply(this, arguments);
      afterfn.apply(this, arguments);
      return set;
  }
}

let func = () => console.log('func');
func = func.before(() => {
  console.log('===before===');
}).after(() => {
  console.log('===after===');
});

func();