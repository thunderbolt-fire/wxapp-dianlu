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
    app.getText('https://656e-env-1gvqlfeod80b6f57-1308503695.tcb.qcloud.la/%E7%94%B5%E8%B7%AF%E7%AC%94%E8%AE%B0/%E7%AC%AC3%E7%AB%A0%20%E7%94%B5%E9%98%BB%E7%94%B5%E8%B7%AF%E7%9A%84%E4%B8%80%E8%88%AC%E5%88%86%E6%9E%90%E6%B3%95.md?sign=ac3a42994f2188a1d42dee894606c315&t=1639723864',res => {
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
      url: '../circuit catalog/three one',
    })
  }
})