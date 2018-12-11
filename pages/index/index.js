//index.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
 data:{
   feed: [], //数据源
   feed_length: 0 //加载
 },
 //下拉刷新
  onPullDownRefresh:function(){
    wx.showNavigationBarLoading();
    this.refreshData()
  },
  //上啦加载
  onReachBottom:function(){
    this.onLoadMore()
  },
  refreshData(){
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    this.getData();
    setTimeout(function(){
      wx.showToast({
        title: '刷新成功',
        icon:'success',
        duration:2000
      });
      wx.hideNavigationBarLoading();
    },3000)
  },
  onLoad(){
    this.getData()
  },
  getData:function(){
    var feed = util.getData2();
    this.setData({
      feed:feed.data,
      feed_length:feed.data.length
    })
  },
  onLoadMore(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000,
      mask:true
    });
    wx.showNavigationBarLoading()
    var next = util.getNext();
    var next_data = next.data;
    this.setData({
      feed:this.data.feed.concat(next_data)
    })
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 1000
      });
      wx.hideNavigationBarLoading()
    },3000)
  },
  //跳转到问题界面
  toAnswer:function(){
    wx.navigateTo({
      url: '../answer/answer',
    })
  },
  toQuestion:function(){
    wx.navigateTo({
      url: '../question/question',
    })
  }
})

