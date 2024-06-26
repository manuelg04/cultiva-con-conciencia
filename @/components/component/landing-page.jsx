/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jd9kMMJUj08
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Tenor_Sans } from 'next/font/google'
import { Rubik } from 'next/font/google'

tenor_sans({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "../ui/carousel"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export function LandingPage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#1e3a8a] text-white">
        <Link className="flex items-center justify-center" href="#">
          <BuildingIcon className="h-6 w-6" />
          <span className="sr-only">Cultiva con Conciencia</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            History
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Sustainability
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#1e3a8a]">
                    Cultiva con Conciencia: Técnicas Sostenibles que Benefician a Todos 
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Semillas de Cambio: Técnicas para una Agricultura Sostenible                   </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#1e3a8a] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e3a8a]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e3a8a] disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-[#1e3a8a] dark:hover:bg-gray-50/90 dark:focus-visible:ring-[#1e3a8a]"
                    href="#">
                    Quiero saber mas
                  </Link>
                </div>
              </div>
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      alt="Image"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/IMG_LANDING_HERO.JPG"
                      width={448} />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Image"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/IMG_LANDING_HERO2.JPG"
                      width={448} />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Image"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448} />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      alt="Image"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448} />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Image"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448} />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      alt="Image"
                      className="aspect-video object-cover rounded-md"
                      height={252}
                      src="/placeholder.svg"
                      width={448} />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1e3a8a]">
                    Titulo aqui
                  </h2>
                  <p
                    className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    En Cultiva con Conciencia, nos comprometemos a apoyar el crecimiento y la prosperidad de los agricultores a través de técnicas sostenibles que no solo benefician nuestras tierras, sino que también promueven un futuro más verde y resiliente para todos.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9ff] dark:bg-[#0f172a]">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1e3a8a]">
                    Titulo aqui
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  En cultiva con conciencia nos comprometemos a apoyar el crecimiento y la prosperidad de los agricultores a través de técnicas sostenibles que no solo benefician nuestras tierras, sino que también promueven un futuro más verde y resiliente para todos.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Sustainable Practices"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">Organic Farming</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We use only natural, non-synthetic fertilizers and pest control methods to maintain the health
                        of our soil and crops.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">Water Conservation</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our irrigation systems are designed to minimize water usage and prevent waste, ensuring
                        efficient use of this precious resource.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">Biodiversity</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We maintain diverse ecosystems on our farm, providing habitats for a wide range of plant and
                        animal species.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1e3a8a]">Titulo aqui</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Acme Farms has been a family-owned and operated business for over a century, with a rich history of
                  sustainable agriculture and community involvement.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="History"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550" />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">1920s: Founding</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Acme Farms was founded in the 1920s by our great-grandparents, who were pioneers in sustainable
                        agriculture.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">1950s: Expansion</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        In the 1950s, our grandparents expanded the farm and began selling their products at local
                        farmers' markets.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#1e3a8a]">Today: Sustainability</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Today, we continue our family's legacy of sustainable farming, using the latest techniques and
                        technologies to minimize our environmental impact.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9ff] dark:bg-[#0f172a]">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1e3a8a]">Get in Touch</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions or want to learn more about our farm? Contact us today!
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white" type="submit">
                    Submit
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">We'll get back to you as soon as possible.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#1e3a8a] text-white">
        <p className="text-xs">© 2024 Cultiva con Conciencia. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function BuildingIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>)
  );
}
