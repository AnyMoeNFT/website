import { createApp } from 'vue';
import AnyUI, { buildInstaller, Lottie } from '@any-design/anyui';
import router from './router';
import store from './store';
import i18n from './i18n';
import App from './app.vue';
import '@any-design/safari-vh-patch';
import '@any-design/anyui/styles/default.scss';

// some components are not enabled by default
const AnyUIExtra = buildInstaller([Lottie]);

const app = createApp(App);

app.use(AnyUI);
app.use(AnyUIExtra);
app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
