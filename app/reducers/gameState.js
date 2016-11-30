const gameState = (state = 'INIT', action) => {

  switch (action.type) {
    case 'INIT':
    case 'WELCOME':
    case 'START':
    case 'PLAY':
    case 'PAUSE':
    case 'GAME_OVER':
      return action.type

    default:
      return state
  }
}

export default gameState
