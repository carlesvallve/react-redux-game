export const openPopup = (data) => {
  return {
    type: 'POPUP_OPEN',
    data
  }
}

export const closePopup = () => {
  return {
    type: 'POPUP_CLOSE',
  }
}

export const updateGrid = (data) => { // tiles
  console.log('updating grid...', data)
  return {
    type: 'GRID_UPDATE',
    data
  }
}

export const updateTile = (data) => { // x, y
  console.log('updating tile...', data)
  return {
    type: 'TILE_UPDATE',
    data
  }
}

// outline possible states and events
export const GameState = {
  INIT: 'INIT',
  WELCOME: 'WELCOME',
  START: 'START',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  END: 'END',
  GAME_OVER: 'GAME_OVER',
}

// just examples..
// Conrad has more animation states
// but possibly basic logic states could be like this?
export const PlayerState = {
  WALK: 'WALK',
  MOVE: 'MOVE',
  CLIMB: 'CLIMB',
  SHOOT: 'SHOOT',
  JUMP: 'JUMP',
  DUCK: 'DUCK',
  GET_ITEM: 'GET_ITEM',
  USE_ITEM: 'USE_ITEM'
}

export const Trump = {
  TWEET: 'TWEET'
}

export const NPCState = {

}
