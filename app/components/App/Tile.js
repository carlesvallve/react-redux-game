import styles from '../../styles/main.scss';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTile } from '../../actions'

// const TileTypes = {
//   FLOOR: 0,
//   WALL: 1,
//   PATH: 2
// }

const TileClasses = {
  0: 'floor',
  1: 'wall',
  2: 'path'
}


export class Tile extends Component {
  constructor(props) {
    super(props)

    this.debugInfo = false;
    this.type = null
  }


  render() {
    const { x, y, width, height } = this.props
    const tileClass = 'tile-inner ' + TileClasses[this.props.type] // + TileClasses[TileTypes[this.props.type]] //(this.props.type === 1 ? 'wall' : 'floor')

    return (
      <div className='tile'
        style={{ width: width + '%', height: height + '%' }}
        x={x}
        y={y}
      >
        <div className={tileClass} >
          <div
            className='tile-info'
            style={{visibility : this.debugInfo ? 'visible' : 'hidden'}}>
            {x + ',' + y}
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return state.grid.tiles[ownProps.y][ownProps.x]
}

export default connect(mapStateToProps, { updateTile })(Tile);
