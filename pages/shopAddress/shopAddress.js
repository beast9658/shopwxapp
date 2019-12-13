// pages/shopAddress/shopAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopMes: [{
      title: '商城名称',
      mes: 'XXXXXXXX'
    }, {
      title: '开店时间',
      mes: '2019-03-14 12：00'
    }, {
      title: '营业时间',
      mes: '8:00AM-9:00PM'
    }, {
      title: '店铺地址',
      mes: '黑龙江省哈尔滨市南岗区和兴路'
    }, {
      title: '商城信息',
      mes: 'blablalblablablablalblablablablalblablablablalblablablablalblabla'
    }]
  },
  //地图组件
  latitude: 23.099994,
  longitude: 113.324520,
  markers: [{
    id: 1,
    latitude: 23.099994,
    longitude: 113.324520,
    name: 'T.I.T 创意园'
  }],
  covers: [{
    latitude: 23.099994,
    longitude: 113.344520,
    iconPath: '/image/location.png'
  }, {
    latitude: 23.099994,
    longitude: 113.304520,
    iconPath: '/image/location.png'
  }],



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.mapCtx = wx.createMapContext('myMap')
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