const popup = (state = {}, action) => {
  switch (action.type) {

    case 'POPUP_OPEN':
      return Object.assign({}, state, {
        active: true,
        data: action.data
      })

    case 'POPUP_CLOSE':
      return Object.assign({}, state, {
        active: false,
        data: undefined
      })

    default:
      return state
  }
}

export default popup
