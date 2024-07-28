import React from 'react';
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Cultiva con conciencia</h3>
            <p>Técnicas Sostenibles que Benefician a Todos</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Inicio</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Suscríbete a nuestro boletín</h4>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-gray-700 text-white" />
              <Button variant="secondary">Suscribirse</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
          <p>&copy; 2024 Cultiva con conciencia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;