<template>
    <div>
        <h1>Vue Router Demo</h1>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下go</button>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        back(){  //功能跟浏览器的前进和回退箭头按钮一样
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        test(){
            this.$router.go(2) //传入的参数代表前进几次（正数）或者后退几次（负数）
        }
    }
}
</script>