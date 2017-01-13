import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';


class Camera extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log('Initializing camera...')

    //this.cameraPosition = new THREE.Vector3(0, 0, 10)
    //this.cameraRotation = new THREE.Euler(0, 0, 0)
    this.cameraPosition = new THREE.Vector3(10, 10, 10)
    //this.cameraRotation = new THREE.Euler(THREE.Math.degToRad(-45), THREE.Math.degToRad(45), 0)
  }


  componentWillUpdate() {
    //this.cameraPosition = new THREE.Vector3(0, 0, this.cameraPosition.z - 0.005)
  }


  render() {
    return (
      <perspectiveCamera
        ref="camera"
        name="camera"
        fov={30}
        aspect={this.props.width / this.props.height}
        near={0.1}
        far={1000}
        position={this.cameraPosition}
      />
    )
  }
}

export default Camera

// rotation={this.cameraRotation}
