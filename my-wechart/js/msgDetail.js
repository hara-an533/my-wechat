const msgDetail={
    template:`
        <div class="msg-detail">
            <div class="w">
                <div class="msg-header">
                    <div>
                        <i class="iconfont" @click="goBack">&#xe71a;</i>
                        <span class="num">130</span>
                    </div>
                    <span>{{ $route.params.uname }}</span>
                    <i class="iconfont">&#xe632;</i>
                </div>
            </div>
            <div class="w">
                <div class="msg-content">
                    <p class="toleft">
                        <img src="./images/img02.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <div class="time">下午4:16</div>
                    <p class="toleft">
                        <img src="./images/img02.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <p class="toleft">
                        <img src="./images/img02.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <p class="toleft">
                        <img src="./images/img02.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <p class="toright">
                        <img src="./images/img00.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <p class="toleft">
                        <img src="./images/img02.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <p class="toright">
                        <img src="./images/img00.jpg" alt="">
                        <span>你好</span>
                    </p>
                    <p class="toleft">
                        <img src="./images/img02.jpg" alt="">
                        <i class="img"><img src="./images/cute.jpg" alt=""></i>
                    </p>
                    <p class="toright">
                        <img src="./images/img00.jpg" alt="">
                        <span>你猜啊</span>
                    </p>
                </div>
            </div>
            <div class="msg-inp">
                <div class="w">
                    <i class="iconfont">&#xe68d;</i>
                    <input type="text">
                    <i class="iconfont">&#xe60d;</i>
                    <i class="iconfont">&#xe60f;</i>
                </div>
            </div>
        </div>
    `,
    methods:{
        goBack:function(){
            this.$router.go(-1)
        }
    }
}

export {
    msgDetail
}