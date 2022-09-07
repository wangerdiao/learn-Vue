//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {   
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:true,title:'关于'},
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[{
                name:'xinwen',
                path:'news',  //这里千万不要写/news!!!Vue-router里面自动给你补/
                component:News,
                meta:{isAuth:true,title:'新闻'},
                // beforeEnter(to,from,next) {  //独享路由守卫
                //             console.log(to,from)
                //             if(to.meta.isAuth) { 
                //                 if(localStorage.getItem('school') === 'atguigu2') { 
                //                     next()
                //                 }else{
                //                     alert('学校名不对')
                //                 }
                //             }else{
                //                 next()
                //             }
                // }
            },
            {   
                name:'xinxi',
                path:'message',
                component:Message,
                meta:{isAuth:true,title:'信息'},
                children:[
                    {   
                        name:'xiaoxi',
                        path:'detail/:id/:title',    // :id,:title为占位符
                        // path:'detail',
                        component:Detail,
                            props($route){//函数的参数是$route,可以对其解构赋值({query:{id,title}}),这样直接return {id,title}
                                return {id:$route.params.id,title:$route.params.title}
                            },
                            meta:{title:'消息'},
                    }
                ]
            }
        ]
        }
    ]   
})
//全局前置路由守卫，初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next) => {  //每次接受三个参数
//     console.log(to,from)
//     if(to.meta.isAuth) { //当去往的组件名字是xinwen或者xinxi时，校验school的值
//         if(localStorage.getItem('school') === 'atguigu') {  //如果值为atguigu,即可next
//             next()
//         }else{
//             alert('学校名不对')
//         }
//     }else{
//         next()
//     }
// })
//全局后置路由守卫，路由切换完之后调用
router.afterEach((to,from) => { //后置路由守卫没有next
    document.title = to.meta.title ||  document.title
})
export default router