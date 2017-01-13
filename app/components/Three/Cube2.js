import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Cube2 extends React.Component {
  constructor(props, context) {
    super(props, context);

    // So, multiMaterial has not been implemented yet in react-three-renderer, so this wont work

    console.log('Initializing cube...')

    // set materials
    this.materials = [
       new THREE.MeshBasicMaterial({
         map: this.createVideoTexture('../../assets/video/snis00073_sm_w.mp4')
       }),
       new THREE.MeshBasicMaterial({
         map: this.createVideoTexture('../../assets/video/snis00073_sm_w.mp4')
       }),
       new THREE.MeshBasicMaterial({
         map: this.createVideoTexture('../../assets/video/snis00073_sm_w.mp4')
       }),
       new THREE.MeshBasicMaterial({
         map: this.createVideoTexture('../../assets/video/snis00073_sm_w.mp4')
       }),
       new THREE.MeshBasicMaterial({
         map: this.createVideoTexture('../../assets/video/snis00073_sm_w.mp4')
       }),
       new THREE.MeshBasicMaterial({
         map: this.createVideoTexture('../../assets/video/snis00073_sm_w.mp4')
       })
    ];

    // set position
    this.position = new THREE.Vector3(0, 0, 0)
  }

  createVideoTexture(url) {
    // create video element
    const video = document.createElement('video')
    //video.crossOrigin = ''
    video.width    = 320
    video.height   = 240
    video.autoplay = true
    video.loop = true
    video.src = url // 'https://awspv3001.r18.com/litevideo/freepv/s/sni/snis00073/snis00073_sm_w.mp4';

    const ratio = video.height / video.width

    // create video texture
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter =  THREE.NearestFilter

    return videoTexture
  }

  render() {
    return null

    return (
      <mesh position={this.position}>
        <boxGeometry width={2} height={2} depth={2}/>
        <multiMaterial map={this.materials} />
      </mesh>
    )
  }
}

export default Cube2

//
