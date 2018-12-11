// pages/answer/answer.js
var app = getApp()
Page({
  data:{
    follow:"+ 关注",
    isfollow:false,
  },
follow:function(e){
  var isfollow = e.currentTarget.dataset.isfollow;
  console.log(isfollow);
  if(!isfollow){
    wx.showToast({
      title: '关注成功',
      icon: 'success',
      duration: 2000
    }),
    this.setData({
      follow:"已关注",
      isfollow:true
    })
  }
}
})

