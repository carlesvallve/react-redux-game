import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { randomInt } from '../../utils/utils'


class Cube extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.videos = []

    // set video texture
    this.setVideoTexture('/vr-assets/video/' + props.url + '.mp4')
  }

  setVideoTexture(url) {
    // create video element
    this.video = document.createElement('video')

    //video.crossOrigin = ''
    this.video.width    = 240
    this.video.height   = 240
    this.video.autoplay = true
    this.video.loop = true
    this.video.playsInline = true
    this.video.muted = true
    this.video.src = url

    // create video texture
    this.videoTexture = new THREE.VideoTexture(this.video);
    this.videoTexture.minFilter =  THREE.NearestFilter

    //this.video.currentTime = Math.random() * this.video.duration
    //this.video.play()

    // set currentTime once readyState is available
    // var that = this
    // var i = setInterval(function() {
    // 	if(that.video.readyState > 0) {
    //     that.video.currentTime = Math.random() * that.video.duration
    // 		clearInterval(i);
    // 	}
    // }, 100);
  }

  componentWillReceiveProps(newProps) {
    console.log('video receiving props', this.video)
    this.video.currentTime = Math.random() * this.video.duration
    this.video.play()
  }

  // componentDidUpdate() {
  //   this.video.currentTime += 100
  // }


  render() {

    //this.video.currentTime = Math.random() * this.video.duration

    console.log('rendering video...', this.video)
    return (
      <mesh position={this.props.position}>
        <boxGeometry width={this.props.width} height={this.props.height} depth={this.props.depth}/>
        <meshBasicMaterial
          map={this.videoTexture} side={THREE.DoubleSide}


        />
      </mesh>
    )
  }
}

export default Cube

// emissiveMap={this.videoTexture}
// emissive = {0xffffff}
// emissiveIntensity = {1}
