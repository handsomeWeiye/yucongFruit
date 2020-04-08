// component/detail-swiper.js
var app = getApp()
const WXAPI = require('apifm-wxapi')
WXAPI.init('weiye')

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        goodsDetail: {
            type: {},
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        autoplay: true,
        interval: 3000,
        duration: 1000,

    },

    /**
     * 组件的方法列表
     */
    methods: {
        //事件处理函数
        swiperchange: function(e) {
            //console.log(e.detail.current)
            this.setData({
                swiperCurrent: e.detail.current
            })
        },

    },

})