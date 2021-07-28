import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import Scss
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/main.scss';
//import bootstrap
import "bootstrap";

createApp(App).use(store).use(router).mount('#app')
