import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";


export default function ExperienceSection() {
  return (
    <section className="py-24 text-center bg-[radial-gradient(circle,rgba(239,68,68,0.2)_0%,black_70%)]">
      <h2 className="text-[48px] font-bold text-white mb-6">My Work Experience</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-16">
        Must explain to you how all this mistaken idea of denouncing pleasure
        was born and give you a complete account of the system
      </p>

      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}
