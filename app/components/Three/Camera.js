import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Camera extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 1, 10)
  }

  componentWillUpdate() {
    this.cameraPosition = new THREE.Vector3(0, 0, this.cameraPosition.z - 0.05)
  }


  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
      <perspectiveCamera
        name="camera"
        fov={60}
        aspect={width / height}
        near={0.1}
        far={1000}
        position={this.cameraPosition}
      />
    )
  }
}

export default Camera
