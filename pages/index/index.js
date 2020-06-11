//index.js
//获取应用实例
const app = getApp()
import api from '../../api/api'
Page({
  data: {
    bannerList:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    shopInterval:true,
    shopAutoplay:true,
    vertical:true,
    inputValue:'',
    scrollShopList:[],
    notice:{},
    navList:[],
    seckillList:[],
    recommendList:[]
  },
  onLoad(){
    this.getBannerList()
    this.getScrollShop()
    this.getNoticeList()
    this.getIndexNav()
    this.getSeckillList()
    this.getRecommendList()
  },
  getRecommendList(){
    api.getRecommend({
      recommendStatus:1
    }).then(res=>{
      if(res.data.code === 0){
        let { data } = res.data;
        this.setData({
          recommendList:data
        })
      }
      
    })
  },
  getSeckillList(){
      api.getSeckill({
        miaosha:true
      }).then(res=>{
        if(res.data.code == 0){
          let list = res.data.data;
          let now = new Date().getTime()
          let arr = list.map(item=>{
            return {
              pic:item.pic,
              name:item.name,
              isStart:now - new Date(item.dateStart).getTime() > 0 ? true :false,
              isOver: now - new Date(item.dateEnd).getTime() > 0 ? true : false,
              id:item.id,
              dateEndInt: new Date(item.dateEnd).getTime() - now,
              dateStartInt:new Date(item.dateStart).getTime() - now,
              originalPrice:item.originalPrice,
              stores:item.stores,
              minPrice:item.minPrice
            }
          })
          this.setData({
            seckillList:arr
          })
        }
      })
  },
  getIndexNav(){
    api.getNavList()
      .then(res=>{
        if(res.data.code == 0){
          let data = res.data.data;
          this.setData({
            navList:data
          })
        }
      })
  },
  goCategory(e){
    let id = e.currentTarget.dataset.id;
    app.globalData.categoryId = id;
    wx.switchTab({
      url: `/pages/category/category`
    })
  },
  getNoticeList(){
    api.getNotice({
      pageSize:5
    }).then(res=>{
      if(res.data.code == 0){
        let obj = Object.assign({},this.data.notice,res.data.data)
        this.setData({
          notice:obj
        })
      }
    })
  },
  getScrollShop(){
      api.getScrollShop({
        type:'0'
      }).then(res=>{
        if(res.data.code === 0 && res.data.data.length > 0){
          let data = res.data.data;
          this.setData({
            scrollShopList:data
          })
        }
      })
      
  },
  bindconfirm(e) {
    this.setData({
      inputValue: e.detail.value
    })
    wx.navigateTo({
      // todo
      // 跳转到商品页
      // url:''
    })
  },
  searchShop(){
    console.log(this.data.inputValue)
    wx.navigateTo({
      // todo
      // 跳转到商品页
      // url: '',
    })
  },
  bindKeyInput(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  getBannerList(){
    api.getSwiper({
      type:'index'
    }).then(res=>{
      if(res.data.code == 0 && res.data.data.length > 0){
        let data = res.data.data;
        this.setData({
          bannerList:data
        })
      }
    })
    
    // if(res.code == 0 && res.data.data.length > 0){
    //   console.log(res.data.data)
    // }
  }
    
  
})
