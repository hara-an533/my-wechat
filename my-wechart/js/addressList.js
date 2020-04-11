const addressList = {
    data: function () {
        return {
            addressLists: [{
                    'url': './images/img00.jpg',
                    'name': '阿毛'
                },
                {
                    'url': './images/img01.jpg',
                    'name': 'A.夏木'
                },
                {
                    'url': './images/img02.jpg',
                    'name': 'A011'
                },
                {
                    'url': './images/img03.jpg',
                    'name': 'A57'
                },
                {
                    'url': './images/img04.jpg',
                    'name': 'a_jerry'
                }
            ]
        }
    },
    template: `
        <div class="addressList-container">
            <header>
                <div>
                    <h5>通讯录</h5>
                    <i class="iconfont">&#xe75c;</i>
                </div>
                <div>
                    <input type="text" placeholder="搜索">
                    <i class="iconfont">&#xe62b;</i>
                </div>   
            </header>
            <nav>
                <ul class="w">
                    <li>
                        <img src="./images/friend_03.jpg" alt="">
                        <span>新的朋友</span>
                    </li>
                    <li>
                        <img src="./images/qunliao.jpg" alt="">
                        <span>群聊</span>
                    </li>
                    <li>
                        <img src="./images/biaoqian.gif" alt="">
                        <span>标签</span>
                    </li>
                    <li>
                        <img src="./images/gongzhonghao_10.gif" alt="">
                        <span>公众号</span>
                    </li>
                    <li>
                        <img src="./images/final_12.gif" alt="">
                        <span>企业微信联系人</span>
                    </li>
                </ul>
                <p>A</p>
                <article class="w">
                    <ul>
                        <router-link v-for="(item,index) in addressLists" :key="index" tag="li" :to="'/addresslist/'+item.name">
                            <img :src="item.url" alt="">
                            <span>{{ item.name }}</span>
                        </router-link>
                    </ul>
                </article>
            </nav>

        </div>
    `
}

export {
    addressList
}