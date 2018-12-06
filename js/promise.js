import 'babel'
function a1(data){
    return new Promise(function(res, rej){
        if(data==1){
            res(true)
        }else{
            res(false)
        }
    })
}
function a2(data){
    return new Promise(function(res, rej){
        if(data){
            res(1.1)
        }else{
            res(1.2)
        }
    })
}
function a3(data){
    return new Promise(function(res, rej){
        if(data){
            res(2.1)
        }else{
            res(2.2)
        }
    })
}
a1(1).then(data=>{
    console.log('res');
    return a2(true)
},()=>{
    console.log('rej');
    return a3(false)
}).then(data=>{
    console.log(data);
})