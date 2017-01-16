import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Grid extends React.Component {
  constructor(props, context) {
    super(props, context);

    const size = 5

    const geometry = (
      <planeGeometry
        width={size} height={size} widthSegments={size} heightSegments={size}
      />
    )

    const texture = new THREE.TextureLoader().load('/vr-assets/img/glowbox_128x128.png')
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set( size, size )

    const material = (
      <meshBasicMaterial
        map={texture} side={THREE.DoubleSide} transparent={true} wireframe={false}
      />
    )

    this.positionsZ = []
    for (var z = 0; z <= size; z++) {
      this.positionsZ.push(new THREE.Vector3(0, -size / 2 + z, 0))
    }

    this.positionsY = []
    for (var y = 0; y <= size; y++) {
      this.positionsY.push(new THREE.Vector3(0, 0, -size / 2 + y))
    }

    this.positionsX = []
    for (var x = 0; x <= size; x++) {
      this.positionsX.push(new THREE.Vector3(-size / 2 + x, 0, 0))
    }


    this.PlaneZ = (props) => {
      return (
        <mesh key={props.index + 'z'} position={props.position}
          rotation={new THREE.Euler(THREE.Math.degToRad(-90), 0, 0)}>
          {geometry}
          {material}
        </mesh>
      )
    }

    this.PlaneY = (props) => {
      return (
        <mesh key={props.index + 'y'} position={props.position}
          rotation={new THREE.Euler(THREE.Math.degToRad(0), 0, 0)}>
          {geometry}
          {material}
        </mesh>
      )
    }

    this.PlaneX = (props) => {
      return (
        <mesh key={props.index + 'x'} position={props.position}
          rotation={new THREE.Euler(0, THREE.Math.degToRad(90), 0)}>
          {geometry}
          {material}
        </mesh>
      )
    }
  }

  render() {
    return (
      <group>
        {this.positionsZ.map((position, index) =>
          <this.PlaneZ key={index + 'z'} position={position} />
        )}


        {this.positionsY.map((position, index) =>
            <this.PlaneY key={index + 'y'} position={position} />
        )}

        {this.positionsX.map((position, index) =>
            <this.PlaneX key={index + 'x'} position={position} />
        )}
      </group>
    )
  }

}

export default Grid
