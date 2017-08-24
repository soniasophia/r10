import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About/';
import NavigationLayout from '../navigation/NavigationLayout';
import Schedule from '../scenes/Schedule/';
import Faves from '../scenes/Faves/';
import Session from '../scenes/Session/';
import Speaker from '../scenes/Speaker/';

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  faves: () => Faves,
  session: () => Session,
  speaker: () => Speaker

}));

export default Router;