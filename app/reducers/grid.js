const grid = (state = {}, action) => {

  switch (action.type) {

    case 'GRID_UPDATE':
      //console.log('updating grid reducer...', 'state', state, 'data', action.data)
      return Object.assign(state, action.data)

      case 'TILE_UPDATE':
        let tileData = state.tiles
        tileData[action.data.y][action.data.x] = Object.assign(
          {},
          tileData[action.data.y][action.data.x],
          {selected: action.data.selected}
        )
        //console.log('updating tile reducer...', tileData)
        return Object.assign({}, state, {tiles: tileData})

    default:
      return state
  }
}

export default grid
