Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [{
        name: '未使用',
        value: '0',
        checked: true
      },
      {
        name: '已失效',
        value: '1'
      }
    ],
    bonus: [{
      price: 20,
      need: 100,
      time: '2019年10月29日',
      status: 0
    }, {
      price: 20,
      need: 100,
      time: '2019年10月29日',
      status: 0
    }, {
      price: 20,
      need: 100,
      time: '2019年10月29日',
      status: 1
    }, {
      price: 20,
      need: 100,
      time: '2019年10月29日',
      status: 2
    }],
    used:false
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var used = this.data.used
    if (e.detail.value == 0) {
      used=false
    }
    else {
      used=true
    }
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    console.log(used)
    this.setData({
      radioItems: radioItems,
      used: used
    });
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