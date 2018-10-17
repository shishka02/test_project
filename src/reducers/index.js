import{combineReducers} from'redux';
import filterArticles from './filter';
import Articles from './forArticles';
import {routerReducer} from 'react-router-redux';
import Coments from './forComents';

export default combineReducers({
  routing:routerReducer,
  Articles,
  filterArticles,
  Coments
})
