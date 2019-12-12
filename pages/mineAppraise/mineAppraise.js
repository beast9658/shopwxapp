// pages/allAppraise/allAppraise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商品评价设置
    appraise: [{
      headicon: "/image/券.png",
      nickname: '123456',
      words: 'dsa1d5sa6d41a8w1d5w3a5ds4a61w51d6a',
      imgs: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
      itemmes: {
        img:'/image/pic1.png',
        title:'商品名称',
        itemset:'商品规格',
        price:'31.00'
      }
    }, {
      headicon: "/image/邮.png",
      nickname: '123456',
      words: 'dsa1d5sa6d41a8wsssssssssssssw51d6a',
      imgs: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
      itemmes: {
        img:'/image/pic1.png',
        title:'商品名称',
        itemset:'商品规格',
        price:'31.00'
      }
    }, ],
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