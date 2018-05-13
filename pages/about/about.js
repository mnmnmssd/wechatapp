var postData = require('../data/data-databases.js')
var userpost = postData.postlist;
  var itemposts;
Page({
  data: {
    height: 20,
    focus: false
  },
  onLoad:function(){
    this.setData({
      data:userpost
    })
  },
   userpost:function(event){
     var post = event.detail.value;
     wx.setStorageSync("post", post);
     console.log(post);
   },
   userdate: function (event) {
     var date = event.detail.value;
     wx.setStorageSync("date", date);
     console.log(date);
   },
   userzan: function (event) {
     var zan = event.detail.value;
     wx.setStorageSync("zan", zan);
     console.log(zan);
   },
  userput: function (event) {
    var date = wx.getStorageSync("date");
    var post = wx.getStorageSync("post");
    var contouned = wx.getStorageSync("zan");
    var posts = {
      date,
      post,
      contouned
    };
    userpost.unshift(posts);
    wx.setStorageSync("posts", userpost);
  }
})