// components/PortfolioCarousel.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { portfolioItems } from "@/data/portfolioItems"
// import Autoplay from "embla-carousel-autoplay"



export default function RecentWork() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 4000, stopOnInteraction: true })
//   )

  return (
    <div className="bg-gradient-to-r from-yellow-300/20 to-gray-900/70 py-24">
      <div className="max-w-[1140px] mx-auto space-y-20">
      <div className="flex items-center justify-between w-full">
        {/* Left side text */}
        <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Recent Work.
          </h3>
          <p className="text-lg md:text-xl max-w-md text-white/60 font-semibold">
            Must explain to you how all this mistaken idea pleasure born 
            and give you a complete account.
          </p>
        </div>

        {/* Right side circle icon */}
        <div className="w-[150px] h-[150px] rounded-full bg-neutral-800 border border-dashed border-neutral-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        </div>
      </div>

      
      <Carousel
        // plugins={[plugin.current]}
        className="w-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {portfolioItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/3 px-4"
            >
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative w-full h-[450px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform ease-in-out hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-[25px] leading-snug hover:text-green-500 duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-1">{item.category}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons at bottom center */}
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious className="relative static translate-y-0 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white" />
          <CarouselNext className="relative static translate-y-0 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white" />
        </div>
      </Carousel>
      </div>
    </div>
  )
}
