// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container px-4 sm:px-6 md:px-8">
      <Header />
      <Hero />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
