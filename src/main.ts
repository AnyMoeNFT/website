import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './app.vue';
import AnyMoeUI from './components/ui';

const app = createApp(App);

app.use(AnyMoeUI);
app.use(router);
app.use(store);

app.mount('#app');
