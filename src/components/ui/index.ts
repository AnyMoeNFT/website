import { App } from 'vue';
import Button from './packages/button';
import Card from './packages/card';
import ClickableText from './packages/clickableText';

const components = [Button, Card, ClickableText];

const installer = (app: App) => {
  components.forEach((comp) => {
    app.use(comp);
  });
};

export default installer;
