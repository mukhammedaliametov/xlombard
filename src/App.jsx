import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Ideal from './components/Ideal';
import Possibilities from './components/Possibilities';
import Integration from './components/Integration';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Ideal />
      <Possibilities />
      <Integration />
      <Presentation />
      <Contact />
      <Footer />
    </>
  );
};

export default App;