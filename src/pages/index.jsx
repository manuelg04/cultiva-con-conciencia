import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LostFood from '../components/LostFood';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LostFood />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;