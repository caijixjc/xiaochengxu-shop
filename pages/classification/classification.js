// pages/classification/classification.js
const { request } = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [],//总数据
    classifyIndex: 0,//点击的索引值
    subClassify: [],//右侧二级分类
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getclassifyData();
  },

  changeTab(evexnt) {
    const { index } = evexnt.currentTarget.dataset;
    this.setData({
      subClassify:this.data.classify[index].children,
      classifyIndex: index,

    })
  },
  // 分类数据
  getclassifyData() {
    request({ url: "categories" })
      .then(res => {
        this.setData({
          classify: res,
          subClassify: res[this.data.classifyIndex].children
          
        })
      })
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