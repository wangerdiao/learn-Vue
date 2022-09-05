    <template>
    <div>
            <h3>当前x的值为:{{sum}}</h3>
            <h3>当前x的乘以10值为:{{$store.getters.bigSum}}</h3>
            <h3>我在{{school}}学习{{subject}}</h3>
            <select v-model.number="n">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button @click="add">+</button>
            <button @click="sub">-</button>
            <button @click="addOdd">值为奇数时再加</button>
            <button @click="addWait">等一等再加</button>
    </div>
    </template>
    <script>
        import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1
            }
        },
        methods:{
            add() {
                // this.$store.dispatch('jia',this.n)
                this.$store.commit('JIA',this.n)
            },
            sub() {
                // this.$store.dispatch('jian',this.n)
                this.$store.commit('JIAN',this.n)
            },
            addOdd() {
                this.$store.dispatch('jiaOdd',this.n)
            },
            addWait() {
                this.$store.dispatch('jiaWait',this.n) 
            },
        },
        computed:{
            // sum(){
            //     return this.$store.state.sum
            // },
            // school(){
            //     return this.$store.state.school
            // },
            // subject(){
            //     return this.$store.state.subject
            // },
            // bigSum(){
            //     return this.$store.getters.subject
            // },

            //第一种写法：借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({sum:'sum',subject:'subject',school:'school'})//利用展开运算符展开成key:value的形式
            ...mapState(['sum','school','subject']),
            // ...mapGetters({bigSum:'bigSum'})
            ...mapGetters(['bigSum'])

        },
        mounted() {
            const x = mapState({sum:'sum',subject:'subject',school:'school'})
            console.log(x)
        }
    }
    </script>

    <style>
        button{
            margin-left: 5px;
        }
    </style>