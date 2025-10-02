import Banner from "@/components/shared/Banner"
// import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { Project } from "@/type/types";



export default async function Projects() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`,{
    cache: "no-store"
  })
  const {data : projects} = await res.json();
  // console.log(data)
  
  
  return (
    <div>
        <Banner path="Projects" text="Project Showcase"/>    
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="max-w-[1140px] mx-auto px-4">
            
            {/* Heading */}
            <div className="mb-12">
            <p className="text-green-400 uppercase tracking-wide text-sm font-semibold">
                Recent Work
            </p>
            <h2 className="text-4xl font-bold mt-2">Showcasing My Projects</h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-36 mr-20">
              {projects.map((project : Project, index:number) => (
                <div
                  key={project.id}
                  className={`
                    ${index % 2 === 1 ? "sm:mt-20" : ""} 
                  `}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>


        </div>
        </section>
    </div>
  )
}


{/*  */}