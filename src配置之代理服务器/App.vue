<template>
  <div id="app">
    <button @click="showStudents">点我获取学生信息</button>
    <button @click="showCars">点我获取车子信息</button>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
  name: 'App',
  methods:{
    showStudents(){
      axios.get('http://localhost:8080/requestQianzhui/students').then(
      response => {console.log('请求成功',response.data)},
      error => {console.log('请求失败',error.message)}
      )
    },
    showCars(){
      axios.get('http://localhost:8080/api/cars').then(
      response => {console.log('请求成功',response.data)},
      error => {console.log('请求失败',error.message)}
      )
    }
  }
}
</script>

<style>
</style>
