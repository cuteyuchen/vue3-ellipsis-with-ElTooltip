import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
// import vue3EllipsisWithElTooltip from "vue3-ellipsis-with-eltooltip";

createApp(App).use(ElementUI)
    // .use(vue3EllipsisWithElTooltip)
    .mount('#app')
