const friendDetail={
    template:`
        <div class="friend_detail">
            <div class="friend-header">
                <div class="w">
                    <div class="top">
                        <i class="iconfont" @click="goBack">&#xe71a;</i>
                        <i class="iconfont">&#xe632;</i>
                    </div>
                    <div class="header">
                        <img src="./images/img06.jpg" alt="">
                        <div class="detail">
                            <h3>{{ $route.params.name }}</h3>
                            <p class="name">微信号：dtvgd-77</p>
                            <p>地址：江苏 苏州</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="friend-options">
                <div class="w">
                    <li>
                        <span>备注和标签</span>
                        <i class="iconfont">&#xe631;</i>
                    </li>
                    <li>
                        <span>朋友权限</span>
                        <i class="iconfont">&#xe631;</i>
                    </li>
                </div>
            </ul>
            <ul class="more">
                <div class="w">
                    <li class="monents">
                        <span>朋友圈</span>
                        <i class="iconfont">&#xe631;</i>
                    </li>
                    <li>
                        <span>更多信息</span>
                        <i class="iconfont">&#xe631;</i>
                    </li>
                </div>
            </ul>
            <ul class="chat">
                <div class="w">
                    <li>
                        <i class="iconfont">&#xe743;</i>
                        <span>发消息</span>
                    </li>
                    <li>
                        <i class="iconfont">&#xe614;</i>
                        <span>视频通话</span>
                    </li>
                </div>
            </ul>

        </div>
    `,
    methods:{
        goBack:function(){
            this.$router.go(-1)
        }
    }
}

export {friendDetail}