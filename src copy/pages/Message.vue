<template>
  <div>
    <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 第一种跳转路由并携带params参数,to的字符串写法    -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
            <!-- 第二种跳转路由并携带params参数,to的对象写法 -->
            <router-link :to="{
                name:'xiaoxi', //坑点，用params参数就必须写name命名的路由，写path不会进行路由跳转
                params:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{m.title}}
            </router-link>
        </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
            messageList:[
                {id:'001',title:'我是消息1'},
                {id:'002',title:'我是消息2'},
                {id:'003',title:'我是消息3'},
                ]
        }
    }
}
</script>