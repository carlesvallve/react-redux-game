import React, { Component } from 'react'
import Sound from 'react-sound'

import { connect } from 'react-redux'
import { updateGrid, updateTile, updateEntity } from '../../actions'

// import Sound from 'react-sound'
// import Sfx from './Sfx'

import Tile from './Tile'
import Entity from './Entity'

export class Grid extends Component {

  constructor(props) {
    super(props)

    // record grid dimensions for future use
    const { map } = props
    this.width = map[0].length
    this.height = map.length


    this.state = {
      tiles: this.createTilesData(),
      entities: {
        'player': {id: 'player', x: 0, y: 0}
      }
    }
    this.currentTile = undefined

    //console.log('>>>>>>>>>>>>>', window.Audio)
    // this.sounds = []
    // this.sounds = {
    //   alert: <Sfx url="../../assets/audio/sms-alert.mp3" /> //<Sound url="../../assets/audio/sms-alert.mp3" playStatus={Sound.status.STOPPED} />
    // }

    props.updateGrid(this.state)

    props.updateEntity({
      id: this.state.entities.player.id,
      x: this.state.entities.player.x,
      y: this.state.entities.player.y
    })
  }


  // ==============================================
  // Initialization
  // ==============================================

  setDimensions() {
    const { width, height } = this
    const ratio = height / width
    const w = Math.min(screen.width, 480) - 10
    const h = Math.floor(w * ratio)
    return { width: w + 'px', height: h + 'px' }
  }

  createTilesData() {
    const { width, height } = this
    let data = []

    for (var y = 0; y < height; y++) {
      data[y] = []
      for (var x = 0; x < width; x++) {
        data[y][x] = {
          selected: (this.props.map[y][x] === 1 ? true : false),
          x: x,
          y: y
        }
      }
    }

    return data
  }

  createTiles () {
    const { width, height } = this
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

  createEntity(id) {
    const { width, height } = this
    const entityData = this.state.entities[id]

    return (
      <Entity
        key={entityData.id}
        id={entityData.id}
        x={entityData.x}
        y={entityData.y}
        width={100 / width}
        height={100 / height}
        grid={this}
      />
    )
  }

  // ==============================================
  // Interaction
  // ==============================================

  onTouchStart(e) {
    const { x, y } = this.getMousePos(e, true)
    const tile = this.getTileAtMousePos(x, y)
    this.updateEntity('player', tile.x, tile.y)
    //this.updateTile(tile)
  }

  onTouchMove(e) {
    //console.log('touchmove', this.state.mouseIsDown)
    // const { x, y } = this.getMousePos(e, true)
    // const tile = this.getTileAtMousePos(x, y)
    // this.updateTile(tile)
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
    // get element under given position
    const elm = document.elementFromPoint(x, y);
    if (elm === null) { return undefined }

    // get x,y from element attributes
    const tileX = elm.getAttribute('x')
    const tileY = elm.getAttribute('y')
    if (tileX === null || tileY === null) { return undefined }

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

    //this.sounds.push(<Sound url={'../../assets/audio/bling.mp3'} playStatus={Sound.status.PLAYING} />)
  }

  updateEntity(id, x, y) {
    console.log('updateEntity', x, y, id)
    this.props.updateEntity({id: id, x: x, y: y})
  }


  // ==============================================
  // Render
  // ==============================================

  render() {

    // const soundMap = this.sounds.map((item, key) =>
    //   {item}
    // )

    return (
      <div className='grid' style={this.setDimensions()}>

        {/* tiles */}
        <div className='tiles'
          onTouchStart = {this.onTouchStart.bind(this)}
          onTouchMove = {this.onTouchMove.bind(this)}
          onTouchEnd = {this.onTouchEnd.bind(this)}
        >
          {this.createTiles()}
        </div>

        {/* entities */}
        <div className='entities'>
          {this.createEntity('player')}
        </div>

        {/*<ul>{soundMap}</ul>*/}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state.grid
}

export default connect(mapStateToProps, { updateGrid, updateTile, updateEntity })(Grid);



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

// <Sound
//   url="cool_sound.mp3"
//   playStatus={Sound.status.PLAYING}
//   playFromPosition={300 /* in milliseconds */}
//   onLoading={this.handleSongLoading}
//   onPlaying={this.handleSongPlaying}
//   onFinishedPlaying={this.handleSongFinishedPlaying}
// />
