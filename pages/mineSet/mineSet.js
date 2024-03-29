// pages/mineSet/mineSet.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    sex: 1,
    profile_photo:'/image/touxaing.png',
    member_id:'',
    nickname:''
  },
  /**
   * 保存事件 --lyz
   */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: app.globalData.requestDomain + '/mine/saveMemberInfo',
      method:"post",
      data:{
        "data": JSON.stringify(e.detail.value)
        },
      success:function (r){
        console.log(r)
      }  
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },
  changeHead: function (e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:res=> {
        // tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        this.setData({
          profile_photo: tempFilePaths
        })
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMineData();
  },
  /**
   * 获取加载数据
   */
 
  getMineData: function () {
    var that = this;
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method:"post",
      url: app.globalData.requestDomain + '/mine/toMineInstall',
      success:function (r){
        console.log(r.data.sex)
        that.setData({
          'sex':r.data.sex,
          'profile_photo': r.data.profile_photo,
          'member_id': r.data.member_id,
          'nickname': r.data.nickname
        })
      }

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