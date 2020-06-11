import api from "../../api/api";

//category.js
var app = getApp()
Page({
  data: {
    navList:[],
    categoryList:[],
    activeId:''
  },
  navList(){
      api.getNavList()
        .then(res=>{
          if(res.data.code == 0){
            let data = res.data.data;
            this.setData({
              navList:data
            },()=>{
              if(this.data.activeId == ''){
                this.setData({
                  activeId:data[0].id
                })
              }
            })
          }
        })
  },
  onLoad(options) {
    this.navList();
  },
  
  onShow(){
    let categoryId = app.globalData.categoryId;
      if(categoryId){
        this.setData({
          activeId:categoryId
        })
      }
  }
})
