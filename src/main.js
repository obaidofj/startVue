import { createApp  } from 'vue'
import ep from './App.vue'
import router from './router'
//import Vue from 'vue'
import {store} from './store/store'






createApp(ep).use(router).use(store).mount('#ep')

//app.use(store)