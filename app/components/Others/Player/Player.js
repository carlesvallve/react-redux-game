require('./style.scss');

import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { refreshList } from '../actions'


const mapStateToProps = (state, ownProps) => {
  if (state.player.active === undefined) {
    state.player.active = ownProps.active
  }
  return state.player
}


class Player extends Component {

  constructor(props) {
    super(props)
      console.log('##############', this);
  }

  render() {
    console.log('Initializing player...')
    return (
      <div className='player' style={this.props.style}>
        <div className='player-inner'>@</div>
      </div>
    )
  }
}

Player = connect()(Player)

export default Player
