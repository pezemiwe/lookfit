import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { MyLoader } from "./MyLoader";

const Avatar = () => {
  const avatar = useGLTF("/base2.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);

  React.useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[0]]?.fadeOut(0.5);
    };
  }, [names, actions]);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={2}
        position-y={-2.5}
        position-z={1}
      />
    </group>
  );
};
export const FemaleCanvas = () => {
  return (
    <Canvas dpr={[0, 2]}>
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.8} />
      {/* <pointLight position={[1, 1, 1]} /> */}
      <OrbitControls enabled={false} />
      <Suspense fallback={<MyLoader />}>
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
