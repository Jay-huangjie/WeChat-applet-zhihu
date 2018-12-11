// pages/discovery/discovery.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigaTab:["推荐","圆桌","热门","收藏"],
    currentIndex:0,
    // screen_h:0, //屏幕高度
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    feed: [], //数据源
  },
  onLoad(){
    // let that = this;
    // wx.getSystemInfo({
    //   success(res) {
    //     var height = res.windowHeight; //从api中获取屏幕高度
    //     console.log(height)
    //     that.setData({
    //       screen_h:res.windowHeight
    //     })
    //   }
    // });
    this.getData();
  },
  tabCheck:function(e){
     console.info(e);
     var index = e.target.dataset.index;
     this.setData({
       currentIndex:index
     })
  },
  lower:function(){
    console.info("lower")
  },
  upper:function(){
    console.info("upper")
  },
  getData: function () {
    var feed = util.getData2();
    this.setData({
      feed: feed.data,
    })
  },
  toAnswer: function () {
    wx.navigateTo({
      url: '../answer/answer',
    })
  },
  toQuestion: function () {
    wx.navigateTo({
      url: '../question/question',
    })
  },
  refresh:function(){
    
  }
})
