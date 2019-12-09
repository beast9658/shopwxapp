// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [{
        name: '王先生',
        phone:'12345678901',
        address:'XX市XX区XX街ds45a98w4d545dsa1ds5a6dwa1e3w2e1w',
        addressDetail:'XX小区XX栋XX室489rq4wer651qw5e6w2dsa15d8w974d968awd1dsa6d8w4a6wd1w',
        value: '0'
      },
      {
        name: '王先生',
        phone: '12345678901',
        address: 'XX市XX区XX街',
        addressDetail: 'XX小区XX栋XX室',
        value: '1',
        checked: true
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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