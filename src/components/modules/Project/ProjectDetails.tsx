import { Project } from '@/type/types'
import Image from 'next/image'
import React from 'react'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="text-white bg-gradient-to-r from-green-950/20 via-green-950/60 to-green-950/20 py-16">
      <div className="max-w-[1140px] mx-auto space-y-16 px-4">
        {/* top side */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* left side */}
          <div className="border border-gray-500 md:w-2/3 w-full p-4 overflow-hidden shadow-xl shadow-green-500/10 flex justify-center items-center">
            <Image
              src={project.images[0]}
              width={550}
              height={350}
              alt="image not found"
              className="w-full h-auto max-h-[550px] object-contain rounded"
            />
          </div>

          {/* right side */}
          <div className="md:w-1/3 w-full flex flex-row md:flex-col flex-wrap gap-4 p-2 overflow-hidden justify-center">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden flex justify-center">
                <Image
                  src={image}
                  width={250}
                  height={250}
                  alt="image not found"
                  className="w-full h-auto max-h-[300px] object-contain border border-gray-500 shadow-2xl rounded bg-black"
                />
              </div>
            ))}
          </div>
        </div>

        {/* bottom side */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side */}
          <div className="md:w-2/3 w-full">
            <h1 className="text-2xl font-bold mb-6">PROJECT BRIEF</h1>
            <p className="text-white/80 leading-relaxed">
              {project.description}
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi hic, cum quibusdam possimus repellat? ...
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolorem. Possimus fugit expedita quos neque nobis labore, ...
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloremque accusantium animi quis odit eaque sed, ab ipsum ...
            </p>
          </div>

          {/* Right side */}
          <div className="md:w-1/3 w-full">
            <h1 className="text-2xl font-bold mb-6">PROJECT INFO</h1>
            <div className="flex flex-col gap-4">
              {[
                { label: "Category", value: project.category },
                { label: "Date", value: project.createdAt },
                { label: "Repository Server", value: project.serverRepoUrl },
                { label: "Repository Client", value: project.clientRepoUrl },
                { label: "Live Link", value: project.liveUrl },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row">
                  <h3 className="font-bold sm:w-32">{item.label}:</h3>
                  <span className="font-normal break-words">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
