import {
    message
} from "./message.js"
import {
    addressList
} from "./addressList.js"
import {
    search
} from "./search.js"
import {
    myself
} from "./myself.js"
import {
    friendDetail
} from "./friDetail.js"
import {
    moments
} from "./moments.js"
import {
    msgDetail
} from "./msgDetail.js"
import {
    personalInfo
} from "./personal.js"
import {
    main
} from "./main.js"



let router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/main"
        },
        {
            path: "/main",
            component: main,
            redirect: "/main/message",
            children: [{
                    path: "message",
                    meta: 1,
                    component: message
                },
                {
                    path: "addresslist",
                    meta: 2,
                    component: addressList,
                },
                {
                    path: "search",
                    meta: 3,
                    component: search,
                },
                {
                    path: "myself",
                    meta: 4,
                    component: myself
                },
            ]
        },
        {
            path: "/main/message/:uname",
            name: "massage",
            component: msgDetail
        },
        {
            path: "/addresslist/:name",
            name: "friends",
            component: friendDetail,
        },
        {
            path: "/search/moments",
            name: "moments",
            component: moments,
        },
        {
            path: "/myself/personal",
            name: "personal",
            component: personalInfo
        }
    ],
    linkActiveClass: 'current'
})
const app = new Vue({
    el: "#app",
    data: {
        animaName: "left",
    },
    methods: {},
    watch: {
        $route(to, form) {
            if (to.meta > form.meta) {
                this.animaName = "left"
            } else {
                this.animaName = "right"
            }
        }
    },
    components: {
        'message': message,
        'address-list': addressList,
        'search': search,
        'myself': myself
    },
    router
})