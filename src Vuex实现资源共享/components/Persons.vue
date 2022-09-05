<template>
    <div>
        <h1>Person组件</h1>
        <input type="text" placeholder="输入名字" v-model="personName">
        <button @click="addPerson(people)">添加</button>
        <ul>
            <li v-for="p in persons" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>Count组件的sum值为{{sum}}</h3>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    import {mapMutations,mapState} from 'vuex'
export default {
    name:'Persons',
    data(){
        return{
            personName:''
        }
    },
    computed:{
        // person(){
        //     return this.$store.state.persons
        // },
        // sum(){
        //     return this.$store.state.sum
        // },
        ...mapState(['persons','sum']),
        people(){
            return  {id:nanoid(),name:this.personName}
        }
    },
    methods:{
        // addPerson(){
        //     // const people = {id:nanoid(),name:this.personName}
        //     // this.$store.commit('addPerson',people)
        //     this.personName = ''
        // }
        // ...mapMutations({addPerson:'addPerson'})
        ...mapMutations(['addPerson'])
    }
}
</script>
