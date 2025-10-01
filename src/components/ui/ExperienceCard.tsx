import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  year: string;
  role: string;
  company: string;
  website: string;
  icon: string;
  remote?: boolean;
};

export default function ExperienceCard({
  year,
  role,
  company,
  website,
  icon,
  remote,
}: Props) {
  return (
    <div className="max-w-[1140px] flex justify-between items-center bg-neutral-900 px-6 py-5 rounded-xl shadow-lg w-full mx-auto">
      {/* Year */}
      <p className="text-[30px] font-semibold text-white w-[30%] text-start">{year}</p>

      {/* Icon */}
      <div className="w-[20%]">
      <Image src={icon} alt={role} width={82} height={82} className="rounded-full object-contain" />
      </div>
      {/* Role + Company */}
      <div className="flex flex-col text-left w-[30%]">
        <h3 className="text-white font-semibold text-[24px]">{role}</h3>
        <p className="text-sm text-gray-400">
          {company}{" "}
          {remote && <span className="text-gray-500">(Remote)</span>}
        </p>
      </div>

      {/* Link */}
      <a
        href={website}
        className="flex items-center gap-1 text-white hover:text-green-500 transition"
      >
        Go to website <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
