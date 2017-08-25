import { createRouter } from '@expo/ex-navigation';
import About from '../scenes/About/';
import NavigationLayout from '../navigation/NavigationLayout';
import Schedule from '../scenes/Schedule/';
import Faves from '../scenes/Faves/';
import Session from '../scenes/Session/';
import Speaker from '../scenes/Speaker/';
import Map from '../scenes/Map/';

const Router = createRouter(() => ({
  navigation: () => NavigationLayout,
  schedule: () => Schedule,
  map: () => Map,
  faves: () => Faves,
  about: () => About,
  session: () => Session,
  speaker: () => Speaker
}));

export default Router;