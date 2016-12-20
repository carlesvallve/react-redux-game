// app

export const setLanguage = (data) => { // en, zh
  //console.log('updating language...', data)
  return {
    type: 'SET_LANGUAGE',
    data
  }
}

export const setDevice = (data) => { // DESKTOP, TABLET, MOBILE
  //console.log('updating device...', data)
  return {
    type: 'SET_DEVICE',
    data
  }
}


// grid

export const updateGrid = (data) => { // tiles
  //console.log('updating grid...', data)
  return {
    type: 'GRID_UPDATE',
    data
  }
}

export const updateTile = (data) => { // x, y
  //console.log('updating tile...', data)
  return {
    type: 'TILE_UPDATE',
    data
  }
}

// popup

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
