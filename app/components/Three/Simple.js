import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

import Camera from './Camera'
import Grid from './Grid'
import Video from './Video'


class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // var size = 10;
    // var divisions = 10;
    //
    // var gridHelper = new THREE.GridHelper( size, divisions );
    // scene.add( gridHelper );

    this.glowTex = THREE.ImageUtils.loadTexture('../../assets/img/glowbox_256x256.png')
    //this.glowTex = THREE.ImageUtils.loadTexture('../../assets/img/glowsquare-purple.png')
    this.glowTex.wrapS = this.glowTex.wrapT = THREE.RepeatWrapping
    this.glowTex.repeat.set( 41, 41 )

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 8)
    this.lightPosition = new THREE.Vector3(2, 2, 2)
    this.planePosition = new THREE.Vector3(0, 0, 0)

    //this.texture = THREE.ImageUtils.loadTexture('../../assets/img/url.png')
    //this.renderer = new THREE.WebGLRenderer();

    // create video element
    // this.video = document.createElement('video')
    // //this.video.crossOrigin = ''
    // this.video.width    = 320
    // this.video.height   = 240
    // this.video.autoplay = true
    // this.video.loop = true
    // this.video.src = '../../assets/video/snis00073_sm_w.mp4' // 'https://awspv3001.r18.com/litevideo/freepv/s/sni/snis00073/snis00073_sm_w.mp4';
    //
    // this.ratio = this.video.height / this.video.width
    //
    // // create video texture
    // this.videoTexture = new THREE.VideoTexture( this.video );
    // this.videoTexture.minFilter =  THREE.NearestFilter

    this.state = {
      cubeRotation: new THREE.Euler(),
      //cameraPosition: new THREE.Vector3(0, 1, 10)
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.025,
          this.state.cubeRotation.y + 0.025,
          0
        )
      });

      //Every time the video got enougth data to be display, the texture is updated and sent to the GPU.
      // if(this.video.readyState === this.video.HAVE_ENOUGH_DATA ){
      //   this.videoTexture.needsUpdate = true;
      // }
    };
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    //console.log(THREE.Math.degToRad(90))

    //let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: true });

    return (

      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        antialias={true}
      >
      <scene fog={new THREE.Fog( 0x000000, 0.1, 30 )}>

        <Camera />
        <Grid />
        <Video />

        <mesh
          rotation={this.state.cubeRotation}
          position = {new THREE.Vector3(-5, 3, 0)}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial map={this.videoTexture} />
        </mesh>

        <directionalLight color={0xFFFFFF} intensity={20} position={new THREE.Vector3(3, 3, 3)} />
        <pointLight color={0xffffff} intensity={3} position={new THREE.Vector3(0, 1, 0)}/>
      </scene>
    </React3>);
  }
}

export default Simple

//ReactDOM.render(<Simple/>, document.body);
