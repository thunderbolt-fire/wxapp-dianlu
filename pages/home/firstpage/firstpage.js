// pages/firstpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    template:[{cover:'http://m.qpic.cn/psc?/V12URTYg336yzz/45NBuzDIW489QBoVep5mcUyu*s2iDy*GN18oMXexGcSSwVDbB0x7nMyJDLgRusTYZ2kdbuj*rlK8gCgddF98LiseBCtmCv0yW2KXM9yvraM!/b&bo=jgQcAgAAAAADN4Y!&rf=viewer_4&t=5'},
    {cover:'http://m.qpic.cn/psc?/V12URTYg336yzz/45NBuzDIW489QBoVep5mcUyu*s2iDy*GN18oMXexGcT8ePPUwf0p4Gs3YSZfZFPw.SkEgHgOshPXdY.H8OA7SjSntyoKESb270m3L9Jj0DY!/b&bo=jAQbAgAAAAADN4M!&rf=viewer_4&t=5'},
    {cover:'http://m.qpic.cn/psc?/V12URTYg336yzz/45NBuzDIW489QBoVep5mcUyu*s2iDy*GN18oMXexGcRVA.eA0YFa0.BAMunsOZJH.UT9QM*00fQA0SKdQjeIjfKioV3XfCjmAolfge.SdFI!/b&bo=jgQdAgAAAAADN4c!&rf=viewer_4&t=5'},
    {cover:'http://m.qpic.cn/psc?/V12URTYg336yzz/45NBuzDIW489QBoVep5mcXTqPaXuQqFW2OLhOppRYEahzPd1e263T2nnUfGxAx7nCoXC1hgSgsFHXWcPDVSPStLhNR2MAZgZNmOydHqI8yw!/b&bo=jwQdAgAAAAADN4Y!&rf=viewer_4&t=5'}]
  },
  gotohistory: function(){
    wx.navigateTo({
      url: '../history/history',
    })
  },
  gotopicture: function(){
    wx.navigateTo({
      url: '../picture/picture',
    })
  },
  gotorecord: function(){
    wx.navigateTo({
      url: '../record/record',
    })
  },
  gotovideo: function(){
    wx.navigateTo({
      url: '../video/video',
    })
  },
  gotoshopmall: function(){
    wx.navigateTo({
      url: '../shopmall/shopmall',
    })
  },
  gotofavor: function(){
    wx.navigateTo({
      url: '../favor/favor',
    })
  }

})