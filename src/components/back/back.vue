<template>
    <div class="back">
        <div class="content">
            <i class="iconback" @click="go"></i>
            <h4 class="title">{{column}}</h4>
        </div>
    </div>
</template>
<script>
export default {
    name:'Back',
    props:{
        column:{
            type:String,
            default:''
        }
    },
    methods: {
        go(){
            this.$router.go('-1')
        }
    },
}
</script>
<style lang="scss" scoped>
.back{
    position: relative;
    padding-bottom: 147px;
    .content{
        position: absolute;
        top: 21px;
        left: 0;
        right: 0;
        height: 40px;
        .title{
            font-size: 16px;
            margin-left: 45px;
            color: #fff;
            line-height: 40px
        }
        .iconback{
            width: 40px;
            height: 40px;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 0;
            &:before{
                position: absolute;
                content: '';
                top: 50%;
                margin-top: -6px;
                display: block;
                width: 12px;
                height: 12px;
                border-top: 1px solid #00a3ff;
                border-left: 1px solid #00a3ff;
                @include webkit (transform,rotate(-45deg));
                cursor: pointer;
            }
        }
    }
}
</style>

