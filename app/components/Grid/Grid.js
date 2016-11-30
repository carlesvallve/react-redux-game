require('./style.scss');

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGrid } from '../../actions'

import Tile from '../Tile/Tile'
import Player from '../Player/Player'

import { randomInt } from '../../utils/utils'
import randomColor from '../../utils/randomColor'


class Grid extends Component {

  constructor(props) {
    super(props)

    this.state = { tiles: this.createTiles() }
    this.props.dispatch(updateGrid(this.state))
  }


  createTiles () {
    var tiles = []

    var colors = randomColor({
      count: 9,
      hue: 'monochrome',
      luminosity: 'bright'
    })

    for (var y = 0; y < this.props.height; y++) {
      tiles[y] = []
      for (var x = 0; x < this.props.width; x++) {
        tiles[y][x] = <Tile
          key={x + '_' + y} x={x} y={y}
          style={{
            width: (100 / this.props.width) + '%',
            height: (100 / this.props.height) + '%'
          }}
          color={colors[randomInt(0, colors.length - 1)]}
        />
      }
    }

    return tiles;
  }


  render() {
    return (
      <div className='grid'>
        <div className='tiles'>{this.state.tiles}</div>

      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   if (state.grid.active === undefined) {
//     state.grid.active = ownProps.active
//   }
//   return state.grid
// }

export default connect(null, null)(Grid)


// randomColor({
//   count: 10,
//   //luminosity: 'light',
//   hue: 'monochrome',
//   format: 'rgb'
// })
