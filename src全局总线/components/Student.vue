<template>
    <div class="demo">
        <h2>学生姓名{{name}}</h2>
        <h2>学生年龄{{age}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'刘凯',
            age:18
        }
    },
    mounted(){
        this.$bus.$on('hello',(data) => {  //绑定hello事件
            console.log('我是Student组件我收到了School传来的数据',data)
        })
    }
}
</script>

<style>
 .demo {
    background-color: red;
    margin-top: 30px;
    padding: 5px;
 }
</style>