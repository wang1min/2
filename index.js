// index.js
var money,add,sum;
Page({
  moneyNum:function(e){
    money=parseInt(e.detail.value);
  },
  addNum:function(e){
    add=parseInt(e.detail.value);
  },
  calc:function(){
    sum=0;
    for(var i=1;i<=5;i++){
      sum=money*(1+add/100);
      money=sum;
    }
    this.setData({
      sum:sum
    })
  }
})