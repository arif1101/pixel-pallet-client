import Banner from '@/components/shared/Banner'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='text-white'>
      <Banner path='About' text='About Me'/>
      
    <div className='bg-gradient-to-r from-purple-950/40 via-purple-950/10 to-purple-950/30'>
      <div className='max-w-[1140px] mx-auto py-24 flex flex-col md:flex-row items-start gap-12'>
        
        {/* left side (Image card) */}
        <div className="w-full md:w-[467px] h-[551px] bg-neutral-700 p-8 rounded-md flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/meFormal.jpg"
              alt="me"
              fill
              className="object-contain rounded-md"
            />
          </div>
        </div>

        {/* right side (Text content) */}
        <div className="flex-1 text-white space-y-6 px-10">
          <h1 className="text-3xl font-bold leading-snug">
            Developer, Designer, Creator, Innovator
          </h1>
          
          <p className='text-gray-400'>
            Hello! I amm Arif Rahman, a passionate full-stack web developer specializing in building 
            modern, efficient, and user-friendly web applications. With a strong foundation in MERN 
            stack and a keen interest in AI and Machine Learning, I focus on creating solutions that 
            simplify processes and enhance user experiences. I&lsquo;m dedicated to simplifying development 
            workflows.
          </p>

          <p className='text-gray-400'>
            My mission is to make web development faster, more accessible, and impactful for both 
            developers and users. I enjoy tackling challenging problems and constantly expanding my 
            skills to grow as a versatile, full-stack engineer capable of crafting seamless, secure, 
            and scalable applications.
          </p>

          <div className='flex gap-4'>
            <div className='border-2 border-green-500'></div>
            <p className='text-gray-400'>
              I&apos;m a lifelong learner and an active supporter of the developer community, committed 
              to exploring and sharing the latest tools, technologies, and best practices. I use 
              <span className="font-semibold"> app.daily.dev </span> to stay updated on emerging 
              trends, deepen my knowledge, and discover innovative ideas that can improve 
              development workflows. By sharing what I learn and applying it in my projects, I aim 
              to empower fellow developers to grow, innovate, and build better, more efficient 
              applications—so we can all move forward together.
            </p>
          </div>

          <p className="italic">— Arifur Rahman, app.daily.dev</p>
        </div>

      </div>
    </div>
      
    </div>
  )
}
