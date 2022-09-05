<template>
    <div class="demo">
         <h2>学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
        <button @click="sendSchoolName(name)">点我给传递学校名</button>
    </div>
</template>

<script>

export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:'京江学院',
            address:'镇江'
        }
    },
    methods:{
        sendSchoolName(name){
            this.getSchoolName(this.name)
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