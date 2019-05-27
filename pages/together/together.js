// pages/together/together.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pno:0,
    pagesize:2,
    key:'',
    showsearch:false,
    slist:[],
    baseurl:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var baseurl = app.globalData.baseurl;
    console.log(888888888, baseurl);
    this.setData({
      baseurl:baseurl
    }),
    this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  loadMore() {
    var pno=this.data.pno;
    pno++;
    var pagesize = this.data.pagesize;
    wx.request({
      url: this.data.baseurl+"/getto?pno="+pno,
      method: "GET",
      success: (res) => {
        var list = res.data;
        var rows = this.data.list.concat(list)
        console.log(this.data.list);
        this.setData({
          list: rows,   //当前页内容 
          pno:pno,   //修改当前页数
        })
      }
    })
  },
  getinfo:function(e){
    var key = e.detail.value.key;
    console.log(key);
    wx.request({
      url: 'http://127.0.0.1:3333/search?key='+key,
      method:"GET",
      success:(res=>{
        console.log(res.data);
        this.setData({
          slist: res.data,
          showsearch: true
        })
      })
    })
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})