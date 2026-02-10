import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Environment, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Scene = () => {
  const scroll = useScroll();
  const groupRef = useRef();

  // Individual refs for animation
  const heroShapeRef = useRef();
  const aboutShapeRef = useRef();
  const portfolioGroupRef = useRef();
  const contactShapeRef = useRef();

  useFrame((state, delta) => {
    const r1 = scroll.range(0, 1/4); // Hero
    const r2 = scroll.range(1/4, 1/4); // About
    const r3 = scroll.range(2/4, 1/4); // Portfolio
    const r4 = scroll.range(3/4, 1/4); // Budget/Contact

    // General rotation based on scroll
    if (groupRef.current) {
        groupRef.current.rotation.y = -scroll.offset * Math.PI * 2;
    }

    // Hero Shape Animation
    if (heroShapeRef.current) {
        // visible in first section, then moves away
        heroShapeRef.current.position.x = THREE.MathUtils.lerp(2, 10, r2);
        heroShapeRef.current.rotation.x += delta * 0.2;
        heroShapeRef.current.rotation.y += delta * 0.3;
        heroShapeRef.current.scale.setScalar(THREE.MathUtils.lerp(1, 0, r2));
    }

    // About Shape Animation
    if (aboutShapeRef.current) {
        // Enters in second section
        // Starts far away or small
        const entry = scroll.curve(1/5, 1/4); // fade in/out

        aboutShapeRef.current.scale.setScalar(THREE.MathUtils.lerp(0, 1.5, entry));
        aboutShapeRef.current.position.x = THREE.MathUtils.lerp(-10, -2, entry);
        aboutShapeRef.current.rotation.z += delta * 0.1;
    }

    // Portfolio Shapes
    if (portfolioGroupRef.current) {
         const entry = scroll.curve(2/5, 1/4);
         portfolioGroupRef.current.position.y = THREE.MathUtils.lerp(-10, 0, entry);
         portfolioGroupRef.current.rotation.x = THREE.MathUtils.lerp(Math.PI/2, 0, entry);
    }
  });

  const materialProps = {
    color: '#F96C03',
    roughness: 0.1,
    metalness: 0.8,
    envMapIntensity: 1.5
  };

  const glassMaterialProps = {
    color: '#ffffff',
    roughness: 0.0,
    metalness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.6,
    thickness: 0.5
  };

  return (
    <group ref={groupRef}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

      {/* Hero Section: Abstract creative symbol */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <group ref={heroShapeRef} position={[2, 0, 0]}>
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[-1, 1, 1]} scale={0.5}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhysicalMaterial {...glassMaterialProps} />
          </mesh>
        </group>
      </Float>

      {/* About Section: Clean geometric forms */}
      <group ref={aboutShapeRef} position={[-2, 0, 0]} scale={0}>
         <mesh castShadow receiveShadow rotation={[0, Math.PI / 4, 0]}>
           <boxGeometry args={[2, 2, 2]} />
           <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.5} />
         </mesh>
         <mesh position={[0, 0, 0]} scale={1.2}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color="#F96C03" wireframe />
         </mesh>
      </group>

      {/* Portfolio Background Elements */}
      <group ref={portfolioGroupRef} position={[0, -10, -5]}>
         {/* Array of floating spheres or cubes */}
         {Array.from({ length: 10 }).map((_, i) => (
            <mesh
                key={i}
                position={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5
                ]}
            >
                <sphereGeometry args={[0.2 + Math.random() * 0.3, 16, 16]} />
                <meshStandardMaterial color={i % 2 === 0 ? '#F96C03' : '#ffffff'} />
            </mesh>
         ))}
      </group>

      {/* Background Particles throughout */}
      <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.5} color="#F96C03" />

    </group>
  );
};

export default Scene;
