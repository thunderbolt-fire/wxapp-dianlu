// app.js
App({
  // 引入`towxml3.0`解析方法
  towxml:require('/towxml/index'),


  docDir: 'https://env-1gvqlfeod80b6f57.qcloud.la/',
   //声明一个数据请求方法
 getText: (url, callback) => {
  wx.request({
   url: url,
   header: {
    'content-type': 'application/x-www-form-urlencoded'
   },
   success: (res) => {
    if (typeof callback === 'function') {
     callback(res);
    };
   }
  });
 }
,
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
