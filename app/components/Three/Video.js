import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Video extends React.Component {
  constructor(props, context) {
    super(props, context);

    console.log('Initializing video...')


    // this.glowTex = THREE.ImageUtils.loadTexture('../../assets/img/glowbox_256x256.png')
    // this.glowTex.wrapS = this.glowTex.wrapT = THREE.RepeatWrapping
    // this.glowTex.repeat.set( 41, 41 )

    // create video element
    this.video = document.createElement('video')
    //this.video.crossOrigin = ''
    this.video.width    = 320
    this.video.height   = 240
    this.video.autoplay = true
    this.video.loop = true
    this.video.src = '../../assets/video/snis00073_sm_w.mp4' // 'https://awspv3001.r18.com/litevideo/freepv/s/sni/snis00073/snis00073_sm_w.mp4';

    this.ratio = this.video.height / this.video.width

    // create video texture
    this.videoTexture = new THREE.VideoTexture( this.video );
    this.videoTexture.minFilter =  THREE.NearestFilter
  }

  render() {

    return (
      <mesh position={new THREE.Vector3(0, 3, 0)}>
        <planeGeometry width={2} height={2 * this.ratio} />
        <meshBasicMaterial
          map={this.videoTexture}
        />
      </mesh>
    )
  }
}

export default Video
