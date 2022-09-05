<template>
    <div class="demo">
         <h2>学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
        <button @click="sendSchoolName">点我把学校名传给Student组件</button>
    </div>
</template>

<script>

export default {
    name:'School',
    data(){
        return {
            name:'京江学院',
            address:'镇江'
        }
    },
    mounted(){
        console.log(this.x);
    },
    methods:{
        sendSchoolName(){
            this.$bus.$emit('hello',this.name)
        }
    }
}
</script>

<style scoped>
    .demo {
        background-color: blue;
        margin-top: 30px;
        padding: 5px;
    }
</style>