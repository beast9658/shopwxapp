// pages/logistics/logistics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logisticsName: '圆通快递',
    logisticsNum: 'ASD123ZXC123',
    logisticsImages: ['/image/组74拷贝.png', '/image/组74拷贝.png', '/image/组74拷贝.png', '/image/组74拷贝.png', '/image/组74拷贝.png'],
    logisticsItems: [{
      mes: '已下单',
      img: '/image/组74拷贝.png',
      time: ''
    }, {
      mes: '已发货',
      img: '/image/已发货1拷贝.png',
      time: ''
    }, {
      mes: '收件',
      img: '/image/已发货1拷贝.png',
      time: '2019-11-11 11:11:11'
    }, {
      mes: '收件',
      img: '/image/已发货1拷贝.png',
      time: '2019-11-11 11:11:11'
    }, {
      mes: '收件',
      img: '/image/已发货1拷贝.png',
      time: '2019-11-11 11:11:11'
    }, {
        mes: '收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件收件',
      img: '/image/已发货1拷贝.png',
      time: '2019-11-11 11:11:11'
    }, {
      mes: '收件',
      img: '/image/已发货1拷贝.png',
      time: '2019-11-11 11:11:11'
    }, {
      mes: '签收',
      img: '/image/已发货1.png',
      time: '2019-11-11 11:11:11'
    }, {
      mes: '签收',
      img: '/image/收.png',
      time: ''
    }]
  },
  reverse: function() {
    var logisticsItems = this.data.logisticsItems
    logisticsItems = logisticsItems.reverse()
    this.setData({
      logisticsItems: logisticsItems
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.reverse()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})