import { App } from 'vue';
import Button from './packages/button';
import Card from './packages/card';
import ClickableText from './packages/clickableText';
import Input from './packages/input';
import Split from './packages/split';
import Float from './packages/float';
import './styles/index.scss';

const components = [Button, Card, ClickableText, Input, Split, Float];

const installer = (app: App) => {
  components.forEach((comp) => {
    app.use(comp);
  });
};

export default installer;
