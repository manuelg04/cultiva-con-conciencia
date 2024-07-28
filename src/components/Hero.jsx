import React from 'react';
import Image from 'next/image';
import { Button } from "./../../@/components/ui/button"

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/rottenfood.jpg"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">9.7 MM de toneladas</h2>
        <p className="text-lg md:text-xl mb-6">Cantidad de alimentos producidos que se pierden o desperdician al año.</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Cultiva con conciencia</h1>
        <h2 className="text-2xl md:text-3xl mb-8">Técnicas Sostenibles que Benefician a Todos</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
            Aprende más
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-green-600 transition-colors duration-300"
          >
            Contáctanos
          </Button>
        </div>
        <div className="mt-12 flex justify-between">
          <div>
            <p className="text-4xl font-bold">45%</p>
            <p className="text-sm">Porcentaje de frutas y verduras que no llegan a consumirse al año en el mundo.</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10%</p>
            <p className="text-sm">Porcentaje de las emisiones de efecto invernadero generadas por el desperdicio de alimentos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;