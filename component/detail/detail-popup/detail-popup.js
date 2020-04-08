// component/detail/detail-popup/detail-popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsDetail: {
      type: {},
      val: ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    operation: '立即购买',
    isShow: true

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击购物车
    tapCar(e) {
      console.log('商品加入购物车');
      this.setData({
        isShow:true,
        operation: '加入购物车'
      });

    },
    //点击订单
    tapOrder(e) {
      console.log('商品下单');
      this.setData({
        isShow:true,
        operation: '立即购买'
      });

    }
    //关闭弹窗
    closePopUp(){
      this.setData({
        isShow:false
      })
    }
  }

})
