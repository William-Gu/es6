function toMoney(num){
  num = num.toString()
  var [int,fl] = num.split('.');
  var newArray=[]
  for(var i = int.length - 1,j=1; i >= 0; i--){
    var item = int[i];
    newArray.unshift(item)
    console.log(1,j);
    if(j%3===0 && j != 0 && i!=0){
      console.log(2,j);
      newArray.unshift(',')
    }
    j++;
  }
  return newArray.join('')+'.'+fl
}
console.log(toMoney(123456780.56))