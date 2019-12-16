// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [{
        name: '全部',
        value: '0',
        checked: true
      },
      {
        name: '待付款',
        value: '1'
      },
      {
        name: '待发货',
        value: '2'
      },
      {
        name: '待收货',
        value: '3'
      },
      {
        name: '待评价',
        value: '4'
      },
    ],
    orderList: [{
      items: [{
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }],
      orderNum: '123456789987',
      itemCount: 1,
      total: '123.45',
      type: 0, //订单状态：0待付款，1待发货，2待收货，3待评价，4已完成，5关闭交易
    }, {
      items: [{
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }],
      orderNum: '123456789987',
      itemCount: 1,
      total: '123.45',
      type: 1, //订单状态：0待付款，1待发货，2待收货，3待评价，4已完成，5关闭交易
    }, {
      items: [{
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }],
      orderNum: '123456789987',
      itemCount: 1,
      total: '123.45',
      type: 2, //订单状态：0待付款，1待发货，2待收货，3待评价，4已完成，5关闭交易
    }, {
      items: [{
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }],
      orderNum: '123456789987',
      itemCount: 1,
      total: '123.45',
      type: 3, //订单状态：0待付款，1待发货，2待收货，3待评价，4已完成，5关闭交易
    }, {
      items: [{
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }],
      orderNum: '123456789987',
      itemCount: 1,
      total: '123.45',
      type: 4, //订单状态：0待付款，1待发货，2待收货，3待评价，4已完成，5关闭交易
    }, {
      items: [{
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }, {
        name: '商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111商品名称111',
        img: '/image/组47.png',
        itemSet: '商品规格',
        price: '123.45',
        count: 1
      }],
      orderNum: '123456789987',
      itemCount: 1,
      total: '123.45',
      type: 5, //订单状态：0待付款，1待发货，2待收货，3待评价，4已完成，5关闭交易
    }, ]
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