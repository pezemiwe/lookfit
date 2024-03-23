import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Glasses001: THREE.SkinnedMesh;
    Wolf3D_Hair001: THREE.SkinnedMesh;
    EyeLeft001: THREE.SkinnedMesh;
    EyeRight001: THREE.SkinnedMesh;
    Wolf3D_Skin001: THREE.SkinnedMesh;
    Wolf3D_Head001: THREE.SkinnedMesh;
    Wolf3D_Teeth001: THREE.SkinnedMesh;
    Wolf3D_Teeth002: THREE.SkinnedMesh;
  };
  materials: {
    Wolf3D_Glasses: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Head: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
};

function Shoe(props: JSX.IntrinsicElements["group"]) {
  const group = useRef();
  const { nodes, materials } = useGLTF<GLTFResult>("/male.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Glasses001"
            geometry={nodes.Wolf3D_Glasses001.geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={nodes.Wolf3D_Glasses001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Glasses001?.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Glasses001?.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Hair001?.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Hair001?.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001?.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001?.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001?.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001?.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Body001?.morphTargetDictionary}
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Footwear?.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Skin?.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Skin?.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Bottom001?.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Bottom001?.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Footwear001?.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Footwear001?.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Top001?.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Top001?.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001?.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001?.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

export default function Male() {
  return (
    <Canvas
      style={{
        background: "#171717",
        height: "100vh",
        width: "100vw",
      }}
    >
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} />
      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
    </Canvas>
  );
}
