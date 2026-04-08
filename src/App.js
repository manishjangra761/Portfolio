<<<<<<< HEAD
import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
=======
import React, { useLayoutEffect } from 'react';
// components
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
>>>>>>> master
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
<<<<<<< HEAD
  return (
    <div className='overflow-x-hidden bg-gradient-to-r from-[#f4ede0] to-[#a5fbfc]'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer/>

=======
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className='overflow-x-hidden bg-gradient-to-br from-[#0b1220] via-[#0c1424] to-[#0a101a] min-h-screen text-slate-100'>
      <Nav />
      <main className='pt-20 lg:pt-24 pb-16'>
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
>>>>>>> master
    </div>
  );
};

export default App;
