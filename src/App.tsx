// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Header />
      <Hero />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
