const search = {
    template: `
    <div class="search-container">
        <div class="header">
            <h4>发现</h4>
        </div>
        <router-link class="friends" tag="div" to="/search/moments">
            <div class="ww">
                <i class="iconfont green">&#xe667;</i>
                <span>朋友圈</span>
                <i class="iconfont right">&#xe631;</i>
            </div>
        </router-link>
        <div class="scan">
            <div class="ww">
                <div>
                    <i class="iconfont bule">&#xe630;</i>
                    <span>扫一扫</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
                <div>
                    <i class="iconfont bule">&#xe621;</i>
                    <span>摇一摇</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
            </div>
        </div>
        <div class="search">
            <div class="ww">
                <div>
                    <i class="iconfont yellow">&#xe60b;</i>
                    <span>看一看</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
                <div>
                    <i class="iconfont red">&#xe611;</i>
                    <span>搜一搜</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
            </div>
        </div>
        <div class="shopping">
            <div class="ww">
                <div>
                    <i class="iconfont red">&#xe699;</i>
                    <span>购物</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
                <div>
                    <i class="iconfont green">&#xe61c;</i>
                    <span>游戏</span>
                    <i class="iconfont right">&#xe631;</i>
                </div>
            </div>
        </div>
        <div class="program">
            <div class="ww">
                <i class="iconfont bule">&#xe61e;</i>
                <span>小程序</span>
                <i class="iconfont right">&#xe631;</i>
            </div>
        </div>
    </div>

    `
}

export {
    search
}