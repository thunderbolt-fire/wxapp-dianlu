// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotocatalog:function(){
    wx.navigateTo({
      url: '../circuit catalog/circuit catalog',
    })
  },
  
  gotomath:function(){
    wx.navigateTo({
      url: '../Advanced mathematics/Advanced mathematics',
    })
  }
})