// pages/mineCollection/mineCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsItem: [{
      img: '/image/pic1.png',
      name: '手机热卖',
      price: '2.33',
      collectcount: 1235,
    }, {
      img: '/image/pic1.png',
      name: '4567891596848热卖dsadsadsa564da8s的日日日4d1s5a156ddDsad大大撒旦撒打算e二二二',
      price: '205689.33',
      collectcount: 12345,
    },]
  },
  deleteCollection: function(e) {
    console.log(e.target.dataset.index)
    var index = e.target.dataset.index
    var goodsItem = this.data.goodsItem;
    for (let i = goodsItem.length; i >= 0; i--) {
      if (i == index) {
        goodsItem.splice(i, 1)
      }
    }
    this.setData({
      goodsItem: goodsItem
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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