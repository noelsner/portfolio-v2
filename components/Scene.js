import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
  useTexture,
  OrbitControls,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function Scene({ setBg }) {
  const sphere = useRef();
  const camera = useRef();
  // const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [colorMap, roughnessMap] = useTexture(["/textures/plywood_diff_4k.jpg", "/textures/plywood_rough_4k.jpg"]);

  // Make the bubble float and follow the mouse
  useFrame((state) => {
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 1.6 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 1.6 : 0),
        0.2
      );
    }
  });

  const [{ wobble, coat }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: !hovered ? 0.01 : 0.01,
      config: (n) => n === "wobble" && hovered && { mass: 2, tension: 800, friction: 10 },
    },
    [hovered, down]
  );

  return (
    <>
      <PerspectiveCamera makeDefault ref={camera} position={[0, 0, 4]} rotation={[0, 0, 0]} fov={75}>
        <a.ambientLight intensity={1} />
      </PerspectiveCamera>
      <OrbitControls camera={camera.current} enablePan={false} enableZoom={false} />
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            // setMode(!mode);
            // setBg({ background: !mode ? "#202020" : "#f0f0f0", fill: !mode ? "#f0f0f0" : "#202020" });
          }}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            envMapIntensity={0.5}
            clearcoat={coat}
            clearcoatRoughness={0}
            map={colorMap}
            // normalMap={normalMap}
            roughnessMap={roughnessMap}
          />
        </a.mesh>
        <Environment preset="warehouse" />
        {/* <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={0.6}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        /> */}
      </Suspense>
    </>
  );
}
