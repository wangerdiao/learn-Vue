<template>
    <div>
              <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link class="list-group-item " class-active="active" to="/home/news">News</router-link>
                  </li>
                  <li>
                    <router-link class="list-group-item " class-active="active" to="/home/message">Message</router-link>
                  </li>
                </ul>
               <!-- 用keep-alive缓存组件路由,使其切换路由时不被销毁，include指定News路由组件不被销毁 -->
               <!-- <keep-alive :include="[News,Message]">  缓存多个  -->
              <keep-alive include="News">        
                <router-view></router-view>
              </keep-alive>
              </div>
            </div>
</template>

<script>
export default {
    name:'Hoem'
}
</script>
