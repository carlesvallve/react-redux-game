import { combineReducers } from 'redux'
import settings from './settings'
import gameState from './gameState'
import grid from './grid'
//import popup from './popup'


const reducers = combineReducers({
  settings,
  gameState,
  grid,
  //popup
})

export default reducers
