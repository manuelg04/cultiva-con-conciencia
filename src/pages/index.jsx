import React from 'react';
import { LandingPage } from '../../@/components/component/landing-page';
import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "../../@/components/ui/carousel"
import { Input } from "../../@/components/ui/input"
import { Button } from "../../@/components/ui/button"

const IndexPage = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default IndexPage;