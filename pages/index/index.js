const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    lists:[],
    list: [],
    load: true,
    plist:[],
    pcount:[],
    buyshow:false,
    sum:0,
    total:0,
    pelllist:[],
    baseurl:''
  },
  onLoad() {
    var baseurl = app.globalData.baseurl;
    console.log(888888888, baseurl);
    this.setData({
      baseurl:baseurl
    })
    var $=this;
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    for (let i = 0; i < 8; i++) {
      list[i] = {};
      list[i].name = String.fromCharCode(65 + i);
      list[i].id = i;
    }
    this.setData({
      list: list,
      listCur: list[0]
    }),
    wx.request({
      url: this.data.baseurl +'/nav',
      success:(res)=>{
        this.setData({
          lists:res.data
        })
      }
    })
  },
  onReady() {
    wx.hideLoading(),
      wx.request({
      url: this.data.baseurl +'/getProduct?fid=' + 0,
        method: "GET",
        success: (res) => {
          this.setData({
            plist: res.data
          })
        }
      })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
    console.log(e.target.dataset)
    var id = e.target.dataset.id;
    wx.request({
      url: this.data.baseurl+'/getProduct?fid='+id,
      method: "GET",
      success:(res)=>{
        var pcarr = [];
        for (var i = 0;i < res.data.length;i++){
          pcarr.push(res.data[i].pcount);
        }
        console.log(pcarr);
        this.setData({ 
          plist:res.data,
          pcount:pcarr
        })
        console.log(123,res.data)
      }
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  add(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    console.log(this.data.plist);
    var pcount=[];
    for (var i = 0;i<this.data.plist.length;i++){
      if (id == this.data.plist[i].pid){
        var c=this.data.pcount[i];
        var n=parseInt(c);
        n++;
        pcount.push(n);
      }else{
        var nc = this.data.pcount[i];
        var nc = parseInt(nc);
        pcount.push(nc);
        console.log(nc);
      }
    }
    console.log(132, pcount);
    var sum=0;
    var total = 0;
    var plist = this.data.plist;
    for(var i=0;i<pcount.length;i++){
      sum+=pcount[i];
      total += (plist[i].price * 100000 * pcount[i]) / 100000;
      console.log(55555,total)
    }
    app.globalData.total = total;
    console.log("total", app.globalData.total)
    console.log(6666,sum)
    this.setData({
      pcount:pcount,
      buyshow:true,
      sum:sum,
      total:total
    })
    var pellitem=this.data.plist;
    var kid=e.currentTarget.dataset.kid;
    console.log("pellitem",pellitem[kid].pid);
    var fpelllist = this.data.pelllist;
    fpelllist.push(pellitem[kid]);
    console.log("fpelllist",fpelllist[kid].pid);
    console.log("length", fpelllist.length);
    this.setData({
      pelllist: fpelllist
    })
    console.log(456456456,this.data.pelllist);
    app.globalData.pelllist = this.data.pelllist;
    app.globalData.pellcount = this.data.pcount;
  },
  cut(e){
    console.log(e.currentTarget.dataset);
    var id = e.currentTarget.dataset.id;
    console.log(this.data.pcount);
    var pcount = [];
    for (var i = 0; i < this.data.plist.length; i++) {
      if (id == this.data.plist[i].pid) {
        console.log(11111111, this.data.pcount)
        var c = this.data.pcount[i];
        var n = parseInt(c);
        if(n>1){
          n--;
        }else{
          n=0;
          this.setData({
            buyshow: false,
          })
        }
        pcount.push(n);
      } else {
        var nc = this.data.pcount[i];
        var nc = parseInt(nc);
        pcount.push(nc);
        console.log(nc)
      }
    }
    console.log(132, pcount);
    var sum = 0;
    var total=0;
    var plist=this.data.plist;
    for (var i = 0; i < pcount.length; i++) {
      sum += pcount[i];
      total+= (plist[i].price *100000* pcount[i])/100000
    }
    app.globalData.total = total;
    console.log("total", app.globalData.total)
    this.setData({
      pcount: pcount,
      sum:sum,
      total:total
    })
    var pellitem = this.data.plist;
    var kid = e.currentTarget.dataset.kid;
    var fpelllist = this.data.pelllist;
    fpelllist.shift();
    console.log("length", fpelllist.length);
    this.setData({
      pelllist: fpelllist
    })
    console.log(456456456, this.data.pelllist);
    app.globalData.pelllist = this.data.pelllist;
    app.globalData.pellcount = this.data.pcount;
  },
  topell(){
    wx.switchTab({
      url: '/pages/pell/pell',
    })
  }
})