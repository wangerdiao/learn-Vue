<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    beforeDestroy() {
        console.log('News组件被销毁了')
    },
    data(){
        return {
            opacity:1,
            timer:''
        }
    },
    activated(){  //路由独有的生命周期钩子   激活状态
        console.log('News组件被激活了')
        this.timer = setInterval(() => {
            console.log(1111)
            this.opacity -= 0.01
            if(this.opacity <=0) this.opacity = 1
        },16)
    },
    deactivated(){ //路由独有的生命周期钩子   失活状态
        console.log('News组件失活了')
        clearInterval(this.timer)
    }
}
</script>