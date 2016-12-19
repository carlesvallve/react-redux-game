import React from 'react'
import { connect } from 'react-redux'
import { getLanguage, getPlatform } from '../../utils/utils'

import Grid from './Grid'


let App = ({ dispatch }) => {

  // TODO: Use redux to store this in the application state
  console.log('Initializing App:')
  const lang = getLanguage()
  const device = getPlatform()

  return (
    <div className='app'>
      <div className='header'>HEADER</div>
      <Grid width={5} height={7} />
      <div className='footer'>FOOTER</div>
    </div>
  )
}

export default connect()(App)
