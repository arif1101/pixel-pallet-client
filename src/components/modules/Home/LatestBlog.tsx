import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const blogPosts = [
  {
    image: "/me.JPG",
    date: "January 02, 2025",
    title: "Have evolved over the years sometimes accident.",
  },
  {
    image: "/me.JPG",
    date: "January 03, 2025",
    title: "The Internet tend to repeat predefined chunks.",
  },
  {
    image: "/me.JPG",
    date: "January 05, 2025",
    title: "The standard chunk of used since the interested.",
  },
  {
    image: "/me.JPG",
    date: "January 06, 2025",
    title: "Another blog post example.",
  },
  {
    image: "/me.JPG",
    date: "January 07, 2025",
    title: "Yet another interesting post.",
  },
];

export function LatestBlog() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-900/20 via-gray-900/20 to-green-800/50">
    <div className="max-w-[1140px] mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-[48px] font-bold text-white mb-3">Latest Blog</h3>
        <p className="text-[18px] max-w-[530px] mx-auto text-gray-400">
          Must explain to you how all this mistaken idea of pleasure born and give you a complete account.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="px-6">
          {blogPosts.map((post, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
              <Card className="text-white">
                <Image
                  src={post.image}
                  alt={post.title}
                  height={267}
                  width={412}
                  className="w-full max-w-[412px] h-[267px] object-cover"
                />
                <CardContent className="flex flex-col gap-2 max-w-[412px] max-h-[220px] p-0">
                  <span className="text-sm text-white bg-gray-400/40 max-w-[137px] px-[10px] py-[5px]">{post.date}</span>
                  <h4 className="font-bold text-[25px]">{post.title}</h4>
                  <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">
                    Post Details &rarr;
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>
  );
}
