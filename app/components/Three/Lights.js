import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Lights extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <group>
        <directionalLight color={0xFFFFFF} intensity={20} position={new THREE.Vector3(3, 3, 3)} />
        <pointLight color={0xffffff} intensity={3} position={new THREE.Vector3(0, 1, 0)}/>
      </group>
    )
  }
}

export default Lights
