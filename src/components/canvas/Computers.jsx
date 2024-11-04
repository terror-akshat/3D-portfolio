import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // Make sure the path is correct and points to the public folder

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" color={"red"} /> {/* Lowercase */}
      <pointLight intensity={5}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ?  0.1: 0.75}
        position={isMobile ? [0, -3.25, -2.25] : [0, -3.25, -0.15]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuerry = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuerry.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    return () => {
      mediaQuerry.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // rotation={}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>

      <Computers isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default { Computers };
