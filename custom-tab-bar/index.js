Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#ff4729",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/首页.png",
      selectedIconPath: "/image/首页1.png",
      text: "首页"
    }, {
      pagePath: "/pages/kinds/kinds",
      iconPath: "/image/分类.png",
      selectedIconPath: "/image/分类2.png",
      text: "分类"
    }, {
      pagePath: "/pages/buycar/buycar",
      iconPath: "/image/购物车.png",
      selectedIconPath: "/image/购物车1.png",
      text: "购物车"
    }, {
      pagePath: "/pages/mine/mine",
      iconPath: "/image/我的.png",
      selectedIconPath: "/image/我的1.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})