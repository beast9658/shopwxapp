// pages/address/address.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [{
        name: '王先生',
        phone:'12345678901',
        address:'XX',
        province:'XX',
        city: 'XX',
        county: 'XX',
        value: '0',
        id:'123',
      },
      {
        name: '王先生',
        phone: '12345678901',
        address: 'XX市XX区XX街',
        addressDetail: 'XX小区XX栋XX室',
        value: '1',
        checked: 1,
        id:'456'
      }
    ],
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
 

  addAddress: function () {
    wx.navigateTo({
      url: '/pages/addressEdit/addressEdit',
    })
  },
  changeAddress: function (e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/addressEdit/addressEdit?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAddrList()
  },

  getAddrList: function () {
    var that = this;
    wx.request({
      url: app.globalData.requestDomain + '/address/addressList',
      method: 'GET',
      success: function (r) {
        console.log(r)
        that.setData({
          radioItems:r.data.addrData.list
        })
      },
      fail: function () {
        console.log('FAIL')
      }
    })
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