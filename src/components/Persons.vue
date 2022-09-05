<template>
    <div>
        <h1>Person组件</h1>
        <h2>第一人的名字是{{firstName}}</h2>
        <input type="text" placeholder="输入名字" v-model="personName">
        <button @click="addPerson">添加</button>
        <button @click="addWang(people)">添加一个姓王的人</button>
        <ul>
            <li v-for="p in person" :key="p.id">{{p.name}}</li>
        </ul>
        <h3>Count组件的sum值为{{sum}}</h3>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    import {mapActions, mapGetters, mapMutations,mapState} from 'vuex'
export default {
    name:'Persons',
    data(){
        return{
            personName:''
        }
    },
    computed:{
        person(){
            return this.$store.state.personAbout.persons
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        // firstName(){
        //     return this.$store.getters['personAbout/firstName']
        // }
        ...mapGetters('personAbout',['firstName']),
        // ...mapState('personAbout',['persons','sum']),
        people(){
            return  {id:nanoid(),name:this.personName}
        }
    },
    methods:{
        addPerson(){
            const people = {id:nanoid(),name:this.personName}
            this.$store.commit('personAbout/addPerson',people)
            this.personName = ''
        },
        ...mapActions('personAbout',['addWang'])
        // addWang(){
        //     const people = {id:nanoid(),name:this.personName}
        //     this.$store.dispatch('personAbout/addWang',people)
        //     this.personName = ''
        // }
        // ...mapMutations({addPerson:'addPerson'})
        // ...mapMutations('personAbout',['addPerson'])
    }
}
</script>
