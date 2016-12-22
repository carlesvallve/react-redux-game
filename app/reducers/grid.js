const grid = (state = {}, action) => {

  switch (action.type) {

    case 'GRID_UPDATE':
      //console.log('updating grid reducer...', 'state', state, 'data', action.data)
      return Object.assign(state, action.data)

      case 'TILE_UPDATE':
      // update given tile at x,y with new params
        state.tiles[action.data.y][action.data.x] = Object.assign({},
          state.tiles[action.data.y][action.data.x],
          { selected: action.data.selected }
        )

        //console.log('updating tile reducer...', state.tiles)
        return Object.assign({}, state, {tiles: state.tiles})

        case 'ENTITY_UPDATE':
          // update given id entity with new params
          state.entities[action.data.id] = Object.assign({},
            state.entities[action.data.id],
            { x: action.data.x, y: action.data.y }
          )

          //console.log('updating entity reducer...', state.entities)
          return Object.assign({}, state, {entities: state.entities})

    default:
      return state
  }
}

export default grid
