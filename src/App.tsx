// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
       <Founder />  
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
