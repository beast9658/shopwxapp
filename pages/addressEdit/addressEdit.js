// pages/addressEdit/addressEdit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    id:'',
    editValues:[]
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('form发生了submit事件，携带数据为：', e.detail.value.name)

   
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: app.globalData.requestDomain + '/address/addsave',
      data: {
        'data': JSON.stringify(e.detail.value)
      },
      method:"post",
     
      success:function (r){
        console.log(r)
        if(r.data.success){
          wx.navigateTo({
            url: '/pages/address/address',
          })
        }
      }
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setIndex: options.id
    this.setData({
      id: options.id
    })
    console.log(options.id)
    if (options.id != null){
      this.getEditAddr();
    }
   
  },
  getEditAddr:function (){
    var that = this;
      wx.request({
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        url: app.globalData.requestDomain + '/address/addAddress',
        data:{
          "id":that.data.id
        },
        method:"post",
        success:function(r){
          console.log("阿斯蒂芬------" + JSON.stringify(r.data.editAddr.r))
          var arr = new Array();
          arr.push(r.data.editAddr.r.province);
          arr.push(r.data.editAddr.r.city);
          arr.push(r.data.editAddr.r.county);
          that.setData({
            editValues: r.data.editAddr.r,
            region: arr
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