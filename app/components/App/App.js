import React                        from 'react'
import { connect }                  from 'react-redux'
import Grid                         from './Grid'


let App = ({ dispatch }) => {

  // load map data
  // const data = require('json!../../assets/data/map01.json');
  // console.log(data)

  return (
    <div className='app'>
      <div className='header'>HEADER</div>
      <Grid data={{data}}/>
      <div className='footer'>FOOTER</div>
    </div>
  )
}

export default connect()(App)
