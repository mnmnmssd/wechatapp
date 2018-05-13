var postData = require('../data/data-databases.js')
var userpost = postData.postlist;
var itemposts;
Page({
  data: {
    post: '',
    date: '',
    contouned: ''
  },
  onLoad: function () {
    this.setData({
      data: userpost
    })
  },
  userpost: function (event) {
    var post = event.detail.value;
    this.data.post = post;
  },
  userdate: function (event) {
    var date = event.detail.value;
    this.data.date = date;
  },
  userzan: function (event) {
    var zan = event.detail.value;
    this.data.contouned = zan;
  },
  userput: function (event) {
    var posts = {
      date:this.data.date,
      post:this.data.post,
      contouned:this.data.contouned
    };
    if (!this.data.post) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return;
    }
    userpost.unshift(posts);
    wx.setStorageSync("posts", userpost);
  },
  onShareAppMessage: function () {

  }
})