import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

window.THREE = THREE // we need to do this in order to use DeviceOrientationControls, sadly

var Stats = require('stats-js')
var OrbitControls = require('three-orbit-controls')(THREE)
var DeviceOrientationControls = require('device-orientation-controls')
var StereoEffect = require('three-stereo-effect')(THREE)


import Camera from './Camera'
import Lights from './Lights'
import Grid from './Grid'
import Cube from './Cube'

import { randomInt } from '../../utils/utils'


class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // NOTE: construct the position vectors in the constructors, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    //this.cameraPosition = new THREE.Vector3(0, 0, 8)

    // set stats
    this.setStats()

    // set viewport dimensions
    this.viewportWidth = window.innerWidth; // canvas width
    this.viewportHeight = window.innerHeight; // canvas height

    // set video urls
    const urls = [
      'bf00282_sm_w',
      'cnd00081_sm_w',
      'hnd00032_sm_w',
      'hnds00011_sm_w',
      'kawd00498_sm_w',
      'pxd00029_sm_w',
      'snis00050_sm_w',
      'snis00069_sm_w',
      'snis00073_sm_w',
      'soe00909_sm_w'
    ]

    // generate video cubes at random locations
    this.cubes = []
    for (var i = 0; i < urls.length; i++) {
      this.cubes.push({
        position: new THREE.Vector3(randomInt(-2, 2), randomInt(-2, 2), randomInt(-2, 2)),
        width: 1, height: 1, depth:1,
        url: urls[i]
      })
    }
  }

  setStats () {
    this.stats = new Stats();
    this.stats.setMode(0); // 0: fps, 1: ms
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.body.appendChild( this.stats.domElement );
  }

  setControls() {
    // set orbital controls (desktop)
    this.controls = new OrbitControls(this.camera);

    // set device orientation controls (device)
    function setOrientationControls(e) {
      if (!e.alpha) { return; }
      this.controls = new DeviceOrientationControls(this.camera, true);
      this.controls.connect();
      this.controls.update();

      window.removeEventListener('deviceorientation', setOrientationControls, true);
    }

    window.addEventListener('deviceorientation', setOrientationControls, true);
  }

  componentDidMount() {
    // get renderer, scene and camera
    this.renderer = this.refs.react3._canvas.userData.markup.childrenMarkup[0].threeObject._renderer
    this.scene = this.refs.scene
    this.camera = this.refs.camera.refs.camera
    console.log(this.renderer, this.scene, this.camera)

    // set background color
    const bgColor = 0x000000 //0x123456
    this.renderer.setClearColor(bgColor, 1.0)
    this.fog = new THREE.Fog(bgColor, 0.1, 30)

    // set controls
    this.setControls()

    // set stereo effect
    this.stereoEffect = new StereoEffect(this.renderer)
    this.stereoEffect.eyeSeparation = 0.8;
    this.stereoEffect.setSize( this.viewportWidth, this.viewportHeight );
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  onAnimate() {
    this.stats.begin();

    // update device orientation controls
    this.controls.update();

    // update stereo effect
    this.stereoEffect.render(this.scene, this.camera)
    this.stats.end();
  }

  render() {
    return (
      <React3
        ref="react3"
        mainCamera="cameraMain" // this points to the perspectiveCamera which has the name set to "camera" below
        width={this.viewportWidth} height={this.viewportHeight}
        onAnimate={this.onAnimate.bind(this)}
        antialias={true}
      >
      <scene ref='scene' fog={this.fog}>

        <Camera ref='camera' renderer={this.renderer} width={this.viewportWidth} height={this.viewportHeight}/>
        <Lights />
        <Grid />

        {this.cubes.map((data, index) =>
          <Cube key={'cube' + index}
            position={data.position} // this is blah blah
            width={data.width}
            height={data.height}
            depth={data.depth}
            url={data.url}
          />
        )}

      </scene>
    </React3>);
  }
}

export default Simple
