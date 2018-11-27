function diff(oldTree, newTree) {
    //节点的遍历顺序
    var index = 0; 
    //在遍历过程中记录节点的差异
    var patches = {}; 
    //深度优先遍历两棵树
    dfsWalk(oldTree, newTree, index, patches); 
    return patches; 
}
function dfsWalk(oldNode, newNode, index, patches) {
    var currentPatch = [];
    if (newNode === null) {
        //依赖listdiff算法进行标记为删除
    } else if (util.isString(oldNode) && util.isString(newNode)) {
        if (oldNode !== newNode) {
            //如果是文本节点则直接替换文本
            currentPatch.push({
                type: patch.TEXT,
                content: newNode
            });
        }
    } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
        //节点类型相同
        //比较节点的属性是否相同
        var propsPatches = diffProps(oldNode, newNode);
        if (propsPatches) {
            currentPatch.push({
                type: patch.PROPS,
                props: propsPatches
            });
        }
        //比较子节点是否相同
        diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);
    } else {
        //节点的类型不同，直接替换
        currentPatch.push({ type: patch.REPLACE, node: newNode });
    }

    if (currentPatch.length) {
        patches[index] = currentPatch;
    }
}

//将差异应用到真实DOM
function applyPatches(node, currentPatches) {
    util.each(currentPatches, function(currentPatch) {
        switch (currentPatch.type) {
            //当修改类型为REPLACE时
            case REPLACE:
                var newNode = (typeof currentPatch.node === 'String')
                 ? document.createTextNode(currentPatch.node) 
                 : currentPatch.node.render();
                node.parentNode.replaceChild(newNode, node);
                break;
            //当修改类型为REORDER时
            case REORDER:
                reoderChildren(node, currentPatch.moves);
                break;
            //当修改类型为PROPS时
            case PROPS:
                setProps(node, currentPatch.props);
                break;
            //当修改类型为TEXT时
            case TEXT:
                if (node.textContent) {
                    node.textContent = currentPatch.content;
                } else {
                    node.nodeValue = currentPatch.content;
                }
                break;
            default:
                throw new Error('Unknow patch type ' + currentPatch.type);
        }
    });
}