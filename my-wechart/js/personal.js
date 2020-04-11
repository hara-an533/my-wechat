const personalInfo={
    template:`
        <div class="personal-info">
            <header class="w">
                <i class="iconfont" @click="goBack">&#xe71a;</i>
                <span>个人信息</span>
            </header>
            <ul class="info-content">
                <div class="w">
                    <li class="portrait">
                        <span>头像</span>
                        <div>
                            <img src="./images/img02.jpg" alt="">
                            <i class="iconfont">&#xe631;</i>
                        </div>
                    </li>
                    <li>
                        <span>名字</span>
                        <div>
                            <span>呢喃</span>
                            <i class="iconfont">&#xe631;</i>
                        </div>
                    </li>
                    <li>
                        <span>微信号</span>
                        <span>qzz1354126</span>
                    </li>
                    <li>
                        <span>我的二维码</span>
                        <div>
                            <i class="iconfont">&#xe61a;</i>
                            <i class="iconfont">&#xe631;</i>
                        </div>
                    </li>
                    <li>
                        <span>更多</span>
                        <i class="iconfont">&#xe631;</i>
                    </li>
                </div>
            </ul>
            <ul class="profile">
                <div class="w">
                    <li>
                        <span>我的地址</span>
                        <i class="iconfont">&#xe631;</i>
                    </li>
                    <li>
                        <span>我的发票抬头</span>
                        <i class="iconfont">&#xe631;</i>
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

export {
    personalInfo
}