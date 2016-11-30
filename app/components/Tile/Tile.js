require('./style.scss');

import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { refreshList } from '../actions'


const mapStateToProps = (state, ownProps) => {
  if (state.tile.active === undefined) {
    state.tile.active = ownProps.active
  }
  return state.tile
}


class Tile extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='tile' style={this.props.style}>
        <div className='tile-inner' style={{ backgroundColor: this.props.color }}>
          <div className='tile-info'>{this.props.x + ',' + this.props.y}</div>
        </div>
      </div>
    )
  }
}

Tile = connect()(Tile)

export default Tile
