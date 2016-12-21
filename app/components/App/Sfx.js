import React, { Component } from 'react'
import Sound from 'react-sound'


export class Sfx extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: Sound.status.PLAYING,
      volume: 1
    }
  }

  play() {
    this.setState({ status: Sound.status.PLAYING })
  }

  stop() {
    this.setState({ status: Sound.status.STOPPED })
  }

  pause() {
    this.setState({ status: Sound.status.PAUSED })
  }

  setVolume(volume) {
    this.setState({ volume: volume })
  }

  render() {
    return (
      <Sound
        url={this.props.url}
        playStatus={this.state.status}
        volume={this.state.volume}
      />
    )
  }

}

export default Sfx
