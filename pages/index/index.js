Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    // 搜索框设置
    inputShowed: false,
    inputVal: "",
    // 轮播图设置
    background: ['/image/banner.png','/image/banner1.png'],
    indicatorDots: true,
    vertical: false,
    interval: 4000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    autoplay: true,
    circular: true,

    // 导航按钮设置
    navBtn:[{
        img: '/image/手机热卖.png',
        name: '手机热卖',
        navTo:'toSpecial'
      }, {
        img: '/image/汽车之家.png',
        name: '汽车之家',
        navTo: 'toDetail'
      },{
        img: '/image/数码产品.png',
        name: '数码产品'
      }, {
        img: '/image/美妆产品.png',
        name: '美妆产品'
      }, {
        img: '/image/服饰商品.png',
        name: '服饰商品'
      }],

    // 中部图片设置
    midPic: ['/image/banner.png', '/image/banner1.png', '/image/banner.png', '/image/banner1.png', '/image/banner1.png', '/image/banner.png'],

    // 推荐商品设置
    recommendItem:[],
    pagenum: 1, //初始页默认值为1
  },
  methods: {
    onReachBottom: function () { //触底开始下一页
      var that = this;
      var pagenum = that.data.pagenum + 1; //获取当前页数并+1
      that.setData({
        pagenum: pagenum, //更新当前页数
      })
      that.getdatalist();//重新调用请求获取下一页数据
    },
    onLoad: function (options) {
      this.getdatalist()
      console.log(wx.getAccountInfoSync().miniProgram.appId)
    },
    getdatalist: function () { //可在onLoad中设置为进入页面默认加载
      var that = this;
      wx.request({
        url: 'https://www.fastmock.site/mock/699715a194ca93058fa372074d4318a1/itemlist/recommendItem',
        data: {
          "key": "0",
          "pageNum": that.data.pagenum, //从数据里获取当前页数
          "pageSize": 10, //每页显示条数
        },
        method: "POST",
        success: function (res)  {
          var arr1 = that.data.recommendItem; //从data获取当前datalist数组
          var arr2 = res.data.data.recommendItem; //从此次请求返回的数据中获取新数组
          console.log(arr2)
          console.log(that.data.pagenum)
          arr1 = arr1.concat(arr2); //合并数组
          that.setData({
            recommendItem: arr1 //合并后更新datalist
          })
          
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    },
    toSearch: function () {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    },
    toMessage: function () {
      wx.navigateTo({
        url: '/pages/message/message'
      })
    },
    toSpecial: function () {
      wx.navigateTo({
        url: '/pages/special/special'
      })
    },
    toList: function () {
      wx.navigateTo({
        url: '/pages/goodsList/goodsList'
      })
    },
    toDetail: function () {
      wx.navigateTo({
        url: '/pages/goodsDetail/goodsDetail'
      })
    }
  }
})


