<template>
    <ul>
        <li>消息编号:{{$route.params.id}}</li>
        <li>消息title:{{$route.params.title}}</li>
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