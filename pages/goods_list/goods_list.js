// pages/goods_list/goods_list.js
const { request } = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      keyword:'',
      goods:[],//搜索分类数据
      goodsIndex:0,//筛选索引
      cid:'',//分类ID
      pagenum:1,//默认第一页
      pagesizi:20,//每页长度
      hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取cid和关键字
    const {keyword,cid} = options
    this.setData({
      keyword,
      cid
    });
    // 获取页数和每页的数据
    const {pagenum,pagesizi} = this.data
    this.getListData({
      query:keyword,
      cid,
      pagenum,
      pagesizi
    });
  },


 
  // 请求分类数据
  getListData(params){
    request({
      url: "goods/search",
      data: {
     ...params
      }
    })
      .then(res => {
        const { goods } = res;

        if(goods.length<this.data.pagesizi){
          this.setData({
            hasMore:false
          })
          wx.showToast({
            title:"数据加载完毕",
            icon:"none"
          })
        }

        this.setData({
          // 新老数据合并在一起再返回
          // 老数据在前新数据在后
          goods:[...this.data.goods,...goods],
        });
        wx.stopPullDownRefresh();
      })
      
      
  },

   /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("用户上啦触底啦");
  // 因为解构的属性要发生变化所以使用let
    let {
      cid,
      keyword,
      pagenum,
      pagesizi,
      hasMore
    }=this.data
    //因为要获取下一页 所以新的页数要++
    if(!hasMore) return;
    pagenum++
    this.setData({
      pagenum
    })
    // 每次页面上拉都会发起请求
      this.getListData({keyword,cid,pagesizi,pagenum})

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
    console.log("用户下拉刷新啦");
    let {
      keyword,
      goods,
      cid,
      pagenum,
      pagesizi,
      hasMore
    }=this.data;
    // 重新给参数赋值
      goods=[],
      pagenum=1,
      hasMore= true
      this.setData({
        goods,
        pagenum,
        hasMore:true
      })
      // 使用新参数去请求数据
    this.getListData({
      query:keyword,
      cid,
      pagenum,
      pagesizi
    });
  },

 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      console.log("点击了分享");
  }
})