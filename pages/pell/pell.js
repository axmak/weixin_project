var app = getApp()
// pages/pell/pell.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plllist:[],
    pcount:[],
    showitem:false,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var getplllist = app.globalData.pelllist;
    var getpcount = app.globalData.pellcount;
    var total = app.globalData.total;
    console.log("total",total)
    console.log(getplllist);
    console.log(getpcount);
    var arrNew = [];
    var arr = getpcount;
    for (var i in arr) {
      if (arr[i] !== 0) {
        arrNew.push(arr[i]);
      }
    }
    console.log(arrNew);
    var result = [];
    var obj = {};
    for (var i = 0; i < getplllist.length; i++) {
      if (!obj[getplllist[i].pid]) {
        result.push(getplllist[i]);
        obj[getplllist[i].pid] = true;
      }
    }
    console.log("result", result);
    this.setData({
      plllist: result,
      pcount: arrNew,
      total:total
    })
    if(this.data.plllist.length>0){
      this.setData({
        showitem:true
      })
    }
    if (this.data.plllist.length = 0) {
      this.setData({
        showitem: false
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
    var getplllist = app.globalData.pelllist;
    var getpcount = app.globalData.pellcount;
    var total = app.globalData.total;
    console.log("total", total)
    console.log(getplllist);
    console.log(getpcount);
    var arrNew = [];
    var arr = getpcount;
    for (var i in arr) {
      if (arr[i] !== 0) {
        arrNew.push(arr[i]);
      }
    }
    console.log(arrNew);
    var result = [];
    var obj = {};
    for (var i = 0; i < getplllist.length; i++) {
      if (!obj[getplllist[i].pid]) {
        result.push(getplllist[i]);
        obj[getplllist[i].pid] = true;
      }
    }
    console.log("result", result);
    this.setData({
      plllist: result,
      pcount: arrNew,
      total: total
    })
    if (this.data.plllist.length > 0) {
      this.setData({
        showitem: true
      })
    }
    if (this.data.plllist.length = 0) {
      this.setData({
        showitem: false
      })
    }
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