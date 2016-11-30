import { combineReducers } from 'redux'
import grid from './grid'
import popup from './popup'
import gameState from './gameState'


const reducers = combineReducers({
  grid,
  popup,
  gameState,
})

export default reducers
