<template>
    <ul>
        <li>消息编号:{{$route.query.id}}</li>
        <li>消息title:{{$route.query.title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    
    mounted(){
        console.log('我是组件',this)
    }
}
</script>

<style>

</style>