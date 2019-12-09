// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendItem: [{
      img: '/image/pic1.png',
      name: '手机热卖',
      price: '2.33',
      sellCount: 100,
      nice: 3
    }, {
      img: '/image/pic1.png',
      name: '4567891596848热卖',
      price: '205689.33',
      sellCount: 150,
      nice: 5
    }, {
      img: '/image/pic1.png',
      name: '手机热卖',
      price: '2.33',
      sellCount: 200,
      nice: 7
    }, {
      img: '/image/pic1.png',
      name: '4567891596848热卖',
      price: '205689.33',
      sellCount: 300,
      nice: 9
    }, {
      img: '/image/pic1.png',
      name: '手机热卖',
      price: '2.33',
      sellCount: 500,
      nice: 6
    }, {
      img: '/image/pic1.png',
      name: '4567891596848热卖4444444444444444444444444443333333333333333333333331111111111111111',
      price: '205689.33',
      sellCount: 400,
      nice: 10
    }, {
      img: '/image/pic1.png',
      name: '手机热卖',
      price: '2.33',
      sellCount: 160,
      nice: 9
    }],
    listStyle:true,
    listSort:[{
      name:'默认',
      isSort:false,
      sortMethod:0,
      checked:true,
      fun: 'resetSort',
      value:0
    }, {
      name: '价格',
      isSort: true,
      sortMethod: false,
      checked: false,
      fun: 'priceSort',
      value:1
    }, {
      name: '销量',
      isSort: true,
      sortMethod: true,
      checked: false,
      fun: 'sellSort',
      value:2
    }, {
      name: '好评',
      isSort: true,
      sortMethod: true,
      checked: false,
      fun: 'niceSort',
      value:3
    }]
  },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  changeStyle: function () {
    this.setData({
      listStyle: !this.data.listStyle
    })
  },
  // 排序函数
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var listSort = this.data.listSort;
    for (var i = 0, len = listSort.length; i < len; ++i) {
      listSort[i].checked = listSort[i].value == e.detail.value;
    }
    this.setData({
      listSort: listSort
    });
  },
  resetSort: function (e) {
    var listSort = this.data.listSort
    var index = e.currentTarget.dataset.index
    listSort[1].sortMethod = false
    listSort[2].sortMethod = true
    listSort[3].sortMethod = true
    this.setData({
      listSort: listSort
    })
  },
  sellSort: function (e) {
    var listSort = this.data.listSort
    var index = e.currentTarget.dataset.index
    listSort[index].sortMethod = !listSort[index].sortMethod
    console.log(listSort[index].sortMethod && listSort[index].checked)
    listSort[1].sortMethod = false
    listSort[3].sortMethod = true
    this.setData({
      listSort:listSort
    })
  },
  priceSort: function (e) {
    var listSort = this.data.listSort
    var index = e.currentTarget.dataset.index
    listSort[index].sortMethod = !listSort[index].sortMethod
    console.log(listSort[index].sortMethod && listSort[index].checked)
    listSort[2].sortMethod = true
    listSort[3].sortMethod = true
    this.setData({
      listSort: listSort
    })
  },
  niceSort: function (e) {
    var listSort = this.data.listSort
    var index = e.currentTarget.dataset.index
    listSort[index].sortMethod = !listSort[index].sortMethod
    console.log(listSort[index].sortMethod && listSort[index].checked)
    listSort[1].sortMethod = false
    listSort[2].sortMethod = true
    this.setData({
      listSort: listSort
    })
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