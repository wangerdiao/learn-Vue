<template>
  <div id="app">
      <h1>你好啊，学生的姓名是{{studentName}}</h1>
      <!-- 通过子组件给父组件传props，实现子给父传递数据 -->
      <!-- 在组件标签里写原生的事件要加上native，不然vue会把它解析成自定义事件 -->
      <School :getSchoolName="getSchoolName" @click.native="show"></School>
      <!-- 通过父组件给子组件绑定一个自定义事件，实现子给父传递数据 第一种写法：v-on或@-->
      <Student v-on:atguigu="showStudentName" @demo="m1"></Student>
     <!-- 通过父组件给子组件绑定一个自定义事件，实现子给父传递数据 第二种写法：ref-->
      <!-- <Student ref="student"></Student>   -->
  </div>
</template>

<script>
 import School from './components/School.vue'
 import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data(){
    return {
      studentName:''
    }
  },
  methods:{
    getSchoolName(name){
      console.log('我是App,这是子组件的',name)
    },
    showStudentName(name){
      console.log('我是App,子组件学生的名字是',name);
      this.studentName = name
    },
    m1(){
      console.log('m1被调用了');
    },
    show(){alert(123)}
  },
  mounted(){
    // this.$refs.student.$on('atguigu',this.showStudentName) //绑定自定义事件第二种写法
    // this.$refs.student.$once('atguigu',this.showStudentName) //只触发一次事件
  }
}
</script>

<style>
</style>
