<template>
    <div class="user-container">
        <Back column="安全设置" />
        <div class="amount-list">
            <div class="item" v-for="(item,index) in amountArrary" :key="index" @click="checkItem(item)">
                <div class="a-wrap " :class="{current:amount_id == item.id}">{{item.amount}}</div>
            </div>
        </div>
        <div class="cars-form-ui">
            <el-form ref="form">
                <el-form-item>
                    <el-input placeholder="请输入充值金额" v-model="amount_input" v-on:input = 'entryIput'></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="blank-100"></div>
        <section class="section-mode">
            <header>
                <h4 class="title">支付类型</h4>
            </header>
            <div class="content">
                <ul class="links">
                    <li class="">
                        <span class="pull-left">微信</span>
                        <i class="icon check-round current"></i>
                    </li>
                    <li>
                        <span class="pull-left">支信宝</span>
                        <i class="icon check-round"></i>
                    </li>
                </ul>
            </div>
        </section>
        <div class="blank-100"></div>
        <el-button type="primary" class="button-block" round :disabled="disabled" @click="payCount">确认充值</el-button>
    </div>
</template>
<script>
import { AmountList,Pay } from '@/api/amount.js'
export default {
    name: "User",
    components: {},
    data(){
        return {
            img: require("@/assets/images/level-img.png"),
            amountArrary:[],
            amount_id:'',
            disabled:true,
            amountNumber:"",
            payType:this.$route.query.type,
            amount_input:''
        }
    },
    beforeMount(){
        this.getList()
    },
    methods:{
        entryIput(){
            this.disabled = false
        },
        //充值事件
        payCount(){
            let amount = this.amount_input || this.amountNumber
            let requsetData ={
                amount,
                type:this.payType
            }
            Pay(requsetData).then(res=>{
               const order_no = res.data.order_no
               //存储订单号
               localStorage.setItem('order_no',order_no)
               this.$router.push({
                   name:'PayStatus'
               })
            })
        },
        //点击事件
        checkItem(data){
            this.amount_id = data.id
            this.amountNumber = data.amount
            this.disabled = false
        },
        getList(){
            AmountList().then(res=>{
                this.amountArrary = res.data
            })
        }
    }
}
</script>
<style lang="scss">
.section-mode {
    padding-bottom: 30px;
    margin-bottom: 30px;
    header { margin-bottom: 20px; }
    .title {
        font-size: 14px;
        color: #fff;
        opacity: .5;
    }
}
.price {
    color: #fff;
    span {
        font-size: 40px;
        font-family: "bahnschrift";
    }
    em {
        font-size: 18px;
    }
}
.goto {
    display: inline-block;
    height: 36px;
    padding: 0 20px;
    font-size: 18px;
    line-height: 36px;
    border: 2px solid #00a3ff;
    border-radius: 100px;
    color: #00a3ff;
}
.links {
    li {
        display: block;
        height: 20px;
        line-height: 20px;
        position: relative;
        padding: 11px 0;
        color: #fff;
        font-size: 16px;
    }
}
.amount-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    .item {
        padding: 0 10px;
        margin-bottom: 20px;
        flex: 1;
        @include webkit(box-sizing, border-box);
        width: 33.33333%;
        min-width: 33.33333%;
        max-width: 33.33333%;
    }
    .a-wrap {
        height: 48px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, .1);
        text-align: center;
        color: #fff;
        font-family: "bahnschrift";
        line-height: 48px;
        font-size: 24px;
        &.current {
            background-color: #00a3ff;
            border: 1px solid #00a3ff;
        }
    }
}
.check-round {
    position: relative;
    float: right;
    width: 18px;
    height: 18px;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, .1);
    cursor: pointer;
    &::before {
        content: "";   
        position:absolute;
        left: 3px;
        top: 6px;
        width: 10px;
        height: 4px;
        border-left: 1px solid rgba(255, 255, 255, .1);
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        @include webkit(transform, rotate(-45deg));
    }
    &.current {
        border: 1px solid #00a3ff;
        background-color: #00a3ff;
        &::before {
            content: "";   
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
        }
    }
}
</style>