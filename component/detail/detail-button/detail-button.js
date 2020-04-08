// component/detail/detail-button/detail-button.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: { isDetail: true },

    /**
     * 组件的方法列表
     */
    methods: {
        selectDetail() {
            this.setData({
                isDetail:true
            });
            this.sendIsDetail();
        },
        selectComment() {
            this.setData({
                isDetail:false
            });
            this.sendIsDetail();
        },       
        sendIsDetail(){     
            var isDetail ={
                val:this.data.isDetail
            }
            console.log('输出的值为',isDetail);
            this.triggerEvent('isDetailVal',isDetail)
        }

    }
})