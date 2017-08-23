import { combineReducers } from 'redux';
import { conductReducer } from './modules/conduct';
import { sessionReducer } from './modules/session';
import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({ 
  conduct: conductReducer,
  session: sessionReducer,
  navigation: NavigationReducer
});