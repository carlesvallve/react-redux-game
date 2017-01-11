import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Grid extends React.Component {
  constructor(props, context) {
    super(props, context);


    this.glowTex = THREE.ImageUtils.loadTexture('../../assets/img/glowbox_256x256.png')
    this.glowTex.wrapS = this.glowTex.wrapT = THREE.RepeatWrapping
    this.glowTex.repeat.set( 41, 41 )
  }

  render() {

    return (
      <mesh position={new THREE.Vector3(0, -1, 0)} rotation={new THREE.Euler(THREE.Math.degToRad(-90), 0, 0)}>
        <planeGeometry width={21} height={21} widthSegments={21} heightSegments={21}/>
        <meshPhongMaterial
          map={this.glowTex}
          transparent={true}
          opacity={1}

          emissiveMap={this.glowTex}
          emissive={0x000000}
          emissiveIntensity={1}
        />
      </mesh>
    )
  }
}

export default Grid
