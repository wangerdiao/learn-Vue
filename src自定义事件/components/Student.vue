<template>
    <div class="demo">
        <h2>学生姓名{{name}}</h2>
        <h2>学生年龄{{age}}</h2>
        <button @click="sendStudentName(name)">点我给传递学生名</button>
        <button @click="closeBind">解绑事件</button>
        <button @click="death">点我销毁Student组件</button>
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
    methods:{
        sendStudentName(){
            //触发student组件实例对象上的atguigu事件
            this.$emit('atguigu',this.name)
            this.$emit('demo')
        },
        closeBind(){
            // this.$off('atguigu')  //解绑一个自定义事件
            this.$off(['atguigu','demo'])  //解绑多个自定义事件
            this.$off() //解绑全部自定义事件
        },
        death(){
            this.$destroy() //销毁了Student组件，销毁后Student实例的自定义事件全都不奏效
        }
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