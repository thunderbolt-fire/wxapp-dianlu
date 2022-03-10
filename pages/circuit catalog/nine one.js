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
    app.getText('https://656e-env-1gvqlfeod80b6f57-1308503695.tcb.qcloud.la/%E7%94%B5%E8%B7%AF%E7%AC%94%E8%AE%B0/%23%20%E7%AC%AC9%E7%AB%A0%20%E6%AD%A3%E5%BC%A6%E7%A8%B3%E6%80%81%E7%94%B5%E8%B7%AF%E7%9A%84%E5%88%86%E6%9E%90.md?sign=8b397409b2c951289e1d0022e5c6cf54&t=1639724010',res => {
   let obj = app.towxml(res.data,'markdown',{
        theme:'light', //主题 dark 黑色，light白色，不填默认是light
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

  gotomoon:function(){
    wx.redirectTo({
      url: '../circuit catalog/nine two',
    })
  }
})