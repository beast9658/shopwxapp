// pages/message/message.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxItems: [],
    pagenum: 1, //初始页默认值为1
  },
  toDetail: function(e) {
    var old = this.data.checkboxItems
    console.log(old)
    old[e.currentTarget.dataset.index].is_read = 1
    this.setData({
      checkboxItems: old
    });
    wx.navigateTo({
      url: '/pages/messageDetail/messageDetail?id=' + old[e.currentTarget.dataset.index].id,
    })
  },
  checkboxChange: function (e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].id == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  selectAll: function (e) {
    var checkboxItems = this.data.checkboxItems;
    for (let i = 0; i < checkboxItems.length;i++) {
      checkboxItems[i].checked = true;
    }
    this.setData({
      checkboxItems: checkboxItems
    });
  },
  read: function (e) {
    var ids='';
    var checkboxItems = this.data.checkboxItems;
    for (let i = 0; i < checkboxItems.length; i++) {
      if(checkboxItems[i].checked == true){
        ids += checkboxItems[i].id+','
        checkboxItems[i].is_read=1
      }
    }
    this.setData({
      checkboxItems: checkboxItems
    });
    var that = this;
    if (ids != ""){
      ids = ids.substring(0,ids.length-1);
      console.log(ids)
      wx.request({
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        url: app.globalData.requestDomain + '/msg/batchReadMsg/',
        data: { ids: ids},
        method: "POST",
        success: function (res) {
          console.log(res.data)
          if (res.data.status == 1) {
            //已读成功
          }
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }


  },
  deleteMes: function (e) {
    var ids = '';
    var checkboxItems = this.data.checkboxItems;
    for (let i = checkboxItems.length; i > 0; i--) {
      if(checkboxItems[i-1].checked == true) {
        ids += checkboxItems[i-1].id + ','
        checkboxItems.splice(i-1,1)        
      }
    }
    this.setData({
      checkboxItems: checkboxItems
    });
    if (ids != "") {
      ids = ids.substring(0, ids.length - 1);
      console.log(ids)
      wx.request({
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        url: app.globalData.requestDomain + '/msg/batchDelMsg/',
        data: { ids: ids },
        method: "POST",
        success: function (res) {
          console.log(res.data)
          if (res.data.status == 1) {
            //删除成功
          }
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }
  },


  getdatalist: function () { //可在onLoad中设置为进入页面默认加载
    var that = this;
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: app.globalData.requestDomain + '/msg/getMsg',
      data: {
        "pageNum": that.data.pagenum, //从数据里获取当前页数
        "pageSize": 10, //每页显示条数
      },
      method: "POST",
      success: function (res) {
        console.log(res.data)
        var arr1 = that.data.checkboxItems; //从data获取当前datalist数组
        var arr2 = res.data.data.list; //从此次请求返回的数据中获取新数组
        console.log(arr2)
        console.log(that.data.pagenum)
        arr1 = arr1.concat(arr2); //合并数组
        that.setData({
          checkboxItems: arr1 //合并后更新datalist
        })

      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdatalist()
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
    var that = this;
    var pagenum = that.data.pagenum + 1; //获取当前页数并+1
    console.log(pagenum)
    that.setData({
      pagenum: pagenum, //更新当前页数
    })
    that.getdatalist();//重新调用请求获取下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})