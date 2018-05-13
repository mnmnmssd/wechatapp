var postData = require("../data/data-databases.js")
var zan = wx.getStorageSync("posts")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(postData.postlist)
    wx.setStorageSync("posts", postData.postlist)

    this.setData({
      data_key:postData.postlist,
    })
    console.log(postData.postlist)
  },

  onZaned:function(event){
    wx.setStorageSync("zan",zan[3].contouned++)
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
    var posts = wx.getStorageSync("posts");
    // console.log(posts);
    postData.postlist = posts;
    this.setData({
      data_key: postData.postlist
    })

    wx.stopPullDownRefresh()
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