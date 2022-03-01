<template>
    <input v-model="eats" placeholder="输入想吃的，空格隔开" class="eat-input"/>
    <button @click="randomEat" class="eat-button">生成</button>
    <p class="eat-res">{{randomEats}}</p>
</template>

<script>
export default {
    data(){
        return {
            eats: "",
            times: 2,
            randomEats: '输入想吃的，空格隔开，然后点击生成'
        }
    },
    methods:{
        randomEat(){
            if(!this.eats || this.times<=0) return
            const eats = this.eats.split(' ')
            this.times--
            eats.unshift('')
            const rand = Math.floor(Math.random()*(eats.length-1)) + 1
            console.log(eats, rand)
            this.randomEats = `${eats[rand]}${this.times===1?'（不想吃可再随机一次哦）':'（那就吃这个吧）'}`
        }
    }
}
</script>
<style>
    .eat-input{
        cursor: pointer;
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 300px;
    }
    .eat-button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .eat-res{
        padding: 0 20px;
    }
    .page-nav,.page-title{
        display: none
    }
</style>