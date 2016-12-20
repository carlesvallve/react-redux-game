// application settings

const settings = (state = '', action) => {
  switch (action.type) {

    case 'SET_DEVICE':
      return Object.assign({}, state, {
        device: action.data
      })

    case 'SET_LANGUAGE':
      return Object.assign({}, state, {
        language: action.data
      })

    default:
      return state
  }
}

export default settings
