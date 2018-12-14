// pages/chat.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     chatlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info("onLoad")
    var chatlist = util.getChatList();
    this.setData({
      chatlist: chatlist.data
    })
  },
  chatlistClick:function(e){
    console.info("点击了第",e.currentTarget.dataset.index,"个")
  }
})