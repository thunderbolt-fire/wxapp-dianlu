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
    app.getText('https://656e-env-1gvqlfeod80b6f57-1308503695.tcb.qcloud.la/%E7%94%B5%E8%B7%AF%E7%AC%94%E8%AE%B0/%E7%AC%AC%E5%8D%81%E7%AB%A0%20%E5%90%AB%E6%9C%89%E8%80%A6%E5%90%88%E7%94%B5%E6%84%9F%E7%9A%84%E7%94%B5%E8%B7%AF.md?sign=906bcd418442fe6bb70a9f515976f5fc&t=1646661644',res => {
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
      url: '../circuit catalog/ten one',
    })
  }
})