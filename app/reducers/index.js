import { combineReducers } from 'redux'
import device from './device'
import gameState from './gameState'
import grid from './grid'
import popup from './popup'


const reducers = combineReducers({
  device,
  gameState,
  grid,
  popup
})

export default reducers
