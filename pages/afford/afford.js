// pages/afford/afford.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddress:true,
    address:{
      name:'aaaa',
      phone:'12345678901',
      addressDetail:'XX市XX区XX街XX号44XX市XX区XX街XX号XX市XX区XX街XX号XX市XX区XX街XX号XX市XX区XX街XX号'
    },
    goods:{
      goodsItem: [{
        img: '/image/pic1.png',
        name: '手机热卖',
        price: '2.33',
        itemSet:'红色',
        buycount:2,
        sellCount: 100,
        nice: 3
      }, {
        img: '/image/pic1.png',
        name: '4567891596848热卖dsadsadsa564da8s的日日日4d1s5a156ddDsad大大撒旦撒打算e二二二',
        price: '205689.33',
        itemSet:'红色',
        buycount:1,
        sellCount: 150,
        nice: 5
      }, ],
    },
    action: [{
      hasIcon: true,
      hasSub: true,
      icon: "/image/满减.png",
      mes: "折扣",
      subMes: "3.0折",
      method: ""
    },{
      hasIcon: true,
      hasSub: false,
      icon: "/image/满减.png",
      mes: "消费满199减30",
      subMes: "",
      method: ""
    }, {
      hasIcon: true,
      hasSub: false,
      icon: "/image/邮.png",
      mes: "邮费",
      subMes: "100.00",
      method: ""
    }, {
      hasIcon: true,
      hasSub: true,
      icon: "/image/券.png",
      mes: "优惠券",
      subMes: "使用",
      method: "getBonus"
    }, {
      hasIcon: true,
      hasSub: false,
      icon: "/image/券.png",
      mes: "使用积分",
      mes2: "使用A积分抵用B元",
      subMes: "",
      method: "useScore",
    }],
    scoreChecked:false,
    //优惠券
    showDialog: false,
    bonus: [{
      price: 20,
      need: 100,
      time: '2019年10月29日',
      got: false,
    }, {
      price: 20,
      need: 100,
      time: '2019年10月29日',
      got: true,
    }],
    //支付方式
    radioItems: [{ 
      name: '微信支付', 
      value: '0' ,
      img: "/image/微信.png"
      },{ 
      name: '余额支付', 
      value: '1', 
      checked: true ,
      img: "/image/余额.png"
      }
    ],
    priceCount:'999.00',
    clearPriceCount:'900.00',
    initPriceCount:'',
    score:999,
    scoreToMoney:'',
    getScore:'',
    scoreRole:0.1,//积分抵现规则
    itemType: 1,//0按priceCount（订单金额）计算积分，1按clearPriceCount（实付金额）计算积分
    itemRole: 10,//金额抵积分规则
    bonusCard:0
  },
  



  getBonus: function () {
    this.setData({
      bonusistrue: true,
    })
  },
  closeBonus: function () {
    this.setData({
      bonusistrue: false
    })
  },
  getScoreMoney:function () {
    var scoreToMoney = this.data.scoreToMoney
    scoreToMoney = (this.data.score * this.data.scoreRole).toFixed(2)
    this.setData({
      scoreToMoney: scoreToMoney
    })
  },
  /* 获得优惠券 */
  bonusGot: function (e) {
    var num = e.currentTarget.dataset.index;
    var bonus = this.data.bonus
    var bonusCard = this.data.bonus[num].price
    var clearPriceCount = this.data.clearPriceCount
    var initPriceCount = this.data.initPriceCount
    
    if (bonus[num].got == false) {
      bonus[num].got = true
      initPriceCount = initPriceCount - bonusCard
      clearPriceCount = initPriceCount
    }
    else {
      bonus[num].got = false
      initPriceCount = initPriceCount + bonusCard
      clearPriceCount = initPriceCount
    }
    this.setData({
      bonus: bonus,
      bonusCard: bonusCard,
      initPriceCount: initPriceCount,
      clearPriceCount: clearPriceCount
    });
    this.scoreSet()
  },
  scoreSet:function (e) {
    var getScore = this.data.getScore
    if (this.data.itemType == 0) {
      getScore = (this.data.priceCount * this.data.itemRole).toFixed(0)
    }
    else {
      getScore = (this.data.clearPriceCount * this.data.itemRole).toFixed(0)
    }
    console.log(getScore)
    this.setData({
      getScore: getScore
    });
  },
  setInitPriceCount: function (e) {
    var initPriceCount = this.data.clearPriceCount
    console.log(initPriceCount)
    this.setData({
      initPriceCount: initPriceCount
    })
  },
  useScore: function (e) {
    var scoreChecked = this.data.scoreChecked
    var clearPriceCount = this.data.clearPriceCount
    var initPriceCount = clearPriceCount
    scoreChecked = !scoreChecked
    this.setData({
      scoreChecked: scoreChecked
    })
    if (scoreChecked==true) {
      clearPriceCount = (clearPriceCount - (this.data.score * this.data.scoreRole)).toFixed(2)
    }
    else {
      clearPriceCount = this.data.initPriceCount
      console.log(this.data.initPriceCount)
    }
    if (clearPriceCount<0) {
      clearPriceCount=0
    }
    this.setData({
      clearPriceCount: clearPriceCount
    })
    this.scoreSet()
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  selectAddress: function () {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setInitPriceCount();
    this.scoreSet()
    this.getScoreMoney()
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