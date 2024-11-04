import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 0.7 });

  return (
    <group>
      <Points positions={sphere} ref={ref} stride={3} frustumCulled {...props}>
        <PointMaterial
          color="f272c8"
          transparent
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
export default StarsCanvas;
