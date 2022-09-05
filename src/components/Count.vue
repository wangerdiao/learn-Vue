    <template>
    <div>
            <h3>当前x的值为:{{sum}}</h3>
            <h3>当前x的乘以10值为:{{bigSum}}</h3>
            <h3>我在{{school}}学习{{subject}}</h3>
            <select v-model.number="n">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button @click="JIA(n)">+</button>
            <button @click="JIAN(n)">-</button>
            <button @click="addOdd(n)">值为奇数时再加</button>
            <button @click="addWait(n)">等一等再加</button>
            <h3>Person组件的人数为{{persons.length}}</h3>
    </div>
    </template>
    <script>
        import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1
            }
        },
        methods:{
            ...mapMutations('countAbout',['JIA','JIAN']),
            ...mapActions('countAbout',{addOdd:'jiaOdd',addWait:'jiaWait'})
        },
        computed:{
            ...mapState('countAbout',['sum','school','subject','persons']),
            ...mapState('personAbout',['persons']),
            // ...mapGetters({bigSum:'bigSum'})
            ...mapGetters('countAbout',['bigSum'])
        },
        mounted(){
            console.log(this.$store)
        }
    }
    </script>

    <style>
        button{
            margin-left: 5px;
        }
    </style>