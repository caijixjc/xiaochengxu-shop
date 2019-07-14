Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    slideshow: [],//轮播图
    menu:[],//菜单栏图片
    floordata:[],//楼层数据
    showTop:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图数据
  this.getslideData();
    // 导航栏
  this.getnavData();
    // 楼层数据
    this.getfoorData();
  },
  // 轮播图数据
  getslideData(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',

      success: res => {
        const {message} = res.data;
        this.setData({
          slideshow:message
        })
      }
    })
  },
  // 导航栏数据
  getnavData(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
     
      success: res => {
        const {message} = res.data;
        this.setData({
          menu:message
        })
      }
    })
  },
  // 楼层数据
  getfoorData(){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        const {message} = res.data;
        this.setData({
          floordata:message
        })
      }
    })
  },
  // 回到顶部
  goTop(event){
    console.log(event);
    const {top} = event.currentTarget.dataset;
    wx.pageScrollTo({
      scrollTop:top,
      duration:300
    })
  },
  onPageScroll(event){
    const { scrollTop } = event;
    if (scrollTop > 200){
      this.setData({
        showTop: true
      })
    }else{
      this.setData({
        showTop: false
      })
    }
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