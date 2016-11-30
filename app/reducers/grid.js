const grid = (state = {}, action) => {

  switch (action.type) {

    case 'GRID_UPDATE':
      // console.log('updating grid reducer...', 'state', state, 'data', action.data)
      // console.log('1', Object.assign({}, state, action.data))
      // console.log('2', Object.assign(state, action.data))
      // console.log('3', Object.assign({}, action.data))
      // console.log('4', Object.assign(action.data))

      return Object.assign(state, action.data)

    default:
      return state
  }
}

export default grid
