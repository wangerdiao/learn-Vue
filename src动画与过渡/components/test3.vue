<template>
    <div class="demo">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition 
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__bounce"
        leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow">你好</h1>
        </transition>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name:'test',
    data(){
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h1 {
        background-color: red;
        transform: 0.5s linear;
    }

</style>