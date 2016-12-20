import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGrid, updateTile } from '../../actions'

import Tile from './Tile'

export class Grid extends Component {

  constructor(props) {
    super(props)

    this.state = { tiles: this.createTilesData() }
    this.currentTile = undefined

    props.updateGrid(this.state)
  }


  // ==============================================
  // Initialization
  // ==============================================

  setDimensions() {
    const { width, height } = this.props
    const ratio = height / width
    const w = Math.min(screen.width, 480) - 10
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
          selected: false,
          x: x,
          y: y
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


  // ==============================================
  // Interaction
  // ==============================================

  onClick(e) {
    //console.log('clicked on tile', this.props.id)
    //const { x, y } = this.getMousePos(e, false)
  }

  onTouchStart(e) {
    //console.log('touchstart', this.props.id)
    const { x, y } = this.getMousePos(e, true)
    const tile = this.getTileAtMousePos(x, y)
    this.updateTile(tile)
  }

  onTouchMove(e) {
    //console.log('touchmove', this.state.mouseIsDown)
    const { x, y } = this.getMousePos(e, true)
    const tile = this.getTileAtMousePos(x, y)
    this.updateTile(tile)
  }

  onTouchEnd(e) {
    //console.log('touchend', this.props.id)
    this.currentTile = undefined
  }


  // ==============================================
  // Tile helper functions
  // ==============================================

  getMousePos(e, isTouch) {
    var touch = isTouch ? e.touches[0] : e;
    var x = touch.clientX;
    var y = touch.clientY;
    return { x, y }
  }

  getTileAtMousePos(x, y) {
    // get element under point
    const elm = document.elementFromPoint(x, y);
    if (elm === null) { return undefined }

    // get dom label text
    const name = elm.firstChild.innerHTML
    if (name === undefined) { return undefined }

    // convert name to numeric coordinates
    const arr = name.split(',')
    const tileX = parseInt(arr[0])
    const tileY = parseInt(arr[1])
    if (isNaN(tileX) || isNaN(tileY)) { return undefined }

    // get tile from coordinates
    const tile = this.state.tiles[tileY][tileX]
    return tile
  }

  isTileAvailable(tile, lastTile) {
    // escape if we have no tile
    if (tile === undefined) { return false }

    // escape if tile is the same as before
    if (this.currentTile !== undefined &&
      tile.x === this.currentTile.x &&
      tile.y === this.currentTile.y) {
      return false
    }

    return true
  }

  updateTile(tile) {
    // escape if tile is not avilable
    if (!this.isTileAvailable(tile, this.currentTile)) {
      return
    }

    // update tile data in app state
    this.props.updateTile({
      x: tile.x,
      y: tile.y,
      selected: !tile.selected
    })

    // update current tile
    this.currentTile = tile
  }


  // ==============================================
  // Render
  // ==============================================

  render() {
    return (
      <div className='grid' style={this.setDimensions()}>
        <div className='tiles'
          onClick = {this.onClick.bind(this)}
          onTouchStart = {this.onTouchStart.bind(this)}
          onTouchMove = {this.onTouchMove.bind(this)}
          onTouchEnd = {this.onTouchEnd.bind(this)}
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

export default connect(mapStateToProps, { updateGrid, updateTile })(Grid);



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
