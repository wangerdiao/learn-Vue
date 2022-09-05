<template>
  <div class="container">
    <Category title="名字" >
        <template scope="Shuju">
          {{Shuju}}
          <ol >
            <li v-for="(item,index) in Shuju.content" :key="index">{{item}}</li>
          </ol>
        </template>
    </Category>
    <Category title="成绩" >
       <template slot-scope="{content}">
          <ul >
              <li v-for="(item,index) in content" :key="index">{{item}}</li>
          </ul>
       </template>
    </Category>
    <Category title="课程" >
        <template scope="Value">
          <h4 v-for="(item,index) in Value.content" :key="index">{{item}}</h4>
        </template>
    </Category>
  </div>
</template>
<script>
import Category from './components/Category.vue';
export default {
    name: "App",
    components: {Category}
}
</script>
<style>
      .container {
          display: flex;
          justify-content: space-around;
      }
</style>
