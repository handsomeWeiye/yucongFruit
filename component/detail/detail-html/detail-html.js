// component/detail/detail-html/detail-html.js
var WxParse = require('../../../templates/wxParse/wxParse.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    html:{
      type: String,
      val:''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    convert(){
      this.setData({
        html:this.properties.html.replace(/\<img/gi, '<img style="max-width:100%;height:auto" mode="widthFix"')
      })
      console.log(this.data.html);
    }
    
    
  },
  attached(){
    this.convert();
  }
    
})
