Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "护肤",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '洁面皂',
              image: '/image/icon_API_HL.png',
              price:'1.23'
            },
            {
              child_id: 2,
              name: '卸妆',
              image: '/image/icon_API_HL.png'
            },
            {
              child_id: 3,
              name: '洁面乳',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 4,
              name: '面部祛角质',
              image: '/image/icon_API_HL.png'
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "彩妆",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '气垫bb',
              image: '/image/icon_API_HL.png'         
            },
            {
              child_id: 2,
              name: '修容/高光',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 3,
              name: '遮瑕',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 4,
              name: '腮红',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 5,
              name: '粉饼',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 6,
              name: '粉底',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 7,
              name: '蜜粉/散粉',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 8,
              name: '隔离霜',
              image: '/image/icon_API_HL.png'            
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "香水/香氛",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '淡香水EDT',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 2,
              name: '浓香水EDP',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 3,
              name: '香体走珠',
              image: '/image/icon_API_HL.png'            
            },
            {
              child_id: 4,
              name: '古龙香水男士的最爱',
              image: '/image/icon_API_HL.png'            
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0,
    classKind: 1,
    showPic:true,
    listStyle:true
  },

  //事件处理函数  
  methods:{
    switchRightTab: function (e) {
      // 获取item项的id，和数组的下标值  
      let id = e.target.dataset.id,
        index = parseInt(e.target.dataset.index);
      // 把点击到的某一项，设为当前index  
      this.setData({
        curNav: id,
        curIndex: index
      })
    },

    isDetail: function (e) {
      console.log(e.currentTarget.dataset.id);
      wx.navigateTo({
        url: "../Detail/Detail?child_id=" + e.currentTarget.dataset.id
      })
    },

    changeStyleTo1: function(e) {
      this.setData({
        className: {
          left: 'nav_left-04',
          right: 'nav_right-04'
        }
      })
    },
    changeStyleTo2: function (e) {
      this.setData({
        listStyle: true
      })
    }
  }
})