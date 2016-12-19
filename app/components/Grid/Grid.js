import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGrid } from '../../actions'

import Tile from './Tile'

export class Grid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tiles: this.createTilesData()
    }

    props.updateGrid(this.state)
  }

  // componentDidMount() {
  //   this.setState({ tiles: this.createTiles() })
  //   this.props.updateGrid(this.state)
  // }

  setDimensions() {
    const { width, height } = this.props
    const ratio = height / width
    const w = Math.min(screen.width, 480) - 10 // - (width - 1) * 4
    const h = Math.floor(w * ratio)
    return { width: w + 'px', height: h + 'px' }
  }

  createTilesData() {
    const { width, height } = this.props
    let data = []

    for (var y = 0; y < height; y++) {
      data[y] = []
      for (var x = 0; x < width; x++) {
        data[y][x] = {
          selected: false
        }
      }
    }

    return data
  }


  createTiles () {
    const { width, height } = this.props
    const tiles = []

    for (var y = 0; y < height; y++) {
      tiles[y] = []
      for (var x = 0; x < width; x++) {
        tiles[y][x] = <Tile
          key={x + '_' + y}
          id={x + '_' + y}
          x={x}
          y={y}
          width={100 / width}
          height={100 / height}
        />
      }
    }



    return tiles;
  }


  onClick(e) {
    //console.log('clicked on tile', this.props.id)
    //this.setState({ selected: !this.state.selected })
  }

  onTouchStart(e) {
    //console.log('touchstart', this.props.id)
    //this.setState({ mouseIsDown: true })
  }

  onTouchEnd(e) {
    //console.log('touchend', this.props.id)
    //this.setState({ mouseIsDown: false })
  }

  onTouchMove(e) {
    //console.log('touchmove', this.state.mouseIsDown)
    //this.setState({ selected: !this.state.selected })
  }


  render() {
    return (
      <div className='grid' style={this.setDimensions()}>
        <div className='tiles'
          onTouchStart = {this.onTouchStart.bind(this)}
          onTouchEnd = {this.onTouchEnd.bind(this)}
          onTouchMove = {this.onTouchMove.bind(this)}
        >
          {this.createTiles()}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state.grid
}

export default connect(mapStateToProps, { updateGrid })(Grid);



// randomColor({
//   count: 10,
//   //luminosity: 'light',
//   hue: 'monochrome',
//   format: 'rgb'
// })

// var colors = randomColor({
//   count: 9,
//   hue: 'monochrome',
//   luminosity: 'bright'
// })
