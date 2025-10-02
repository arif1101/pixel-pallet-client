import { Badge } from "@/components/ui/badge"
import { Project } from "@/type/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project } : ProjectCardProps) {

  // console.log(project)
  
  return (
    <div className="relative group rounded-md">
      {/* Image wrapper with overflow hidden */}
      <div className="rounded-md overflow-hidden">
        <Image
          src={project.images[0] ?? "/project-1.jpg"}
          alt={project.title}
          width={538}
          height={538}
          className="w-[538px] h-[538px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content (not clipped) */}
      <div className="absolute bottom-6 -right-10 flex flex-col gap-2 items-end">
        <Badge className="w-fit bg-green-500 text-black text-[16px] font-semibold py-1 px-6 mb-[15px]">
          {project.category}
        </Badge>
        <div className="border w-full"></div>
        <Link href={`/projects/${project.id}`} className="text-[36px] font-bold leading-snug max-w-[300px] text-right hover:text-green-500 duration-300">
          {project.title}
        </Link>
      </div>
    </div>
  )
}
