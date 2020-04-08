// component/detail/detail-comment/detail-comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comments:{
      type:[],
      val:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    comments:[]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getComments(){
      var comments = this.properties.comments;
      this.setData({
        comments:comments
      })
    }

  },
  attached(){
    this.getComments()
  }
  
})
