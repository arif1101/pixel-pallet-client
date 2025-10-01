import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function Hero() {
  return (
        <div className='max-w-[1140px] mx-auto flex gap-12'>
            {/* left section  */}
            <div className='w-3/6 my-auto'>
                <h2 className='text-[60px] text-yellow-400'>Hello,</h2>
                <h1 className='text-[90px]'>I Am Arif</h1>
                <h3 className='text-[32px] text-green-500'>FULL STACK Web Developer</h3>
                <p className='text-[19px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta facere voluptatum nam temporibus excepturi libero nulla.</p>
                <div className='flex gap-4 mt-6'>
                    <Button className='text-[16px] bg-green-500'>Preview CV</Button>
                    <Button className='text-[16px] bg-green-500'>Download CV</Button>
                </div>

            </div>

            {/* right section  */}
            <div className="w-3/6 relative">
            <Image
                src="/me.JPG"
                alt="image not found"
                width={600}
                height={300}
                className="rounded-full"
            />

            {/* Top Left */}
            <div className="w-[110px] h-[110px] absolute top-10 left-10 bg-white p-5 rounded-2xl">
                <Image src="/js.png" alt='image not found' width={70} height={70} className='rounded-2xl'/>
            </div>

            {/* Top Right */}
            <div className="w-[110px] h-[110px] absolute top-10 right-10 bg-white p-5 rounded-2xl">
                <Image src="/typescript.png" alt='image not found' width={70} height={70} className='rounded-2xl'/>
            </div>

            {/* Bottom Right */}
            <div className="max-w-[223px] w-full max-h-[85px] absolute bottom-10 left-0 bg-white flex text-black rounded-l-full items-center rounded-r-full px-5 py-[5px] justify-between">
                <Image src="/shield.png" alt='image not found' width={50} height={50} className='rounded-2xl'/>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[25px] font-bold'>1500+</h1>
                    <p className='text-[15px] font-semibold'>complete project</p>
                </div>
            </div>

            {/* Bottom Left */}
            <div className="w-[110px] h-[110px] absolute bottom-10 right-10 bg-white p-5 rounded-2xl">
                <Image src="/react.png" alt='image not found' width={70} height={70} className='rounded-2xl'/>
            </div>
            </div>

        </div>
  )
}
