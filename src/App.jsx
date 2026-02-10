import React, { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 h-screen w-screen overflow-hidden">
      <Navbar />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
      <Loader
        containerStyles={{ background: '#f9fafb' }} // Match bg-gray-50
        innerStyles={{ background: '#F96C03', width: '200px', height: '10px' }} // Orange bar
        barStyles={{ background: '#F96C03', height: '10px' }}
        dataStyles={{ color: '#F96C03', fontSize: '1.2rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
    </div>
  );
}

export default App;
