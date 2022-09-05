    <template>
    <div>
            <h3>当前x的值为:{{sum}}</h3>
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
    export default {
        name:'Count',
        data(){
            return {
                sum:0,
                n:1
            }
        },
        methods:{
            add() {
                this.sum += this.n
            },
            sub() {
                this.sum -= this.n
            },
            addOdd() {
                if(this.sum%2) {
                    this.sum += this.n
                }
            },
            addWait() {
                setTimeout(() => {
                    this.sum += this.n
                },500)
            },
        }
    }
    </script>

    <style>
        button{
            margin-left: 5px;
        }
    </style>