import React                        from 'react'
import { connect }                  from 'react-redux'
import Grid                         from './Grid'


let App = ({ dispatch }) => {
  return (
    <div className='app'>
      <div className='header'>HEADER</div>
      <Grid width={5} height={7} />
      <div className='footer'>FOOTER</div>
    </div>
  )
}

export default connect()(App)
