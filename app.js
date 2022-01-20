// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    var that = this
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
