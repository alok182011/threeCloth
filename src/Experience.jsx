import { useLoader, useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, TransformControls } from "@react-three/drei";

// extend({ OrbitControls });

const Experience = () => {
  const cubeRef = useRef();
  const three = useThree();
  const model = useLoader(GLTFLoader, "./shirt.glb");
  const colorMap = useLoader(TextureLoader, "./cloth1.jpeg");

  // model.scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material.map = colorMap;
  //   }
  // });

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* <orbitControls
        args={[three.camera, three.gl.domElement]}
        // enableZoom={false}
      /> */}
      <OrbitControls makeDefault />
      <directionalLight position={[2, 2, 3]} intensity={2} />
      <ambientLight intensity={4} />

      <mesh position-x={-2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} />

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* <primitive object={model.scene} scale={4} position-y={-4.5} /> */}
    </>
  );
};

export default Experience;
