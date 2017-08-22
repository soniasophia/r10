import { combineReducers } from 'redux';
import { conductReducer } from './modules/conduct';
import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({ 
  // conduct: conductReducer,
  navigation: NavigationReducer
});