import styles from '../../styles/main.scss';

import React, { Component } from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'
import { updateTile } from '../../actions'


export class Tile extends Component {
  constructor(props) {
    super(props)

    this.selected = null
  }


  render() {
    const { x, y, width, height } = this.props
    const tileClass = 'tile-inner ' + (this.props.selected ? 'wall' : 'floor')

    return (
      <div className='tile'
        style={{ width: width + '%', height: height + '%' }}
      >
        <div className={tileClass} >
          <div className='tile-info'>{x + ',' + y}</div>
        </div>

        {/*
        <Sound
          url={'../../assets/audio/alert.mp3'}
          playStatus={ this.props.selected ? Sound.status.PLAYING : Sound.status.PAUSED }
          multiShot={true}
          multiShotEvents={false}
          streaming={false}
        />
        */}

      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return state.grid.tiles[ownProps.y][ownProps.x]
}

export default connect(mapStateToProps, { updateTile })(Tile);
