import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import filterArticles from './filter'
import Articles from './forArticles'
import Coments from './forComents'

export default combineReducers({
  routing: routerReducer,
  Articles,
  filterArticles,
  Coments
})
