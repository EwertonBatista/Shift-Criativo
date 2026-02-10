import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Scene from './Scene';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Budget from './Budget';
import Footer from './Footer';

const Experience = () => {
  return (
    <div className="w-full h-screen fixed inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        className="w-full h-full bg-gray-50"
      >
        {/* Pages needs to be adjusted based on content height.
            Since we have 5 sections, 5-6 pages is a good start. */}
        <ScrollControls pages={6} damping={0.3}>
          {/* 3D Scene - custom controlled via useScroll inside Scene */}
          <Scene />

          {/* HTML Overlay - scrolls naturally */}
          <Scroll html style={{ width: '100%' }}>
            <Hero />
            <Portfolio />
            <About />
            <Budget />
            <Footer />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Experience;
