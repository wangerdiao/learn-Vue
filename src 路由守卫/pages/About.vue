<template>
    <div>
        <h2>我是About组件</h2>
        
    </div>
</template>

<script>
export default {
    name:'About',
   beforeRouteEnter(to,from,next) {  //组件内部守卫，进入守卫：通过路由规则，进入路由时被调用
    console.log('组件内部守卫beforeRouteEnter')
    if(to.meta.isAuth) { 
        if(localStorage.getItem('school') === 'atguigu') { 
            next()
        }else{
            alert('学校名不对')
        }
    }else{
        next()
    }
   },
   beforeRouteLeave(to,from,next) { //离开守卫：通过路由规则，离开路由时被调用
    console.log('组件内部守卫beforeRouteLeave')
    next()
   }
}
</script>
