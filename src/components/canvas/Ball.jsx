import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Preload,
  useTexture,
  Float,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, name }) => {
  const [decal] = useTexture([imgUrl]);
  // const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={2}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.5}
        // onPointerOver={() => setHovered(true)} // Set hovered to true on mouse over
        // onPointerOut={() => setHovered(false)} // Set hovered to false on mouse out
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // Adjust as needed
          map={decal}
        />
        {/* <p>{name}</p> */}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} name={name} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
