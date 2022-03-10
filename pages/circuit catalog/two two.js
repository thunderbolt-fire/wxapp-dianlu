// pages/content-detail/content-detail.js
const app = getApp();
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
   article:{}
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getText('https://656e-env-1gvqlfeod80b6f57-1308503695.tcb.qcloud.la/%E7%94%B5%E8%B7%AF%E7%AC%94%E8%AE%B0/2.md?sign=c5b921fa65ab8482868b35c204e7f218&t=1639723797',res => {
   let obj = app.towxml(res.data,'markdown',{
        theme:'dark', //主题 dark 黑色，light白色，不填默认是light
        base:"www.xxx.com",
    events:{      //为元素绑定的事件方法
     tap:e => {
      console.log('tap',e);
     },
     change:e => {
      console.log('todo',e);
     }
    }
   });
      //更新解析数据
   this.setData({
    article:obj,
   });
  });
  },

  gotosun:function(){
    wx.redirectTo({
      url: '../circuit catalog/two one',
    })
  }
})