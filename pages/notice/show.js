var app = getApp();
const WXAPI = require('apifm-wxapi')
WXAPI.init('weiye')
var WxParse = require('../../templates/wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);

    WXAPI.noticeDetail(options.id).then(res => {
      console.log(res.data);
      this.setData({
        notice: res.data
      });
      WxParse.wxParse('article', 'html', res.data.content, this, 5);
    }
    )


  },

})