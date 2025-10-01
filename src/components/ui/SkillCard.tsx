// components/ui/SkillCard.tsx
export default function SkillCard({
  percent,
  label,
  color,
  bcolor
}: {
  percent: string;
  label: string;
  color: string;
  bcolor: string;
}) {
  return (
    <div className={`bg-black/80 rounded-lg p-[3px] shadow-lg text-center hover:scale-105 transition-transform max-w-[183px] w-full h-[167px] bg-gradient-to-b ${bcolor} to-black`}>
        <div className="flex flex-col items-center justify-center h-full w-full bg-black rounded-lg">
            <h3 className={`text-[35px] font-bold text-white`}>{percent}</h3>
            <p className={`${color} mt-2 text-[16px] font-semibold`}>{label}</p>
        </div>
    </div>
  );
}
