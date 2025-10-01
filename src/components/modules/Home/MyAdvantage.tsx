import SkillCard from "@/components/ui/SkillCard";
import React from "react";

export default function MyAdvantage() {
  // Skill Data
  const skills = [
    { percent: "90%", label: "MERN", color: "text-green-400", bcolor:"from-green-400" },
    { percent: "85%", label: "SQL", color: "text-blue-400",bcolor:"from-blue-400" },
    { percent: "88%", label: "TypeScript", color: "text-sky-400", bcolor:"from-sky-400" },
    { percent: "80%", label: "Prisma", color: "text-purple-400", bcolor:"from-purple-400" },
    { percent: "92%", label: "Next.js", color: "text-gray-300", bcolor:"from-gray-400" },
    { percent: "82%", label: "Postgres", color: "text-yellow-300", bcolor:"from-yellow-400" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-amber-300/30 via-gray-900 to-purple-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Side */}
        <div className="relative bg-gradient-to-b from-amber-300 max-w-[350px] max-h-[450px] h-full rounded-[11px] ">
          <div className="bg-black/80 rounded-lg shadow-lg p-10 text-center h-full">
            <h1 className="text-[140px] font-bold text-yellow-400">08</h1>
            <p className="text-[18px]">Years of Experience</p>
          </div>

          {/* Floating Card */}
          <div className="absolute max-w-[294px] w-full  bottom-6 left-[100%] -translate-x-1/2 p-[3px] rounded-lg shadow-lg flex justify-between items-center bg-gradient-to-r from-white">
            <div className="flex w-full justify-between items-center bg-gray-900 rounded-lg px-6 py-4">
              <h3 className="text-[45px] font-bold text-green-500">100%</h3>
              <div className="text-[16px]">
                <p>client</p>
                <p>saticfaction</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-[48px] font-bold mb-4">My Advantage</h2>
          <p className="text-gray-300 mb-8">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual and praising pain was
            born.
          </p>

          {/* Skill Grid with map */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                percent={skill.percent}
                label={skill.label}
                color={skill.color}
                bcolor={skill.bcolor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
