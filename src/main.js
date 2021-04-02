import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {ElTable,ElTableColumn,ElCard,ElMain,ElHeader,ElContainer,ElMenu,ElMenuItem} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
const app = createApp(App)
app.component(ElTable.name, ElTable)
.component(ElTableColumn.name, ElTableColumn)
.component(ElCard.name, ElCard)
.component(ElMain.name, ElMain)
.component(ElHeader.name, ElHeader)
.component(ElContainer.name, ElContainer)
.component(ElMenu.name, ElMenu)
.component(ElMenuItem.name, ElMenuItem);
app.use(router).mount('#app')
