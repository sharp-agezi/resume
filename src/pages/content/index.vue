<template>
    <div class="auto">
        <transition name="el-fade-in-linear">
            <keep-alive>
                <component :is="data.state ? 'VHighCharts' : 'VWorkList'"/>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
import { reactive,onUnmounted } from 'vue'
import VHighCharts from "../../components/highcharts/index.vue"
import VWorkList from "../../components/workList/index.vue"
export default {
    name: 'content',
    components:{
        VHighCharts,
        VWorkList
    },
    setup() {
        const data = reactive({
            state:true,
            timer:null
        })
        /**
         * @description: 定时改变组件
         */
        const comChange=()=>{
            data.timer=setTimeout(()=>{
                data.state=!data.state;
                comChange();
            },1e4)
        }
        /**
         * @description: 销毁定时器
         */
        const stopTimer=()=>{
            clearTimeout(data.timer)
        }
        comChange();
        onUnmounted(()=>{
            stopTimer()
        })
        return { data,comChange }
    },
}
</script>