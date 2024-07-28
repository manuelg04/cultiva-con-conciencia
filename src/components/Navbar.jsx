import React from 'react';
import Link from 'next/link';
import { Button } from "../../@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-gray-800 text-lg">Cultiva con conciencia</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-green-600 transition duration-300">Inicio</Link>
            <Link href="#" className="text-gray-800 hover:text-green-600 transition duration-300">Sobre nosotros</Link>
            <Link href="#" className="text-gray-800 hover:text-green-600 transition duration-300">Contacto</Link>
            
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/">Inicio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Sobre nosotros</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Contacto</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Iniciar sesión</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;