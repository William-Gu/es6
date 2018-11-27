var VElement = function(tagName, props, children) {
    //保证只能通过如下方式调用：new VElement
    if (!(this instanceof VElement)) {
      return new VElement(tagName, props, children);
    }

    //可以通过只传递tagName和children参数
    if (util.isArray(props)) {
      children = props;
      props = {};
    }

    //设置虚拟dom的相关属性
    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
    this.key = props ? props.key : void 666;
    var count = 0;
    this.children.forEach(function(child, i) {
      if (child instanceof VElement) {
          count += child.count;
      } else {
          children[i] = '' + child;
      }
      count++;
    });
    this.count = count;
  }    
  VElement.prototype.render = function() {
    //创建标签
    var el = document.createElement(this.tagName);
    //设置标签的属性
    var props = this.props;
    for (var propName in props) {
        var propValue = props[propName]
        el.setAttribute( propName, propValue)
    }

    //依次创建子节点的标签
    this.children.forEach(function(child) {
        //如果子节点仍然为velement，则递归的创建子节点，否则直接创建文本类型节点
        var childEl = (child instanceof VElement) ? child.render() : document.createTextNode(child);
        el.appendChild(childEl);
    });

    return el;
  }