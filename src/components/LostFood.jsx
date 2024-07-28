import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import FoodLossChart from './FoodLostChart';

const AnimatedSection = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);

const LostFood = () => {
  return (
    <div className="bg-green-50 min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-16">
        <AnimatedSection>
          <h2 className="text-5xl font-bold mb-8 text-center text-green-800">Pérdida de alimentos</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </AnimatedSection>
        
        <AnimatedSection className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <p className="text-xl mb-6 text-green-800">
                Ocurre durante el proceso de producción, postcosecha y procesamiento. Incluye pérdidas debido a plagas, condiciones climáticas adversas, y manejo ineficiente.
              </p>
            </CardContent>
          </Card>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-xl">
            <Image 
              src="/lostfood.jpg" 
              alt="Pérdida de alimentos" 
              layout="fill"
              objectFit="cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="bg-green-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Principales factores que contribuyen</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Manejo inadecuado de cultivos</li>
                <li>Infraestructura insuficiente</li>
                <li>Condiciones climáticas extremas</li>
                <li>Plagas y enfermedades</li>
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-800">En el mundo…</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-green-700">Se desperdician aproximadamente 1/3 de los alimentos que se producen.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-800">La mayor pérdida…</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-green-700">Sucede en el proceso de producción, ocurre debido a prácticas ineficientes.</p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-800">Pérdida de alimentos por categoría</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <FoodLossChart />
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default LostFood;