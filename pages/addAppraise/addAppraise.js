// pages/addAppraise/addAppraise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemmes: {
      img: '/image/pic1.png',
      title: '商品名称',
      itemset: '商品规格',
      price: '31.00',
      num:1
    },
    imgs: ['/image/pic1.png']
  },
  addPic: function (e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        var imgs = this.data.imgs
        imgs.push(tempFilePaths)
        console.log(tempFilePaths)
        this.setData({
          imgs: imgs
        })
      }
    })
  },
  deletePic: function (e) {
    console.log(e)
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