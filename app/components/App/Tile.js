import styles from '../../styles/main.scss';

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTile } from '../../actions'


export class Tile extends Component {
  constructor(props) {
    super(props)
  }

  onTouchStart(e) {
    // dispatch to redux
    // this.props.updateTile({
    //   x: this.props.x,
    //   y: this.props.y,
    //   selected: !this.props.selected
    // })
  }

  render() {
    const { x, y, width, height } = this.props
    const color = this.props.selected ? styles.tileSelected : styles.tileNormal

    return (
      <div className='tile'
        style={{ width: width + '%', height: height + '%' }}
      >
        <div className='tile-inner' style={{ backgroundColor: color }}>
          <div className='tile-info'>{x + ',' + y}</div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return state.grid.tiles[ownProps.y][ownProps.x]
}

export default connect(mapStateToProps, { updateTile })(Tile);
