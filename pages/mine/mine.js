Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  },



  data: {
    user: {
      head: '/image/touxaing.png',
      account: '123456789',
      id: '321654'
    },
    money: [{
      img: '/image/0.2切图/积分.png',
      name: '积分',
      num: 1000,
      fun:'toMineScore'
    }, {
      img: '/image/0.2切图/余额.png',
      name: '余额',
      num: 1000,
      fun:'toMineMoney'
    }, {
      img: '/image/0.2切图/卡券.png',
      name: '卡券',
      num: 1000,
      fun:'toMineScore'
    }],
    action: [{
      title: '全部订单',
      sub: '查看全部',
      child: [{
        img: '/image/0.2切图/待付款.png',
        name: '待付款'
      }, {
        img: '/image/0.2切图/待发货.png',
        name: '待发货'
      }, {
        img: '/image/0.2切图/待收货.png',
        name: '待收货'
      }, {
        img: '/image/0.2切图/待评价.png',
        name: '待评价'
      }]
    }, {
      title: '我的服务',
      sub: '',
      child: [{
        img: '/image/0.2切图/退款.png',
        name: '我的退款'
      }, {
        img: '/image/0.2切图/我的评价.png',
        name: '我的评价'
      }, {
        img: '/image/0.2切图/我的收藏.png',
        name: '我的收藏'
      }, {
        img: '/image/0.2切图/地址管理.png',
        name: '地址管理'
      }]
    }, {
      title: '商家',
      sub: '',
      child: [{
        img: '/image/0.2切图/商家信息.png',
        name: '商家信息',
        fun:'toShopMes'
      }, {
        img: '/image/0.2切图/联络商家.png',
        name: '联络商家',
        fun:'openDialog'
      }]
    }],
    phone:'12345678998'
  },
  methods: {
    openDialog: function () {
      this.setData({
        istrue: true
      })
    },
    closeDialog: function () {
      this.setData({
        istrue: false
      })
    },
    phoneCall: function () {
      wx.makePhoneCall({
        phoneNumber: this.data.phone
      })
    },
    toOrder: function () {
      wx.navigateTo({
        url: '/pages/order/order',
      })
    },
    toSet: function () {
      wx.navigateTo({
        url: '/pages/mineSet/mineSet',
      })
    },
    toMineScore: function () {
      wx.navigateTo({
        url: '/pages/mineScore/mineScore',
      })
    },
    toMineMoney: function () {
      wx.navigateTo({
        url: '/pages/mineMoney/mineMoney',
      })
    },
    toShopMes: function () {
      wx.navigateTo({
        url: '/pages/shopAddress/shopAddress',
      })
    },
  }
})