import api from '../../api/api'
Page({
  data: {
    list: [],
    isStart:false,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  onLoad: function () {
    this.startList()
  },
  startList(){
    this.isStart = wx.getStorageSync('isStart') ? true : false
    if(this.isStart){
      wx.switchTab({
        url: '/pages/index/index'
      })
    }else{
     
      api.getState({
        type:'app'
      }).then(res=>{
        if(res.data.code === 0){
          this.setData({
            list:res.data.data
          })
        }
      })
    }
  },
  goIndex(){
    wx.switchTab({
      url: '/pages/index/index'
    })
    wx.setStorageSync('isStart','true')
  }
})
