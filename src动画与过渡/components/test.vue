<template>
    <div class="demo">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好</h1>
        </transition>
    </div>
</template>

<script>
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
    }
    .hello-enter-active {
        animation : donhua 1s;
    }
    .hello-leave-active {
        animation : donhua 1s reverse;
    }
    @keyframes donhua {
        from {
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px)
        }
    }
</style>