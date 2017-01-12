import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

var OrbitControls = require('three-orbit-controls')(THREE)


class Camera extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(20, 20, 20)
    this.cameraRotation = new THREE.Euler(THREE.Math.degToRad(-45), THREE.Math.degToRad(45), 0)
    console.log('Initializing camera...')
  }

  componentDidMount() {
    const controls = new OrbitControls(this.refs.cameraL);
    this.controls = controls;
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  componentWillUpdate() {
    //this.cameraPosition = new THREE.Vector3(0, 0, this.cameraPosition.z - 0.005)
  }


  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
      <group>
        <perspectiveCamera
          ref="cameraL"
          name="cameraL"
          fov={60}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
          rotation={this.cameraRotation}
        />
        <perspectiveCamera
          ref="cameraR"
          name="cameraR"
          fov={60}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
          rotation={this.cameraRotation}
        />
      </group>

    )
  }
}

export default Camera
