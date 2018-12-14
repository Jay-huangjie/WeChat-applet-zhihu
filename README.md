# WeChat-applet-zhihu
仿知乎微信小程序demo

此demo是用于学习小程序仿制出来的demo,样式及数据源都参考自此项目
[zhihu](https://github.com/RebeccaHanjw/weapp-wechat-zhihu),重写了她的列表实现以及新加入了几个功能实现，如果你也在学习小程序正愁找不到项目模仿，此项目是一个不错的选择,此项目包含的技术点有：

* list列表展示：包含多视图，上啦刷新，下拉加载，刷新使用了两种不同的实现方式：
  `PullDownRefresh`方式与`scroll-view`的方式
* 轮播图
* 常用tabbar的实现
* wxml与js的样式交互,(见answer模块,点击关注动态改变按钮样式)
* toast,picket,video,audio等组件的使用
* 使用component框架实现自定义组件的复用
* more..

#### 效果图
##### 首页文本列表
![首页列表](https://raw.githubusercontent.com/Jay-huangjie/WeChat-applet-zhihu/master/img/index1.png?raw=true)

##### 首页视频列表
![视频](https://github.com/Jay-huangjie/WeChat-applet-zhihu/blob/master/img/index2.png?raw=true)
##### 首页音频列表
![音频](https://github.com/Jay-huangjie/WeChat-applet-zhihu/blob/master/img/index3.png?raw=true)
##### 轮播图以及自定义tabbar
![轮播图](https://github.com/Jay-huangjie/WeChat-applet-zhihu/blob/master/img/discovery.png?raw=true)
##### 私信
![私信](https://github.com/Jay-huangjie/WeChat-applet-zhihu/blob/master/img/chat.png?raw=true)
##### 回答界面
![回答](https://github.com/Jay-huangjie/WeChat-applet-zhihu/blob/master/img/answer.png?raw=true)
##### 问题界面
![问题](https://github.com/Jay-huangjie/WeChat-applet-zhihu/blob/master/img/question.png?raw=true)

其中列表使用的component复用，实现代码在`component/indexitem`中

项目仅作学习用途，欢迎star,fork
