import {
  Html,
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { MyLoader } from "./MyLoader";

interface Props {
  isClicked: boolean;
  setSelectAvatar: (avatar: string) => void;
}
const Avatar = ({ isClicked, setSelectAvatar }: Props) => {
  const [index] = React.useState(3);
  const avatar = useGLTF("/fav.glb");
  const avatar2 = useGLTF("/mav.glb");
  console.log(avatar2);
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const { actions: actions2, names: names2 } = useAnimations(
    avatar2.animations,
    avatar2.scene
  );
  //   const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
    actions2[names2[0]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[0]]?.fadeOut(0.5);
      actions2[names2[0]]?.fadeOut(0.5);
    };
  }, [index, names, actions, actions2, names2]);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={2}
        position-x={-0.5}
        position-y={-2.5}
        position-z={0.3}
      />
      <primitive
        object={avatar2.scene}
        scale={2}
        position-x={1}
        position-y={-2.5}
        position-z={0.3}
      />
      {isClicked && (
        <>
          <Html position={[-1.8, -3, 0]}>
            <button
              className="bg-gray-100 p-2 w-[100px] rounded-lg text-xs sm:text-lg sm:text-lg sm:w-[150px] hover:bg-white hover:scale-105 duration-500 transition-all border border-black"
              onClick={() => setSelectAvatar("female")}
            >
              Female
            </button>
          </Html>
          <Html position={[0.5, -3, 0]}>
            <button
              className="bg-gray-100 p-2 w-[100px] rounded-lg text-xs sm:text-lg sm:text-lg sm:w-[150px] hover:bg-white hover:scale-105 duration-500 transition-all border border-black"
              onClick={() => setSelectAvatar("male")}
            >
              Male
            </button>
          </Html>
        </>
      )}
    </group>
  );
};
export const AvatarCanvas = ({ isClicked, setSelectAvatar }: Props) => {
  return (
    <Canvas dpr={[0, 2]}>
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.8} />
      {/* <pointLight position={[1, 1, 1]} /> */}
      <OrbitControls enabled={false} />
      <Suspense fallback={<MyLoader />}>
        <Avatar isClicked={isClicked} setSelectAvatar={setSelectAvatar} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
