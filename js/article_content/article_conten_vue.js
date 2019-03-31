new Vue({
    el:'#key_words',
    data:{
        key_words:[
            '中国经济',
            '美国美联储',
            '全球经济',
            '吸引外资',
            '外商投资'
        ]
    }
});
new Vue({
    el:'#right_title_vue',
    data:{
        title_list:[
            {title:'东南大学事情111',time:'2019-03-29'},
            {title:'东南大学事情222222',time:'2019-03-29'},
            {title:'东南大学事情33333333',time:'2019-03-29'},
            {title:'东南大学事情44444444',time:'2019-03-29'},
            {title:'东南大学事情55555555',time:'2019-03-29'}
        ]
    }
});
new Vue({
    el:'#right_title_vue_1',
    data:{
        title_list:[
            {title:'东南大学事情111',time:'阅读1000'},
            {title:'东南大学事情222222',time:'阅读900'},
            {title:'东南大学事情33333333',time:'阅读800'},
            {title:'东南大学事情44444444',time:'阅读700'},
            {title:'东南大学事情55555555',time:'阅读600'}
        ]
    }
});
new Vue({
    el:'#main_box',
    data:{
        article_font_size:{
            'font_size_big':false,
            'font_size_small':false,
            'font_size_normal':true
        }
    },
    methods:{
        font_big:function (event) {
            this.article_font_size={'font_size_big':true,'font_size_small':false, 'font_size_normal':false}
        },
        font_small:function (event) {
            this.article_font_size={'font_size_big':false,'font_size_small':true, 'font_size_normal':false}
        },
        font_normal:function (event) {
            this.article_font_size={'font_size_big':false,'font_size_small':false, 'font_size_normal':true}
        }
    }
});

