new Vue({
    el:'#vue_div',
    data:{
        key_words:[
            '中国经济',
            '美国美联储',
            '全球经济',
            '吸引外资',
            '外商投资'
        ],
        article_font_size:{
            'font_size_big':false,
            'font_size_small':false,
            'font_size_normal':true
        },
        right_title_list:[
            {title:'东南大学事情111',time:'2019-03-29'},
            {title:'东南大学事情222222',time:'2019-03-29'},
            {title:'东南大学事情33333333',time:'2019-03-29'},
            {title:'东南大学事情44444444',time:'2019-03-29'},
            {title:'东南大学事情55555555',time:'2019-03-29'}
        ],
        right_title_list_1:[
            {title:'东南大学事情111',time:'阅读1000'},
            {title:'东南大学事情222222',time:'阅读900'},
            {title:'东南大学事情33333333',time:'阅读800'},
            {title:'东南大学事情111',time:'阅读1000'},
            {title:'东南大学事情222222',time:'阅读900'},
            {title:'东南大学事情33333333',time:'阅读800'},
            {title:'东南大学事情111',time:'阅读1000'},
            {title:'东南大学事情222222',time:'阅读900'},
            {title:'东南大学事情33333333',time:'阅读800'}
        ],
        share:[
            {pic_src:"imgs/article_content/qq.png",color:"#f06466"},
            {pic_src:"imgs/article_content/qq-z.png",color:"#6ba2d6"},
            {pic_src:"imgs/article_content/sina.png",color:"#f2bc3a"},
            {pic_src:"imgs/article_content/wechat.png",color:"#8cc53f"}
        ],
        recoment_title_author:[
            {title:"韩国载198人高铁全部脱轨14人受伤",time:"2018-12-08"},
            {title:"高雄4小时连发两枪击事件 19辆车街头互撞",time:"2017-01-21"},
            {title:"郝龙斌宣布参选国民党主席：不忍党一天天走下坡",time:"2017-01-07"},
            {title:"今年最佳扣篮，可能属于这名16岁男孩",time:"2016-11-23"},
        ],
        recoment_title_content:[
            {title:"禁止来台宣扬“一国两制”，蔡英文又筑新墙",time:"2019-04-17 17:13"},
            {title:"搬砖的安全帽不如领导？应急管理部回应",time:"2019-04-17 17:13"},
            {title:"偷摸国宝惹众怒 她回应：是熊猫宝宝越狱成功兼碰瓷",time:"2019-04-17 17:13"},
            {title:"用种地攒的钱“发烧”天文 这个农民好酷",time:"2019-04-17 17:13"},
            {title:"“马背上建校”的石河子大学，如今同层换教室要走8分钟",time:"2019-04-17 17:13"},
        ]
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

