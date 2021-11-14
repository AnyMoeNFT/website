import { createApp } from 'vue';
import AnyUI from '@any-design/anyui';
import router from './router';
import store from './store';
import i18n from './i18n';
import App from './app.vue';
import '@any-design/anyui/styles/default.scss';

const app = createApp(App);

app.use(AnyUI);
app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
