import React, { Component } from 'react'
import Sound from 'react-sound'
import Sfx from './Sfx'

export class Audio extends Component {
  constructor(props) {
    super(props)

    const path = '../../assets/audio/'
    this.state = {
      sounds: {
        alert: { url: path + 'alert.mp3' }, //<Sound url="../../assets/audio/sms-alert.mp3" playStatus={Sound.status.STOPPED} />
        //bling: { url: path + 'bling.mp3' },
        //dum: { url: path + 'dum.mp3' },
        tec: { url: path + 'tec.mp3' },
      }
    }

    console.log('initializing audio:', this.state.sounds)
  }

  play(id) {
    console.log('playing', this.state.sounds[id])
    //this.setState({ status: Sound.status.PLAYING })
  }

  stop(id) {
    console.log('stopping', this.state.sounds[id])
    //this.setState({ status: Sound.status.STOPPED })
  }

  pause(id) {
    console.log('pausing', this.state.sounds[id])
    //this.setState({ status: Sound.status.PAUSED })
  }

  render() {
    // make array with sound data
    const soundArr = []


    for(var key in this.state.sounds) {
      if(this.state.sounds.hasOwnProperty(key)) {
        const sound = this.state.sounds[key]
        soundArr.push(sound)
      }
    }

    // map sound array into Sound components
    const soundMap = soundArr.map((item, key) =>
      <Sound
        key={key}
        url={item.url}
        playStatus={item.status || Sound.status.STOPPED}
        volume={item.volume || 100}
      />
    )

    console.log(soundMap)
    return  <ul>{soundMap}</ul>


  }


}

export default Audio
