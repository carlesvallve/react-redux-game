import React                        from 'react'
import { connect }                  from 'react-redux'
import Audio                        from './Audio'
import Grid                         from './Grid'


let App = ({ dispatch }) => {

  const data = require('json!./map02.json');


  //var json = require('./map01.json')
  //const data = JSON.parse(json)
  console.log(data)

  return (
    <div className='app'>
      {window.audio}

      <div className='header'>HEADER</div>
      <Grid map={data.map}/>
      <div className='footer'>FOOTER</div>
    </div>
  )
}

export default connect()(App)

// width={7} height={9} 
