import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { randomInt } from '../../utils/utils'


class Cube extends React.Component {
  constructor(props, context) {
    super(props, context);

    // set video texture
    this.videoTexture = this.createVideoTexture('/vr-assets/video/' + props.url + '.mp4')
  }

  createVideoTexture(url) {
    // create video element
    const video = document.createElement('video')

    //video.crossOrigin = ''
    video.width    = 240
    video.height   = 240
    video.autoplay = true
    video.loop = true
    video.src = url

    // create video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter =  THREE.NearestFilter

    // set currentTime once readyState is available
    var i = setInterval(function() {
    	if(video.readyState > 0) {
        video.currentTime = Math.random() * video.duration
    		clearInterval(i);
    	}
    }, 100);

    return videoTexture
  }

  render() {


    return (
      <mesh position={this.props.position}>
        <boxGeometry width={this.props.width} height={this.props.height} depth={this.props.depth}/>
        <meshStandardMaterial
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
