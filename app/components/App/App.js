import React                        from 'react'
import { connect }                  from 'react-redux'
import Audio                        from './Audio'
import Grid                         from './Grid'


let App = ({ dispatch }) => {

  //var json = require('./map01.json')
  //const data = JSON.parse(json)
  //console.log(json, data)

  return (
    <div className='app'>
      {window.audio}

      <div className='header'>HEADER</div>
      <Grid width={7} height={9} />
      <div className='footer'>FOOTER</div>
    </div>
  )
}

export default connect()(App)
