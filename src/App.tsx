import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu'; // ✅ Import the Menu
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu /> {/* ✅ Menu section added here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
