import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Budget from './components/Budget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Budget />
      <Footer />
    </div>
  );
}

export default App;
