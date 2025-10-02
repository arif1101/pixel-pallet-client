import React from 'react'

interface BannerProps {
  path: string;
  text: string
}

export default function Banner({ path,text }: BannerProps) {
  return (
    <div className="relative max-h-[350px] md:h-[350px] h-full bg-[url('/banner-1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-10 text-center text-white">
        <h1 className="text-[48px] md:text-[60px] font-extrabold tracking-wide">{text}</h1>
        <p className="text-[18px] md:text-[20px] font-light">Home / <span className="text-red-400">{path}</span></p>
      </div>
    </div>
  )
}
