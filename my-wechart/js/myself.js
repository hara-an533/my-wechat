const myself={
    template:`
        <div class="myself-container">
            <div class="header">
                <p class="ww">
                    <i class="iconfont">&#xe640;</i>
                </p>
            </div>           
            <router-link class="myself" tag="div" to="/myself/personal">
                <div class="ww">
                    <img src="./images/img02.jpg" alt="">
                    <div class="self-msg">
                        <h4>呢喃</h4>
                        <p>微信号：zz587463</p>
                    </div>
                    <div class="icon">
                        <i class="iconfont">&#xe61a;</i>
                        <i class="iconfont">&#xe631;</i>
                    </div>                   
                </div>               
            </router-link>
            <div class="pay">
                <div class="ww">
                    <i class="iconfont green">&#xe60c;</i>
                    <span>支付</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
            </div>
            <div class="function-options">
                <ul class="ww">
                    <li>
                        <i class="iconfont yellow">&#xe604;</i>
                        <span>收藏</span>
                        <i class="iconfont right">&#xe631;</i>
                    </li>
                    <li>
                        <i class="iconfont blue">&#xe622;</i>
                        <span>相册</span>
                        <i class="iconfont right">&#xe631;</i>
                    </li>
                    <li>
                        <i class="iconfont blue">&#xe61f;</i>
                        <span>卡包</span>
                        <i class="iconfont right">&#xe631;</i>
                    </li>
                    <li>
                        <i class="iconfont yellow">&#xe60d;</i>
                        <span>表情</span>
                        <i class="iconfont right">&#xe631;</i>
                    </li>
                </ul>
            </div>
            <div class="set">
                <div class="ww">
                    <i class="iconfont blue">&#xe60e;</i>
                    <span>设置</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>               
            </div>
        </div>
    `
}

export {myself}