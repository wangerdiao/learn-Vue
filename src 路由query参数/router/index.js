//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {   
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[{
                name:'jia',
                path:'news',  //这里千万不要写/news!!!Vue-router里面自动给你补/
                component:News
            },
            {
                path:'message',
                component:Message,
                children:[
                    {
                        name:'xiaoxi',
                        path:'detail',
                        component:Detail
                    }
                ]
            }
        ]
        }
    ]
})