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
                        path:'detail/:id/:title',    // :id,:title为占位符
                        // path:'detail',
                        component:Detail,
            //props的第一种写法，值为对象，该对象中的key-value都会以props的形式传给Detail组件
                        // props:{id:1,title:2}
            //props的第二种写法，值为布尔值，布尔值为真会把该路由组件收到的所有params参数，以props形式传递给Detail组件
                        // props:true
            //props的第三种写法，值为函数，依赖返回值
                            props($route){//函数的参数是$route,可以对其解构赋值({query:{id,title}}),这样直接return {id,title}
                                return {id:$route.params.id,title:$route.params.title}
                            }
                    }
                ]
            }
        ]
        }
    ]
})