// component/indexitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //设置数据源
    setData:{
      type:Array
    },
    //头部加入margin
    topMargin:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    array: ["关注", "收藏", "举报"],
    picketValue: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange(e) {
      var array = this.data.array;
      wx.showToast({
        title: array[e.detail.value] + "成功",
        icon: 'success',
        duration: 1000
      })
    },
    //底部菜单关闭
    bindCancel(e) {
      wx.showToast({
        title: '操作取消',
        icon: 'none',
        duration: 500
      })
    },
    //跳转到回答界面
    toAnswer: function () {
      wx.navigateTo({
        url: '../answer/answer',
      })
    },
    //跳转到回答界面
    toQuestion: function () {
      wx.navigateTo({
        url: '../question/question',
      })
    },
  }
})
