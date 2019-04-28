class guQuery{
  constructor(node){
    if(node.indexOf('#') === 0){
      this.node = document.getElementById('class');
    }else if(node.indexOf('.') === 0){
      this.node = document.getElementsByClassName('class');
    }else if(node === 'body'){
      this.node = document.body;
    }else{
      this.node = node.nodeType === 1 ? node : document.querySelector(node);
    }
    if(!this.node){
      throw new Error('Sorry, I have not found the Dom Node.')
    }
  }
  find(nodeName){
    return this.node.querySelectorAll(nodeName);
  }
  siblings(){
    return Array.prototype.filter.call(this.node.parentNode.children, (child) =>
      child !== el
    );
  }
  prev(){
    return this.node.previousElementSibling;
  }
  next(){
    return this.node.nextElementSibling;
  }
  val(){
    return this.node.value;
  }
  contents(){
    return this.node.contentDocument;
  }
  data(dataName){
    return this.node.getAttribute(dataName);
  }
  attr(attrName){
    return this.node.getAttribute(attrName);
  }
}

let gu = new guQuery(node);
let $ = gu;

export default {gu, $};
//https://github.com/nefe/You-Dont-Need-jQuery/blob/master/README.zh-CN.md