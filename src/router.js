
import {createRouter,createWebHistory } from 'vue-router'
// 引入所有页面索引
import pages from "./pages/index";

// 页面路由配置
const routers = new createRouter({
    history:new createWebHistory(),
    routes:[
        {
            path:"/",
            component:import("./components/layout"),
            children:[
                {path: '', name:"home", component: pages.home},
                {path: 'worklist', name:"workList", component: pages.workList},
                {path: 'content', name:"content", component: pages.content},
            ]
        }
    ]
})
 
export default routers