// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigaTab:["推荐","圆桌","热门","收藏"],
    currentInde:0
  },
  tabCheck:function(e){
     console.info(e);
     var index = e.target.dataset.index;
     this.setData({
       currentInde:index
     })
  },
})
