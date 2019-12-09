// pages/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图设置
    background: ['/image/banner.png', '/image/banner1.png', '/image/pic1.png'],
    indicatorDots: true,
    vertical: false,
    interval: 4000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    autoplay: true,
    circular: true,
    imgheights: [],
    // imgwidth: 730,
    current: 0,
    //商品信息设置
    itemMessage:{
      name:'商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',
      price:'3.33',
      count:'10'
    },
    action:[{
        hasIcon:true,
        hasSub:false,
        icon:"/image/满减.png",
        mes:"消费满199减30",
        subMes:"",
        method:""
      }, {
        hasIcon: true,
        hasSub: false,
        icon: "/image/邮.png",
        mes: "满300包邮",
        subMes: "",
        method: ""
      }, {
        hasIcon: true,
        hasSub: true,
        icon: "/image/券.png",
        mes: "优惠券",
        subMes: "领取",
        method: "getBonus"
      }, {
        hasIcon: false,
        hasSub: true,
        icon: "",
        mes: "请选择规格",
        subMes: "选择",
        method: "openDialog"
      }],
      //商品评价设置
    appraise:[{
        headicon: "/image/券.png",
        nickname:'123456',
        star:5,
        time:'刚刚',
        words:'dsa1d5sa6d41a8w1d5w3a5ds4a61w51d6a',
        imgs: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
        size:'金色；64G'
      }, {
        headicon: "/image/邮.png",
        nickname: '123456',
        star: 0,
        time: '刚刚',
        words: 'dsa1d5sa6d41a8wsssssssssssssw51d6a',
        imgs: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
        size: '金色；64G'
      }, {
        headicon: "/image/邮.png",
        nickname: '123456',
        star: 4,
        time: '刚刚',
        words: 'dsa1d5sa6d41a8wsssssssssssssw51d6a',
        imgs: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
        size: '金色；64G'
      }, {
        headicon: "/image/邮.png",
        nickname: '123456',
        star: 4,
        time: '刚刚',
        words: 'dsa1d5sa6d41a8wsssssssssssssw51d6a',
        imgs: ['/image/pic1.png'],
        size: '金色；64G'
      }, {
        headicon: "/image/邮.png",
        nickname: '123456',
        star: 4,
        time: '刚刚',
        words: 'dsa1d5sa6d41a8wsssssssssssssw51d6a',
        imgs: [],
        size: '金色；64G'
      }, {
        headicon: "/image/邮.png",
        nickname: '123456',
        star: 4,
        time: '刚刚',
        words: 'dsa1d5sa6d41a8wsssssssssssssw51d6a',
        imgs: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
        size: '金色；64G'
      }],
      //商品详情设置
    detailImg: ['/image/pic1.png', '/image/pic1.png', '/image/pic1.png'],
      //底部菜单设置
    footer:[{
        img: '/image/收藏.png',
        name: '收藏',
        fun:'isLiked'
      }, {
        img: '/image/形状24.png',
        name: '分享',
        fun: 'openShare'
      }, {
        img: '/image/购物车.png',
        name: '购物车',
        fun: 'toBag'
      }],
      //弹窗设置
    setWindow:{
      headicon: "/image/邮.png",
      nickname: '',
      price: '100.00',
      count: '12345',
    },
    radioItems: [{ 
        name: '玫瑰金', 
        price: '100.00',
        value: '0' ,
        },{ 
        name: '银灰色', 
        price: '200.00',
        value: '1', 
        
        },{ 
        name: '红色', 
        price: '300.00',
        value: '2', 
        }],
    showDialog: false,
    //计数器设置
    num: 1,
    minusStatus: 'disabled',
    //合计
    priceCount:'',
    //优惠券
    bonus:[{
        price:20,
        need:100,
        time:'2019年10月29日',
        got:false,
      }, {
        price: 20,
        need: 100,
        time: '2019年10月29日',
        got: true,
      }]

  },
  // imageLoad: function (e) {//获取图片真实宽度  
  //   var imgwidth = e.detail.width,
  //     imgheight = e.detail.height,
  //     //宽高比  
  //     ratio = imgwidth / imgheight;
  //   console.log(imgwidth, imgheight)
  //   //计算的高度值  
  //   var viewHeight = 750 / ratio;
  //   var imgheight = viewHeight;
  //   var imgheights = this.data.imgheights;
  //   //把每一张图片的对应的高度记录到数组里  
  //   imgheights.push(imgheight) ;
  //   this.setData({
  //     imgheights: imgheights
  //   })
  //   console.log(imgwidth)
  // },
  // bindchange: function (e) {
  //   // console.log(e.detail.current)
  //   this.setData({ current: e.detail.current })
  // },
  openDialog: function () {
    var priceCount = this.data.setWindow.price
    this.setData({
      priceCount: priceCount,
      setistrue: true,
    })
  },
  getBonus: function () {
    this.setData({
      bonusistrue: true,
    })
  },
  openShare: function () {
    this.setData({
      shareistrue: true,
    })
  },
  openShareMore: function () {
    this.setData({
      sharemoreistrue: true,
    })
  },
  closeDialog: function () {
    this.setData({
      setistrue: false
    })
  },
  closeBonus: function () {
    this.setData({
      bonusistrue: false
    })
  },
  closeShare: function () {
    this.setData({
      shareistrue: false
    })
  },
  closeShareMore: function () {
    this.setData({
      sharemoreistrue: false
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var setPrice = this.data.radioItems[e.detail.value].price
    var setName = this.data.radioItems[e.detail.value].name
    var radioItems = this.data.radioItems;
    
    for (let i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    console.log(e.currentTarget.dataset)
    this.setData({
      radioItems: radioItems,
      'setWindow.price': setPrice,
      'setWindow.nickname': setName,
      priceCount: setPrice,
      num:1
    });
  },
  itemSelect: function (e) {

  },
  //计数器
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    var priceCount = (this.data.setWindow.price*num).toFixed(2)
    // console.log(priceCount)
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      priceCount: priceCount,
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    var priceCount = (this.data.setWindow.price * num).toFixed(2)
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      priceCount: priceCount,
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    var priceCount = (this.data.setWindow.price * num).toFixed(2)
    this.setData({
      num: num,
      priceCount: priceCount,
    });
  },
  /* 获得优惠券 */
  bonusGot: function (e) {
    var num = e.currentTarget.dataset.index;
    var bonus = this.data.bonus
    if(bonus[num].got==false) {
      bonus[num].got=true
    }
    console.log(num);
    console.log(bonus);
    this.setData({
      bonus:bonus
    });
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