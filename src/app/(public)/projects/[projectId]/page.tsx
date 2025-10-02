import ProjectDetails from '@/components/modules/Project/ProjectDetails';
import { Project } from '@/type/types';
import React from 'react'

interface Data {
  data: Project
}

export default async function ProjectDetailsPage({params}:{params: Promise<{projectId: string}>}) {

  const {projectId} = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`)
  const {data:project}:Data = await res.json();
  console.log(project)
  return (
    <div className='text-white'>
      <ProjectDetails project={project}/>
    </div>
  )
}
