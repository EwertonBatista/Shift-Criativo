import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Scene = () => {
  const scroll = useScroll();
  const groupRef = useRef();

  // Refs for the logo parts
  const topArcRef = useRef();
  const bottomArcRef = useRef();

  useFrame((state, delta) => {
    const offset = scroll.offset;

    // Top Arc Animation (Left part)
    if (topArcRef.current) {
        const startPos = new THREE.Vector3(-5, 2, -5);
        // Tighter gap: x from -0.35 to -0.15
        const endPos = new THREE.Vector3(-0.15, 0.25, 0);

        const startRot = new THREE.Euler(Math.PI / 2, Math.PI, Math.PI / 4);
        const endRot = new THREE.Euler(0, 0, 0);

        topArcRef.current.position.lerpVectors(startPos, endPos, offset);
        topArcRef.current.rotation.x = THREE.MathUtils.lerp(startRot.x, endRot.x, offset);
        topArcRef.current.rotation.y = THREE.MathUtils.lerp(startRot.y, endRot.y, offset);
        topArcRef.current.rotation.z = THREE.MathUtils.lerp(startRot.z, endRot.z, offset);
    }

    // Bottom Arc Animation (Right part)
    if (bottomArcRef.current) {
        const startPos = new THREE.Vector3(5, -2, -2);
        // Tighter gap: x from 0.35 to 0.15
        const endPos = new THREE.Vector3(0.15, -0.25, 0);

        const startRot = new THREE.Euler(-Math.PI / 2, -Math.PI, -Math.PI / 4);
        const endRot = new THREE.Euler(0, 0, 0);

        bottomArcRef.current.position.lerpVectors(startPos, endPos, offset);
        bottomArcRef.current.rotation.x = THREE.MathUtils.lerp(startRot.x, endRot.x, offset);
        bottomArcRef.current.rotation.y = THREE.MathUtils.lerp(startRot.y, endRot.y, offset);
        bottomArcRef.current.rotation.z = THREE.MathUtils.lerp(startRot.z, endRot.z, offset);
    }

    if (groupRef.current) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(Math.PI, 0, offset);
    }
  });

  const materialProps = {
    color: '#F96C03',
    roughness: 0.4, // Less rough than 0.2 (which is shiny), actually more rough to be matte.
                   // Wait, low roughness = shiny. High roughness = matte.
                   // I want it to look like the image (flat orange).
                   // Let's use 0.5.
    metalness: 0.1, // Less metallic to avoid dark reflections
    envMapIntensity: 1.0,
  };

  return (
    <group ref={groupRef}>
      <Environment preset="city" />
      <ambientLight intensity={1.5} /> {/* Brighter ambient */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <directionalLight position={[0, 0, 5]} intensity={1} /> {/* Front light */}

      {/* Top Arc (Left Semicircle) */}
      <mesh ref={topArcRef} castShadow receiveShadow>
        <ringGeometry args={[0.6, 1.0, 64, 1, Math.PI / 2, Math.PI]} />
        <meshStandardMaterial {...materialProps} side={THREE.DoubleSide} />
      </mesh>

      {/* Bottom Arc (Right Semicircle) */}
      <mesh ref={bottomArcRef} castShadow receiveShadow>
        <ringGeometry args={[0.6, 1.0, 64, 1, -Math.PI / 2, Math.PI]} />
        <meshStandardMaterial {...materialProps} side={THREE.DoubleSide} />
      </mesh>

      <Sparkles count={300} scale={10} size={3} speed={0.4} opacity={0.5} color="#F96C03" />

    </group>
  );
};

export default Scene;
