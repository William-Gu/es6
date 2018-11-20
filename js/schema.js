(function(window, undefined){

  function _invoke(action,data,callback){
    //join scheme proto
    var schema = 'myapp://utils'
    schema +='/'+action
    schema +='?a=a'

    var key
    for(key in data){
      if(data.hasOwnProperty(key)){
        schema += '&'+key+'='+data[key]
      }
    }

    //callback
    if(callback){
      var callbackName = ''
      if (typeof callback ==='string'){
        callbackName = callback
      }else{
        callbackName = cation + Date.now()
        window[callbackName] = callback
      }
      schema += '&callback='+callbackName
    }
    //触发
    var iframe = document.createElement('iframe');
        iframe.style.display = 'none'
        iframe.src = schema
    var body = document.body
        body.appendChild(ifrmae);
    setTimeout(() => {
        body.removeChild(iframe);
        iframe = null;
    });
  }


  //暴露全局变量
  window.invoke = {
    share: function(data, callback){
      _invoke('share', data, callback)
    },
    scan: function(data, callback){
      _invoke('scan', data, callback)
    },
    login: function(data, callback){
      _invoke('login', data, callback)
    }
  }
})(window)



function invokeShare(data, callback){
  _invoke('share',data,callback)
}
