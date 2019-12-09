Page({
  data: {
    inputShowed: false,
    inputVal: "",
    // 热门搜索设置
    hotKeyword: ['热词', '热词热词热词热词热词', '热词热词', '热词', '热词', '热词热词热词热词热词', '热词热词', '热词'],
    searchHistory: ['热词', '热词热词热词热词热词', '热词热词', '热词', '热词', '热词热词热词热词热词', '热词热词', '热词']
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});