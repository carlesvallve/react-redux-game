import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 4);
    this.lightPosition = new THREE.Vector3(2, 2, 2)
    this.planePosition = new THREE.Vector3(0, -1, 0)

    this.texture = THREE.ImageUtils.loadTexture('../../assets/img/url.png')

    this.renderer = new THREE.WebGLRenderer();

    // var loader = new THREE.TextureLoader();
    // loader.load(
    //   '../../assets/img/conrad.png', function() {
    //
    // })

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.05,
          this.state.cubeRotation.y + 0.05,
          0
        ),
      });
    };
  }

  render() {
    const width = 480 //window.innerWidth; // canvas width
    const height = 320 //window.innerHeight; // canvas height

    //let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: true });

    return (

      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}
        onAnimate={this._onAnimate}
      >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={60}
          aspect={width / height}
          near={0.1}
          far={1000}


          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial

            wireframe={false}
            map={this.texture}
            transparent={true} opacity={0.5}

          />
        </mesh>

        <mesh
          position={this.planePosition}
        >
          <boxGeometry width={3} height={0.1} depth={3} />
          <meshBasicMaterial
            map={this.texture}
            transparent={true} opacity={0.5}
          />
        </mesh>

        <directionalLight color={0x00FFFF} intensity={1} />
        {/*<pointLight color={0xFFFFFF} position={this.lightPosition}/>*/}
      </scene>
    </React3>);
  }
}

export default Simple

//ReactDOM.render(<Simple/>, document.body);
