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
      fun:'toMineBonus'
    }],
    action: [{
      title: '全部订单',
      sub: '查看全部',
      child: [{
        img: '/image/0.2切图/待付款.png',
        name: '待付款',
        fun: 'toWaitPay'
      }, {
        img: '/image/0.2切图/待发货.png',
        name: '待发货',
        fun: 'toWaitSend'
      }, {
        img: '/image/0.2切图/待收货.png',
          name: '待收货',
          fun: 'toWaitReceipt'
      }, {
        img: '/image/0.2切图/待评价.png',
        name: '待评价',
        fun: 'toWaitComment'
      }]
    }, {
      title: '我的服务',
      sub: '',
      child: [{
        img: '/image/0.2切图/退款.png',
        name: '我的退款',
        fun: 'toRefund'
      }, {
        img: '/image/0.2切图/我的评价.png',
        name: '我的评价',
        fun: 'toAppraise'
      }, {
        img: '/image/0.2切图/我的收藏.png',
        name: '我的收藏',
        fun: 'toCollection'
      }, {
        img: '/image/0.2切图/地址管理.png',
        name: '地址管理',
        fun: 'toAddress'
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
    onLoad: function (options) {
      this.getdatalist()
    },
    getdatalist: function () { //可在onLoad中设置为进入页面默认加载
      var that = this;
      wx.request({
        url: 'http://192.168.1.194:8084/mine/minePage',
        // data: {
        // },
        method: "GET",
        success: function (res) {
          // var arr1 = that.data.recommendItem; //从data获取当前datalist数组
          // var arr2 = res.data.data.recommendItem; //从此次请求返回的数据中获取新数组
          // console.log(arr2)
          // console.log(that.data.pagenum)
          // arr1 = arr1.concat(arr2); //合并数组
          that.setData({
            'user.account': res.data.mine.nickname,
            'user.id': res.data.mine.member_id,
            'user.head': res.data.mine.profile_photo,
            'money[0].num': res.data.mine.member_integral,
            'money[1].num': res.data.mine.member_balance,
            'money[2].num': res.data.couponCount,
            // 'action[0].child[0].': res.data.couponCount
            'phone': res.data.mine.tel
          })
        console.log(res)

        },
        fail: function () {
          console.log('fail')
        }
      })
    },

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
    toWaitPay:function () {
      wx.navigateTo({
        url: '/pages/order/order?type=1',
      })
    },
    toWaitSend: function() {
      wx.navigateTo({
        url: '/pages/order/order?type=2',
      })
    },
    toWaitReceipt: function () {
      wx.navigateTo({
        url: '/pages/order/order?type=3',
      })
    },
    toWaitComment: function () {
      wx.navigateTo({
        url: '/pages/order/order?type=4',
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
    toAppraise: function () {
      wx.navigateTo({
        url: '/pages/mineAppraise/mineAppraise',
      })
    },
    toRefund: function () {
      wx.navigateTo({
        url: '/pages/mineRefund/mineRefund',
      })
    },
    toCollection: function () {
      wx.navigateTo({
        url: '/pages/mineCollection/mineCollection',
      })
    },
    toAddress: function () {
      wx.navigateTo({
        url: '/pages/address/address',
      })
    },
    toMineBonus: function () {
      wx.navigateTo({
        url: '/pages/mineBonus/mineBonus',
      })
    },
  }
})