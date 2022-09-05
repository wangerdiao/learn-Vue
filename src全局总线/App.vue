<template>
  <div id="app">
      <h1>你好啊</h1>
      <School ></School>
      <Student></Student>
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
}
</script>

<style>
</style>
