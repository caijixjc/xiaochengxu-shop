// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:'',//搜索关键字
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const {query} = options
    this.setData({
      query
    })
  },

  inputChange(event){
    console.log(event);
    console.log("改变");
  },
  inputfocus(event){
    console.log(event);
    console.log("获取焦点");
  },
  inoutdone(event){
    console.log(event);
    console.log("点击键盘完成时触发");
  },
  inputlose(event){
    console.log(event);
    console.log("失去焦点");
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