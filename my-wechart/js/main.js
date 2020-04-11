const main={
    template:`
    <div>
        <router-view></router-view>
        <div class="box">
            <footer class="w footer">
                <div>
                    <router-link class="message" tag="div" to="/main/message">
                        <i class="iconfont">&#xe743;</i>
                        <span>微信</span>
                    </router-link>
                    <router-link class="address-book" tag="div" to="/main/addresslist">
                        <i class="iconfont">&#xe655;</i>
                        <span>通讯录</span>
                    </router-link>
                    <router-link class="search" tag="div" to="/main/search">
                        <i class="iconfont">&#xe636;</i>
                        <span>发现</span>
                    </router-link>
                    <router-link class="meself" tag="div" to="/main/myself">
                        <i class="iconfont">&#xe626;</i>
                        <span>我</span>
                    </router-link>
                </div>
            </footer>
        </div>
    </div>     
    `
}

export {main}