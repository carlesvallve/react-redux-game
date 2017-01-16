import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Lights extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.pos1 = new THREE.Vector3(6, 6, 6)
    this.pos2 = new THREE.Vector3(-6, -6, -6)
  }

  render() {

    return (
      <group>
        <pointLight color={0x00ffff} intensity={3} position={this.pos1}/>
        <pointLight color={0xff0000} intensity={3} position={this.pos2}/>
      </group>
    )
  }
}

export default Lights

// <directionalLight color={0x123456} intensity={10} position={new THREE.Vector3(3, 3, 3)} />
