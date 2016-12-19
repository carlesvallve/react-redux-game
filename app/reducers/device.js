const device = (state = 'MOBILE', action) => {

  switch (action.type) {
    case 'DESKTOP':
    case 'TABLET':
    case 'MOBILE':
      return action.type

    default:
      return state
  }
}

export default device
