var app = getApp();
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  },
  data: {
    checkboxItems: [{ 
      name: '商品名称1', 
      img: "/image/满减.png",
      itemset:'银灰色',
      price:'1.23',
      value: '0', 
      checked: false ,
      num: 1,
      priceCount: '',
      status:0
      },{ 
      name: '商品名称2商品名称2商品名称2商品名称2商品名称2商品名称2商品名称2', 
      img: "/image/满减.png",
      itemset:'红色',
      price:'1.23',
      value: '1' ,
      checked: false ,
      num: 1,
      priceCount:'',
      status:1
      },{ 
      name: '商品名称333333333333333333333333', 
      img: "/image/满减.png",
      itemset:'红色',
      price:'1.23',
      value: '2' ,
      checked: false ,
      num: 1,
      priceCount:'',
      status:2
      },{ 
      name: '商品名称4444443333', 
      img: "/image/满减.png",
      itemset:'红色',
      price:'1.23',
      value: '3' ,
      checked: false ,
      num: 1,
      priceCount:'',
      status:0
      }
    ],
    isAllSelect:false,
    allPriceCount:'0.00',
    minusStatus: 'disabled',
    send:'6.00',
    bonus:'10.00',
    footerBtn:'结算',
    itemCount:'',
    //弹窗设置
    setWindow: {
      headicon: "/image/邮.png",
      nickname: '',
      price: '100.00',
      count: 4,
    },
    radioItems: [{
      name: '玫瑰金',
      price: '100.00',
      value: '0',
    }, {
      name: '银灰色',
      price: '200.00',
      value: '1',

    }, {
      name: '红色',
      price: '300.00',
      value: '2',
    }],
    showDialog: false,
    dialogStatus:{
      num: 1,
      minusStatus: 'disabled',
      //合计
      priceCount: '',
    },
    editBuyCar:false,
    buyCarCount:0
  },
  methods: {
    checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value);

      var checkboxItems = this.data.checkboxItems, values = e.detail.value;
      var canBuyItems = []
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }
      this.setData({
        checkboxItems: checkboxItems
      });
      for (let t = 0; t < checkboxItems.length; t++) {
        if (checkboxItems[t].status == 0) {
          canBuyItems.push(checkboxItems[t])
        }
      }
      var count = 0
      var allCount = 0
      for (let t = 0; t < canBuyItems.length; t++) {
        if (canBuyItems[t].checked == true) {
          count++
        }
      }
      for (let t = 0; t < checkboxItems.length; t++) {
        if (checkboxItems[t].checked == true) {
          allCount++
        }
      }
      if(this.data.editBuyCar==false){
        if (count == canBuyItems.length) {
          this.data.isAllSelect = true
        }
        else {
          this.data.isAllSelect = false
        }
      }
      else if (this.data.editBuyCar == true) {
        if (allCount == checkboxItems.length) {
          this.data.isAllSelect = true
        }
        else {
          this.data.isAllSelect = false
        }
      }
      console.log(count)
      this.setData({
        isAllSelect: this.data.isAllSelect,
        buyCarCount: count
      });
      this.countPrice()
    },
    allSelect: function (e) {
      var isAllSelect=this.data.isAllSelect
      var checkboxItems = this.data.checkboxItems;
      if (isAllSelect == false) {
        for (let i = 0; i < checkboxItems.length; i++) {
          if (checkboxItems[i].status == 0){
            checkboxItems[i].checked = true;
          }
        }
      }
      else {
        for (let i = 0; i < checkboxItems.length; i++) {
          if (checkboxItems[i].status == 0) {
            checkboxItems[i].checked = false;
          }
        }
      }
      isAllSelect = !isAllSelect
      this.setData({
        isAllSelect: isAllSelect,
        checkboxItems: checkboxItems
      });
      this.countPrice();
    },
    allSelectAno: function (e) {
      var isAllSelect = this.data.isAllSelect
      var checkboxItems = this.data.checkboxItems;
      if (isAllSelect == false) {
        for (let i = 0; i < checkboxItems.length; i++) {
            checkboxItems[i].checked = true;
        }
      }
      else {
        for (let i = 0; i < checkboxItems.length; i++) {
            checkboxItems[i].checked = false;
        }
      }
      isAllSelect = !isAllSelect
      this.setData({
        isAllSelect: isAllSelect,
        checkboxItems: checkboxItems
      });
      this.countPrice();
    },
    //计数器
    /* 点击减号 */
    bindMinus: function (e) {
      var checkboxItems = this.data.checkboxItems
      var currId = e.currentTarget.dataset.id
      var num = this.data.checkboxItems[currId].num;
      // 如果大于1时，才可以减  
      if (num > 1) {
        checkboxItems[currId].num--;
      }
      var priceCount = (this.data.checkboxItems[currId].price * num).toFixed(2)
      // console.log(priceCount)
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num <= 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        checkboxItems: checkboxItems,
        minusStatus: minusStatus,
        priceCount: priceCount,
      });
      this.countPrice()
    },
    /* 点击加号 */
    bindPlus: function (e) {
      var checkboxItems = this.data.checkboxItems
      var currId = e.currentTarget.dataset.id
      var num = this.data.checkboxItems[currId].num;
      // 不作过多考虑自增1  
      checkboxItems[currId].num++;
      var priceCount = (this.data.checkboxItems[currId].price * num).toFixed(2)
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        checkboxItems: checkboxItems,
        minusStatus: minusStatus,
        priceCount: priceCount,
      });
      // console.log(priceCount)
      this.countPrice()
    },
    /* 输入框事件 */
    bindManual: function (e) {
      var checkboxItems = this.data.checkboxItems
      var currId = e.currentTarget.dataset.id
      var num = e.detail.value;
      // console.log(num)
      checkboxItems[currId].num = num
      // 将数值与状态写回  
      var priceCount = (this.data.checkboxItems[currId].price * num).toFixed(2)
      this.setData({
        checkboxItems: checkboxItems,
        priceCount: priceCount,
      });
      this.countPrice()
    },
    countPrice: function (e) {
      var checkboxItems = this.data.checkboxItems
      var canBuyItems = this.data.canBuyItems
      // console.log(canBuyItems)
      var price = [] , allPrice = 0
      for (let i = 0; i < checkboxItems.length;i++){
        if (checkboxItems[i].status == 0 && checkboxItems[i].checked == true) {
          price.push(parseFloat(checkboxItems[i].price * checkboxItems[i].num))
          // console.log(parseFloat(checkboxItems[i].priceCount))
        }
      }
      for (let i = 0; i < price.length; i++) {
        allPrice+=price[i]
      }
      // if(this.data.isAllSelect==false) {
      //   allPrice = '0.00'
      // }
      // else {
        // allPrice = (allPrice + parseFloat(this.data.send) + parseFloat(this.data.bonus)).toFixed(2)
      // }
      // console.log(price)
      // console.log(allPrice)
      this.setData({
        allPriceCount: allPrice
      });
    },
    onLoad:function(option) {
      this.countItem();
      this.countPrice();
      this.priceCountInt();
    },
    onShow: function (option){
      this.list();
    },
    countItem: function () {
      var itemCount = this.data.checkboxItems.length
      this.setData({
        itemCount: itemCount
      });
    },
    priceCountInt: function () {
      var checkboxItems = this.data.checkboxItems
      for (let i = 0; i < checkboxItems.length; i++) {
        checkboxItems[i].priceCount = checkboxItems[i].price * checkboxItems[i].num
      }
    },
    openDialog: function (e) {
      console.log(e.currentTarget.dataset.id)
      var dialogId = e.currentTarget.dataset.id
      var priceCount = this.data.setWindow.price
      this.setData({
        priceCount: priceCount,
        setistrue: true,
        dialogId: dialogId
      })
      wx.hideTabBar({
        success:function () {
          console.log(1234568)
        },
        fail: function() {
          console.log(87543)
        }
      })
      // console.log(this.getTabBar())
    },
    closeDialog: function () {
      this.setData({
        setistrue: false
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
        'dialogStatus.priceCount': setPrice,
        'dialogStatus.num': 1
      });
    },
    //计数器
    /* 点击减号 */
    dialogBindMinus: function () {
      var num = this.data.dialogStatus.num;
      // 如果大于1时，才可以减  
      if (num > 1) {
        num--;
      }
      var priceCount = (this.data.setWindow.price * num).toFixed(2)
      // console.log(priceCount)
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num <= 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        'dialogStatus.num': num,
        minusStatus: minusStatus,
        'dialogStatus.priceCount': priceCount,
      });
    },
    /* 点击加号 */
    dialogBindPlus: function () {
      var num = this.data.dialogStatus.num;    
      if (num < this.data.setWindow.count) {
        num++;
      }
      var priceCount = (this.data.setWindow.price * num).toFixed(2)
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        'dialogStatus.num': num,
        minusStatus: minusStatus,
        'dialogStatus.priceCount': priceCount,
      });
    },
    /* 输入框事件 */
    dialogBindManual: function (e) {
      var num = e.detail.value;
      if (num > this.data.setWindow.count) {
        num = this.data.setWindow.count;
      }
      var priceCount = (this.data.setWindow.price * num).toFixed(2)
      this.setData({
        'dialogStatus.num': num,
        'dialogStatus.priceCount': priceCount,
      });
    },
    changeSet: function (e) {
      // console.log(this.data.setWindow.nickname)
      // console.log(this.data.setWindow.price)
      // console.log(this.data.dialogStatus.num)
      var dialogId = this.data.dialogId
      var checkboxItems = this.data.checkboxItems
      checkboxItems[dialogId].itemset = this.data.setWindow.nickname
      checkboxItems[dialogId].price = this.data.setWindow.price
      checkboxItems[dialogId].num = this.data.dialogStatus.num
      this.setData({
        checkboxItems: checkboxItems
      });
      this.countPrice()
      this.closeDialog()
    },
    toEdit: function () {
      var checkboxItems = this.data.checkboxItems;
      for (let i = 0; i < checkboxItems.length; i++) {
        checkboxItems[i].checked = false;
      }
      this.setData({
        checkboxItems: checkboxItems,
        editBuyCar: true,
        isAllSelect:false
      });
    },
    saveEdit: function () {
      var checkboxItems = this.data.checkboxItems;
      for (let i = 0; i < checkboxItems.length; i++) {
        checkboxItems[i].checked = false;
      }
      this.setData({
        checkboxItems: checkboxItems,
        editBuyCar: false,
        isAllSelect: false
      });
    },
    deleteBuyCar:  function(e) {
      var checkboxItems = this.data.checkboxItems;
      for (let i = checkboxItems.length; i > 0; i--) {
        if (checkboxItems[i - 1].checked == true) {
          checkboxItems.splice(i - 1, 1)
        }
      }
      this.setData({
        checkboxItems: checkboxItems
      });
    },
    toAfford: function(e) {
      wx.navigateTo({
        url: '/pages/afford/afford',
      })
    },
    list(){
      wx.request({
        url: app.globalData.requestDomain+'/cart' ,
        success:  (res) => {
          console.log("查找成功：");
          console.log(res);
        
          //this.data.checkboxItems = res.data.data;
          this.setData({
            checkboxItems: res.data.data
          })
          wx.hideLoading();
        },
        fail: function (res) {
          console.log("查找失败：");
          console.log(res);
          wx.hideLoading();
        }
      })
    }
  }
})