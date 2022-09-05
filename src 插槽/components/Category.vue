<template>
  <div class="Category">
        <h3>{{title}}分类</h3>
       <slot :content="names" x="hello">我是作用域插槽</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
   props:['title'],
   data(){
        return {
            names:['刘凯','孙睿','王震'],
            score:[18,100,100],
            subject:['英语','数学','语文']
        }
    }
}
</script>

<style scoped>
    .Category {
        width: 400px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
</style>