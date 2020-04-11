const message = {
    data: function () {
        return {
            msgLists: [{
                    'id': 1,
                    'url': './images/img00.jpg',
                    'name': '小明',
                    'msg': '[图片]',
                    'time': '下午4:58',
                    'font': null
                },
                {
                    'id': 2,
                    'url': './images/img01.jpg',
                    'name': '奋斗de青春',
                    'msg': '也不知道为啥，想不明白',
                    'time': '下午9:18',
                    'font': '&#xe6ba;'
                },
                {
                    'id': 3,
                    'url': './images/img02.jpg',
                    'name': '意境__美',
                    'msg': '坚信自已 天再黑总会亮永不放弃 天...',
                    'time': '下午9:18',
                    'font': null
                },
                {
                    'id': 4,
                    'url': './images/img03.jpg',
                    'name': '妹妹',
                    'msg': '这一道题啥意思，我不太明白',
                    'time': '下午9:03',
                    'font': null
                },
                {
                    'id': 5,
                    'url': './images/img04.jpg',
                    'name': '小丸子完美研究所',
                    'msg': '[2条]艾琳:[图片]',
                    'time': '下午8:58',
                    'font': '&#xe6ba;'
                },
                {
                    'id': 6,
                    'url': './images/img05.jpg',
                    'name': '拼搏',
                    'msg': '唯有努力 我的未来不是梦 别在吃苦...',
                    'time': '下午8:48',
                    'font': null
                },
                {
                    'id': 7,
                    'url': './images/img06.jpg',
                    'name': '昵昵',
                    'msg': '三分靠运气七分靠打拼 永远别放弃',
                    'time': '下午4:58',
                },
                {
                    'id': 8,
                    'url': './images/img07.jpg',
                    'name': '哥哥',
                    'msg': '等下再说',
                    'time': '下午4:20',
                }
            ],
        }
    },
    template: `
    <div class="msg-container">
        <header>
            <div>
                <h5>微信(144)</h5>
                <i class="iconfont">&#xe60f;</i>
            </div>
            <div>
                <input type="text" placeholder="搜索">
                <i class="iconfont">&#xe62b;</i>
            </div>           
        </header>
        <div class="msg-lists">
            <ul class="w">
                <router-link v-for="item in msgLists" :key="item.id" tag="li" :to="'/main/message/'+item.name">
                    <div class="header">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="msg_con">
                        <h5 class="name">{{ item.name }}</h5>                        
                        <span class="msg">{{ item.msg }}</span>
                    </div>
                    <div class="time">
                        <p>{{ item.time }}</p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
    `
}

export {
    message
}