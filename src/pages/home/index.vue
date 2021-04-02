<template>
    <header class="header">
        <div class="auto d-flex">
            <div class="header-left">
                <img :src="data.userImg" alt="">
            </div>
            <div class="header-right">
                <h3>{{data.username}}</h3>
                <p>联系方式：{{data.phone}}</p>
                <p>求职意向：{{data.job}}</p>
            </div>
        </div>
    </header>
    <section>
        <div class="auto">
            <v-highCharts />
        </div>
    </section>
</template>
<script>
import { reactive  } from 'vue'
import VHighCharts from "../../components/highcharts/index.vue"
export default {
    name: 'home',
    components:{
        VHighCharts
    },
    setup() {
        const data = reactive({
            userImg:require('../../assets/logo.png'),
            username: '王勇',
            phone:"15055166539",
            job:"web前端工程师"
        })
        return { data }
    },
}
</script>
<style lang="scss" scoped>

.header{
    height:300px;
    background:#62a4e6; //#f6b26b;
    display: flex;
    align-items: center;
    &-left{
        height:204px;
        display: flex;
        img{
            display: block;
            width: 200px;
            height:200px;
            border-radius:50%;
            border:2px solid #fff;
            background: #fff;
        }
    }
    &-right{
        margin-left:50px;
        h3{
            font-weight: 500;
            font-size:36px;
            margin-top:20px;
        }
    }
}
</style>