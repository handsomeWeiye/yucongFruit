// pages/index.js
const WXAPI = require('apifm-wxapi')
WXAPI.init('weiye')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsDetail: {},
        goodsReputation:[],
        isDetail: true
    },

    onLoad: function (options) {
        this.getGoodsDetail();
        this.getGoodsReputation();
    },

    //获取用户选择情况
    getIsDetail(e) {
        console.log('传来的值为', e.detail.val);
        this.setData({
            isDetail: e.detail.val
        })
    },

    //获取商品详情数据
    getGoodsDetail() {
        WXAPI.goodsDetail(368261).then(res => {
            if (res.code == 0) {
                console.log('商品详情：', res.data)
                this.setData({
                    goodsDetail: res.data
                })
            }
        })
    },
    //获取商品评价数据
    getGoodsReputation(){
        WXAPI.goodsReputation(368311).then(res => {
            if (res.code == 0) {
                console.log('商品评价：', res.data)
                this.setData({
                    goodsReputation: res.data
                })
            }else{
                console.log('获取商品评价');
            }
        }) 
    },


})