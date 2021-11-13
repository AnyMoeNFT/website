import { App } from 'vue';
import Button from './packages/button';
import Card from './packages/card';
import ClickableText from './packages/clickableText';
import GradientText from './packages/gradientText';
import Input from './packages/input';
import Split from './packages/split';
import Float from './packages/float';
import Step from './packages/step';
import Upload from './packages/upload';
import Image from './packages/image';
import Popper from './packages/popper';
import PopMenu from './packages/popmenu';

const components = [
  Button,
  Card,
  ClickableText,
  GradientText,
  Input,
  Split,
  Float,
  Step,
  Upload,
  Image,
  Popper,
  PopMenu,
];

const installer = (app: App) => {
  components.forEach((comp) => {
    app.use(comp);
  });
};

export default installer;
