//在在页面加载完毕时执行的函数名
//addLoadEvent(要加载的函数)
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onloda!='function'){
		window.onload=func;
	}else{
		winodw.onload=function(){
			oldonload();
			func();
		}
	}
}

//insertAfter
function insertAfter(newElement,targetElement){
	var parent=targerElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement)
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling)
	}
}