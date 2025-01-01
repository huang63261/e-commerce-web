import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas, far);
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
