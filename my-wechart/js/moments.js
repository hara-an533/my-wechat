const moments={
    template:`
        <div class="moments">
            <div class="bg">
                <div class="w">
                    <div class="icon">
                        <i class="iconfont" @click="goBack">&#xe71a;</i>
                        <i class="iconfont">&#xe640;</i>
                    </div>
                    <div class="self">
                        <span>呢喃</span>
                        <img src="./images/img02.jpg" alt="">
                    </div>
                </div>               
            </div>
            <div class="moments-detail">
                <div class="w">
                    <div class="fir">
                        <img src="./images/img05.jpg" alt="">
                        <div>
                            <h4>肉嘟嘟</h4>
                            <p>🎈现货 三天发🎈</p>
                            <p>Mac 柔雾系列314</p>
                            <p>好温柔呀~</p>
                            <img src="./images/comipg.jpg" alt="">
                            <p>1分钟前</p>
                        </div>
                    </div>
                    <div class="sec">
                        <img src="./images/img04.jpg" alt="">
                        <div>
                            <h4>Heailing🍒</h4>
                            <p>超级多的人</p>
                            <p>≧ ﹏ ≦</p>
                        </div>
                    </div>
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

export {moments}