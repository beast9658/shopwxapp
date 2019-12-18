
// pages/messageDetail/messageDetail.js
var app = getApp();
var WxParse = require('../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: app.globalData.requestDomain + '/msg/getMsgDetail/' + options.id,
      method: "POST",
      success: function (res) {
        console.log(res.data)
        if (res.data.status == 1){
          WxParse.wxParse('article', 'html', res.data.data.send_msg, that, 5);   // 实例化对象
          that.setData({
            title: res.data.data.send_title
          })
        }
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})